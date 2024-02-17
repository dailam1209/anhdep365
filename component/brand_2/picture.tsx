import Image from 'next/image'
import styles from './picture.module.css'
import { useEffect, useState } from 'react'
interface typeImage{
    src:string
}

export function Picture(){
    const listImage:typeImage[] = [
        {
            src:'/1.jpg'
        },
        {
            src:'/2.jpg'
        },
        {
            src:'/3.jpg'
        },
        {
            src:'/4.jpg'
        },
        {
            src:'/5.jpg'
        },
        {
            src:'/6.jpg'
        },
        {
            src:'/7.jpg'
        },
        {
            src:'/8.jpg'
        },
        {
            src:'/9.jpg'
        },
        {
            src:'/10.jpg'
        },
        {
            src:'/11.jpg'
        },
        {
            src:'/12.jpg'
        },
        {
            src:'/1.jpg'
        }
    ]
    const [list,setList] = useState<typeImage[]>([])
    const [currentImage, setCurrentImage] = useState<typeImage>({src:''})
    const [indexLoad, setIndexLoad] = useState<number[]>([])
    const handlePreView =  (item:typeImage,e:any)=>{
        setCurrentImage(item)
        window.scrollTo({top:e.target?.offsetTop,left:0,behavior:'smooth'})
    }
    const handleLoadDone = (index:number) =>{
        
    }
    useEffect(()=>{
        
        setTimeout(()=>{
            if(list.length + 2 < listImage.length){
                setList(
                    [
                        ...list,
                        listImage[list.length],
                        listImage[list.length + 1],
                        listImage[list.length + 2]
                    ]
                )
            }else if( list.length + 1 < listImage.length){
                setList(
                    [
                        ...list,
                        listImage[list.length],
                        listImage[list.length + 1]
                    ]
                )
            }else if( list.length < listImage.length){
                setList([...list,listImage[list.length]])
            }
        },500)
    },[list])
    return(
        <div>
            {
                // list.length === listImage.length ? 
                <div className={`${styles.container} ${styles.fadeInRight} ${styles.animated}`}>
                    {
                        listImage?.map((item:any,index:number)=>{
                            handleLoadDone(index)
                            return(
                                <div key={index}>
                                    <img onClick={(e)=>handlePreView(item,e)} className={`${styles.img1}`} src={item?.src} alt="..."/>
                                </div>
                            )
                        })
                    }
                </div>
                // :<Image src="/loading.gif" alt="" height={100} width={100}/>
            }
            {
                currentImage?.src !== '' && <div className={`${styles.preview_img}`} onClick={()=>setCurrentImage({src:''})}>
                    <img loading='lazy' className={`${styles.img2}`} src={currentImage?.src} alt=''onClick={(e)=>e.stopPropagation()}/>
                </div>
            }
        </div>
    )
}