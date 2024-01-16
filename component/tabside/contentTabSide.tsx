import { LocationContext } from '@/pages/_app'
import styles from './tabside.module.css'
import { useContext } from 'react'
import { Type } from '../interface'
import Image from 'next/image'
import Link from 'next/link'
interface TypeItemCpn{
    icon: string,
    name: string,
    link: string,
    width: number,
    height: number
}
interface TypeProjectCpn{
    icon:string,
    name:string,
    link:string,
    width:number,
    height:number,
    hasLastIcon:boolean
}
function TabSiteHome(){
    const data  = [
        {
            icon: '/tabside/trang_chu/project.png',
            name: 'Dự án',
            link: 'projects',
            width: 24,
            height: 24
        },
        {
            icon: '/tabside/trang_chu/sample.png',
            name: 'Mẫu',
            link: 'templates',
            width: 26,
            height: 26
        },
        {
            icon: '/tabside/trang_chu/trademark.png',
            name: 'Thương hiệu',
            link: 'brand',
            width: 24,
            height: 31
        },
        {
            icon: '/tabside/trang_chu/application.png',
            name: 'Ứng dụng',
            link: 'your-apps',
            width: 23,
            height: 23
        }
    ]
    const ItemCpn = ({data}:{data:TypeItemCpn}) => {
        return (
            <Link href={`/${data.link}`}>
                <div className={`${styles.content_item}`}>
                    <div className={`${styles.content_item_left}`}>
                        <Image src={data?.icon} width={data?.width} height={data?.height} alt={data?.name}></Image>
                        <p>{data?.name}</p>
                    </div>
                    <Image src={'/tabside/arrow.png'} width={6} height={13} alt={data?.name}></Image>
                </div>
            </Link>
        )
    }
    return(
        <>
            <div className={`${styles.content_item} ${styles.magic}`}>
                <div className={`${styles.content_item_left}`}>
                    <Image src={'/tabside/trang_chu/magic.png'} width={23} height={29} alt={'magic studio'}></Image>
                    <p className={`${styles.magic_text}`}>Magic Studio</p>
                </div>
            </div>
            <div>
                {
                    data.map((data:TypeItemCpn,index:number)=>{
                        return <ItemCpn data={data} key={index} />
                    })
                }
            </div>
        </>
    )
}
function TabSiteProject(){
    const data  = [
        {
            icon: '/tabside/du_an/project.png',
            name: 'Tất cả dự án',
            link: 'projects',
            width: 24,
            height: 24,
            hasLastIcon:false
        },
        {
            icon: '/tabside/du_an/single.png',
            name: 'Dự án của bạn',
            link: 'your-projects',
            width: 24,
            height: 24,
            hasLastIcon:true
        },
        {
            icon: '/tabside/du_an/multi.png',
            name: 'Đã chia sẻ với bạn',
            link: 'shared-with-you',
            width: 25,
            height: 18,
            hasLastIcon:true
        }
    ]
    const data2 = [
        {
            icon: '/tabside/du_an/file.png',
            name: 'Thư mục 1',
            link: '',
            width: 40,
            height: 40,
            hasLastIcon:false
        },
        {
            icon: '/tabside/du_an/file.png',
            name: 'Thư mục 1',
            link: '',
            width: 40,
            height: 40,
            hasLastIcon:false
        },
        {
            icon: '/tabside/du_an/file.png',
            name: 'Thư mục 1',
            link: '',
            width: 40,
            height: 40,
            hasLastIcon:false
        },
        {
            icon: '/tabside/du_an/file.png',
            name: 'Thư mục 1',
            link: '',
            width: 40,
            height: 40,
            hasLastIcon:false
        },
        {
            icon: '/tabside/du_an/file.png',
            name: 'Thư mục 1',
            link: '',
            width: 40,
            height: 40,
            hasLastIcon:false
        }
    ]
    const ProjectCpn = ({data}:{data:TypeProjectCpn}) => {
        return(
            <Link href={`/${data.link}`}>
                <div className={`${styles.content_item} ${data?.name =='Tất cả dự án' ? styles.active : '' }`}>
                    <div className={`${styles.content_item_left}`}>
                        <Image src={data?.icon} width={data?.width} height={data?.height} alt={data?.name}></Image>
                        <p>{data?.name}</p>
                    </div>
                    {
                        data?.hasLastIcon && <Image src={'/tabside/arrow.png'} width={6} height={13} alt={data?.name}></Image>
                    }
                </div>
            </Link>
        )
    }
    return (
        <>
            <div>
                {
                    data.map((data:TypeProjectCpn,index:number)=>{
                        return <ProjectCpn data={data} key={index} />
                    })
                }
            </div>
            <p className={`${styles.recently_text}`}>Gần đây</p>
            <div className={`${styles.recently_list}`}>
                {
                    data2.map((data:TypeProjectCpn,index:number)=>{
                        return <ProjectCpn data={data} key={index} />
                    })
                }
            </div>
        </>
    )
}


export default function ContentTabSide({animation}:{animation:string}){
    const {locationOfSite , setLocationOfSite}:Type = {...useContext(LocationContext)}
    // console.log(animation);
    
    if(locationOfSite?.name == 'home'){
        return <div className={`${animation === 'left' ? styles.animated: ''} ${animation === 'left' ? styles.fadeInLeft : ''}`}>
                <TabSiteHome/>
            </div>
    
    }
    if(locationOfSite?.name == 'project'){
        return(
            <div className={`${styles.animated} ${styles.fadeInRight}`}>
                <TabSiteProject/>
            </div>
        )
    }
    if(locationOfSite?.name == 'sample'){
        return(
            <>
                Tabside mẫu
            </>
        )
    }
}