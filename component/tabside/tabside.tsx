import Image from 'next/image'
import styles from './tabside.module.css'
import ContentTabSide from './contentTabSide'
import { Type } from '../interface'
import { LocationContext } from '@/pages/_app'
import { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { TabSideContext } from "@/pages/_app";
import { useMediaQuery } from 'react-responsive'


export default function TabSide(){
    const {locationOfSite , setLocationOfSite}:Type = {...useContext(LocationContext)}
    const [animation, setAnimation] = useState<string>('')
    const {isTabSide, setTabSide} = {...useContext(TabSideContext)}
    
      const isTabnetCheck: boolean = useMediaQuery({
        query: "(max-width: 1025px)"
      });

     
    
    return(
        <div className={`${styles.container} ${locationOfSite.name == 'sample' &&  styles.sidebar_fix} ${!isTabSide  && styles.sidebar_transform} ${isTabnetCheck ? styles.sidebar_fixed : ''}`}  >
            <div className={styles.user_block}>
                <Image src={'/tabside/avatar.png'} width={49} height={49} alt='avatar'></Image>
                <p>Nguyễn Văn Mèo Em</p>
            </div>
            <div className={styles.function_change}>
                <Link href={'/'}>
                <div className={`${styles.title} ${locationOfSite.name == 'home' ? styles.active :''}`}>
                    {
                        locationOfSite.name == 'home' &&
                        <>
                            <Image src={'/tabside/trang_chu/home.png'} width={24} height={24} alt='avatar'></Image>
                            <p>Trang chủ</p>
                        </>
                    }
                    {
                        (
                            locationOfSite.name == 'project' ||
                            locationOfSite.name == 'brand'
                        ) &&
                        <>
                            <Image onClick={()=>setAnimation('left')} src={'/tabside/trang_chu/back.png'} width={24} height={18} alt='avatar'></Image>
                            <p onClick={()=>setAnimation('left')}>Quay lại Trang chủ</p>
                        </>
                    }
                </div>
                </Link>
                <div className={`${styles.content}`}>
                    <ContentTabSide animation={animation}/>
                </div>
            </div>
            <p className={`${styles.attractStar}`}>Đã gắn sao</p>
            <div className={styles.upload}>
                <Image src={'/tabside/upload.png'} width={31} height={29} alt='avatar'></Image>
                <p>Tải lên</p>  
            </div>
            <div className={styles.function_fix}>
                <div className={styles.function_fix_item}>
                    <Image src={'/tabside/group.png'} width={31} height={29} alt='avatar'></Image>
                    <p>Tạo đội</p>
                </div>
                <div className={styles.line}></div>
                <div className={styles.function_fix_item}>
                    <Image src={'/tabside/recycle_bin.png'} width={23} height={27} alt='avatar'></Image>
                    <p>Thùng rác</p>
                </div>
            </div>
        </div>
    )
}