import Image from 'next/image'
import styles from './design.module.css'
import { useEffect, useRef, useState } from 'react'

interface RecentlyType{
    index:number,
    image:string,
    text:string
}
interface DesignDimensionType{
    itemPerRow:number,
    windowWidth:number,
    gap:number,
    marginLeft:number
}
const listDesign:RecentlyType[] = []
for (let index = 0; index < 25; index++) {
  listDesign?.push(
    {
      index:index,
      image:'/home/project_img.png',
      text:`CV số ${index+1}`
    }
  )
}
export function Design(){
    const designRef:any = useRef(null)
    const designItemRef:any = useRef(null)
    const [designDimension, setDesignDimension] = useState<DesignDimensionType>({
        itemPerRow:0,
        windowWidth:0,
        gap:0,
        marginLeft:0
    })
    const setWindowDimensions = () => {
        setDesignDimension({...designDimension,windowWidth : window.innerWidth})
        // setWindowHeight(window.innerHeight)
    }
    useEffect(()=>{
        window.addEventListener('resize', setWindowDimensions);
        return () => {
          window.removeEventListener('resize', setWindowDimensions)
        }
      },[])
    useEffect(()=>{
        let gap_local = 0
        if(window.innerWidth <= 800){
          gap_local = 20
        }else if(window.innerWidth <= 1200){
          gap_local = 10
        }else if(window.innerWidth <= 1600){
          gap_local = 20
        }else{
          gap_local = 32
        }
        if(designItemRef?.current){
          setDesignDimension(
            {
              ...designDimension,
              itemPerRow : Math.floor((designRef?.current?.offsetWidth + gap_local) / (designItemRef?.current?.offsetWidth + gap_local)),
              marginLeft : designItemRef?.current?.offsetLeft - designRef?.current?.offsetLeft,
              gap : gap_local
            }
          )
        }
      },[designDimension?.windowWidth])
    const DesignItem = ({data}:{data:RecentlyType}) => {
        return(
            <div key={data?.index} className={`${styles.design_item}`}>
            <div className={`${styles.design_img}`}>
                <Image src={data?.image} alt={data?.text} width={171} height={160}></Image>
            </div>
            <p className={`${styles.design_text}`}>{data?.text}</p>
            </div>
        )
    }
    return(
        <div className={`${styles.container} ${styles.fadeInRight} ${styles.animated}`}>
            <div className={`${styles.design}`}>
                <div className={`${styles.block_title}`}>
                    <Image src={'/header/dropdown_icon.png'} width={13} height={6} alt=""></Image>
                    <p className={`${styles.title}`}>Thiết kế</p>
                </div>
                <div className={`${styles.design_content}`} ref={designRef}
                  style={{justifyContent:`${listDesign?.length > designDimension?.itemPerRow && designDimension?.itemPerRow != 0 ? 'space-around' : 'flex-start'}`}}
                >
                    {
                        listDesign?.map((item:RecentlyType,index:number)=>{
                            return(
                              ((Math.floor(listDesign?.length / designDimension?.itemPerRow) != Math.floor((index) / designDimension?.itemPerRow)) || index < designDimension?.itemPerRow)
                              &&
                              <div key={index} ref={index == 0 ? designItemRef : null}>
                                  <DesignItem data={item}></DesignItem>
                              </div>
                            )
                        })
                    }
                </div>
                <div 
                  className={`${styles.design_content} ${styles.design_content2}`} 
                  style={{
                    marginLeft:`${designDimension?.marginLeft}px`,
                    gap:`${(designRef?.current?.offsetWidth-(designDimension?.itemPerRow * designItemRef?.current?.offsetWidth)-designDimension?.marginLeft*2)/(designDimension?.itemPerRow-1)}px`,
                    marginTop:`${listDesign?.length > designDimension?.itemPerRow ? designDimension?.gap : 0}px`
                  }}
                >
                  {
                    listDesign?.map((item:RecentlyType,index:number)=>{
                      return(
                        (Math.floor(listDesign?.length / designDimension?.itemPerRow) == Math.floor((index) / designDimension?.itemPerRow) && (Math.floor(listDesign?.length / designDimension?.itemPerRow) != 0)) 
                        &&
                        <div key={index}>
                          <DesignItem data={item}></DesignItem>
                        </div>
                      )
                    })
                  }
                </div>
            </div>
        </div>
    )
}