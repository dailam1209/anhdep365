import Image from 'next/image'
import styles from './picture.module.css'
import { useEffect, useRef, useState } from 'react'
interface ImageType{
    index:number,
    image:string,
    text:string
}
interface ImageDimensionType{
    itemPerRow:number,
    windowWidth:number,
    gap:number,
    marginLeft:number
  }
const listImage:ImageType[] = []
for (let index = 0; index < 12; index++) {
    listImage?.push(
    {
      index:index,
      image:'/home/project_img.png',
      text:`CV số ${index+1}`
    }
  )
}
export function Picture(){
    const imageRef:any = useRef(null)
    const imageItemRef:any = useRef(null)
    const [imageDimension, setImageDimension] = useState<ImageDimensionType>({
        itemPerRow:0,
        windowWidth:0,
        gap:0,
        marginLeft:0
    })
    const setWindowDimensions = () => {
        setImageDimension({...imageDimension,windowWidth : window.innerWidth})
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
        if(imageItemRef?.current){
          setImageDimension(
            {
              ...imageDimension,
              itemPerRow : Math.floor((imageRef?.current?.offsetWidth + gap_local) / (imageItemRef?.current?.offsetWidth + gap_local)),
              marginLeft : imageItemRef?.current?.offsetLeft - imageRef?.current?.offsetLeft,
              gap : gap_local
            }
          )
        }
      },[imageDimension?.windowWidth])
    const ImageItem = ({data}:{data:ImageType}) => {
        return(
          <div key={data?.index} className={`${styles.image_item}`}>
            <div className={`${styles.image_img}`}>
              <Image src={data?.image} alt={data?.text} width={171} height={160}></Image>
            </div>
            <p className={`${styles.image_text}`}>{data?.text}</p>
          </div>
        )
      }
    return(
        <div className={`${styles.image} ${styles.fadeInRight} ${styles.animated}`}>
                <div className={`${styles.block_title}`}>
                    <Image src={'/header/dropdown_icon.png'} width={13} height={6} alt=""></Image>
                    <p className={`${styles.title}`}>Hình ảnh</p>
                </div>
                <div className={`${styles.image_content}`} ref={imageRef}
                  style={{justifyContent:`${listImage?.length > imageDimension?.itemPerRow && imageDimension?.itemPerRow != 0 ? 'space-around' : 'flex-start'}`}}
                >
                    {
                        listImage?.map((item:ImageType,index:number)=>{
                            return(
                              ((Math.floor(listImage?.length / imageDimension?.itemPerRow) != Math.floor((index) / imageDimension?.itemPerRow)) || index < imageDimension?.itemPerRow)
                              &&
                              <div key={index} ref={index == 0 ? imageItemRef : null}>
                                  <ImageItem data={item}></ImageItem>
                              </div>
                            )
                        })
                    }
                </div>
                <div 
                  className={`${styles.image_content} ${styles.image_content2}`} 
                  style={{
                    marginLeft:`${imageDimension?.marginLeft}px`,
                    gap:`${(imageRef?.current?.offsetWidth-(imageDimension?.itemPerRow * imageItemRef?.current?.offsetWidth)-imageDimension?.marginLeft*2)/(imageDimension?.itemPerRow-1)}px`,
                    marginTop:`${listImage?.length > imageDimension?.itemPerRow ? imageDimension?.gap : 0}px`
                  }}
                >
                  {
                    listImage?.map((item:ImageType,index:number)=>{
                      return(
                        (Math.floor(listImage?.length / imageDimension?.itemPerRow) == Math.floor((index) / imageDimension?.itemPerRow) && (Math.floor(listImage?.length / imageDimension?.itemPerRow) != 0)) 
                        &&
                        <div key={index}>
                          <ImageItem data={item}></ImageItem>
                        </div>
                      )
                    })
                  }
                </div>
            </div>
    )
}