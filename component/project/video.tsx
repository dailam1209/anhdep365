import Image from 'next/image'
import styles from './video.module.css'
import { useEffect, useRef, useState } from 'react'
interface VideoType{
    index:number,
    image:string,
    text:string
}
interface VideoDimensionType{
    itemPerRow:number,
    windowWidth:number,
    gap:number,
    marginLeft:number
  }
const listVideo:VideoType[] = []
for (let index = 0; index < 12; index++) {
    listVideo?.push(
    {
      index:index,
      image:'/home/project_img.png',
      text:`CV số ${index+1}`
    }
  )
}
export function Video(){
    const videoRef:any = useRef(null)
    const videoItemRef:any = useRef(null)
    const [videoDimension, setVideoDimension] = useState<VideoDimensionType>({
        itemPerRow:0,
        windowWidth:0,
        gap:0,
        marginLeft:0
    })
    const setWindowDimensions = () => {
        setVideoDimension({...videoDimension,windowWidth : window.innerWidth})
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
        if(videoItemRef?.current){
            setVideoDimension(
            {
              ...videoDimension,
              itemPerRow : Math.floor((videoRef?.current?.offsetWidth + gap_local) / (videoItemRef?.current?.offsetWidth + gap_local)),
              marginLeft : videoItemRef?.current?.offsetLeft - videoRef?.current?.offsetLeft,
              gap : gap_local
            }
          )
        }
      },[videoDimension?.windowWidth])
    const ImageItem = ({data}:{data:VideoType}) => {
        return(
          <div key={data?.index} className={`${styles.video_item}`}>
            <div className={`${styles.video_img}`}>
              <Image src={data?.image} alt={data?.text} width={171} height={160}></Image>
            </div>
            <p className={`${styles.video_text}`}>{data?.text}</p>
          </div>
        )
      }
    return(
        <div className={`${styles.video} ${styles.fadeInRight} ${styles.animated}`}>
                <div className={`${styles.block_title}`}>
                    <Image src={'/header/dropdown_icon.png'} width={13} height={6} alt=""></Image>
                    <p className={`${styles.title}`}>Video</p>
                </div>
                <div className={`${styles.video_content}`} ref={videoRef}
                  style={{justifyContent:`${listVideo?.length > videoDimension?.itemPerRow && videoDimension?.itemPerRow != 0 ? 'space-around' : 'flex-start'}`}}
                >
                    {
                        listVideo?.map((item:VideoType,index:number)=>{
                            return(
                              ((Math.floor(listVideo?.length / videoDimension?.itemPerRow) != Math.floor((index) / videoDimension?.itemPerRow)) || index < videoDimension?.itemPerRow)
                              &&
                              <div key={index} ref={index == 0 ? videoItemRef : null}>
                                  <ImageItem data={item}></ImageItem>
                              </div>
                            )
                        })
                    }
                </div>
                <div 
                  className={`${styles.video_content} ${styles.video_content2}`} 
                  style={{
                    marginLeft:`${videoDimension?.marginLeft}px`,
                    gap:`${(videoRef?.current?.offsetWidth-(videoDimension?.itemPerRow * videoItemRef?.current?.offsetWidth)-videoDimension?.marginLeft*2)/(videoDimension?.itemPerRow-1)}px`,
                    marginTop:`${listVideo?.length > videoDimension?.itemPerRow ? videoDimension?.gap : 0}px`
                  }}
                >
                  {
                    listVideo?.map((item:VideoType,index:number)=>{
                      return(
                        (Math.floor(listVideo?.length / videoDimension?.itemPerRow) == Math.floor((index) / videoDimension?.itemPerRow) && (Math.floor(listVideo?.length / videoDimension?.itemPerRow) != 0)) 
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