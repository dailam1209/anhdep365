import React ,{ useEffect, useRef, useState } from "react";
import s from "./index.module.scss"
import Image from "next/image"
interface IlistShow{
    title:string;
    avatar:string;
    title2?:string;
}
const SlideShow=({listShow ,widthAva ,heightAva, padding } : {listShow: IlistShow[],widthAva:number,heightAva:number,padding:boolean }) =>{
    const refDismension:any = useRef(null)
    const refDismensionItem:any = useRef(null)
    const [dimension, setDimension] = useState<number>(0)
    const [page,setPage] = useState<number>(0)
    const [itemPerPage,setItemPerPage] = useState<number>(0)
    const [windowWidth, setWindowWidth] = useState<number>(0)
    const handleScrollLeft = () => {
        setPage(page-1) 
        setWindowWidth(window.innerWidth)
      }
      const handleScrollRight = () => {
        setPage(page+1)
        setWindowWidth(window.innerWidth)
      }
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
        setDimension(Math.floor(refDismension?.current?.offsetWidth/(refDismensionItem?.current?.offsetWidth+18))*(refDismensionItem?.current?.offsetWidth+18))
        setItemPerPage(Math.floor(refDismension?.current?.offsetWidth/(refDismensionItem?.current?.offsetWidth+18)))
      },[windowWidth])
    const RecommendItem = ({data ,index, widthAvatar, heightAvatar, padding}:{data:IlistShow ,index:number, widthAvatar:number, heightAvatar:number ,padding :boolean}) => {
        return(
          <div ref={refDismensionItem} key={index} className={s.recommend_item}>
            <div className={`${padding ? s.recommend_img : s.recently_img2}`}>
              <Image src={data?.avatar} alt={data?.title} width={widthAvatar} height={heightAvatar}></Image>
            </div>
            <p className={s.recommend_text}>{data?.title}</p>
            <p className={s.recommend_text2}>{data?.title2}</p>
          </div>
        )
      }
    return(
        <div className={s.sl_container}>
            <div ref={refDismension} className={s.list_recommend} style={{transform:`translate3d(-${dimension*page}px, 0, 0)`}}>
                {
                listShow?.map((item,index)=>{
                    return(
                        <div key={index}>
                            <RecommendItem padding={padding} index={index} data={item} widthAvatar={widthAva} heightAvatar={heightAva}></RecommendItem>
                        </div>
                    )
                })
                }
            </div>
            {
              page > 0 && 
              <Image 
                onClick={handleScrollLeft}  
                className={s.pre_button} 
                src={'/home/next.png'} alt="next" width={50} height={50}
              ></Image>
            }
            {
              itemPerPage*(page+1) < listShow?.length &&
              <Image 
                onClick={handleScrollRight} 
                className={s.next_button} 
                src={'/home/next.png'} 
                alt="next" width={50} height={50}
              ></Image>
            }
        </div>
    )
}
export default SlideShow;