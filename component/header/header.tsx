import Image from "next/image";
import styles from './header.module.css'
import { useContext, useState } from "react";
import { Business, Design, Education, Plan, Study } from "./tag_options/tag_option";
import { TabSideContext } from "@/pages/_app";
export function Header(){
    const {isTabSide, setTabSide} = {...useContext(TabSideContext)}
    const [isModalTag, setModalTag] = useState<boolean>(false)
    const [isModal, setModal] = useState<number>(0)
    const handleOpenModal = (number:number) => {
        if(isModal == number){
            setModal(0)
        }else{
            setModal(number)
        }
    }
    return(
        <div className={`${styles.container_header} flex`}>
            <div className="flex">
                <div className={`${styles.logo} flex`}>
                    <Image 
                        className={`${styles.logo_img}`} 
                        src={'/header/tab_icon.png'} alt='tab icon' 
                        width={35} 
                        height={35}
                        onClick={()=>setTabSide(!isTabSide)}
                    ></Image>
                    <p>LOGO</p>
                </div>
                <ul className={`${styles.tag_option} flex`}>
                    <li className={`${styles.tag} ${isModal == 1 ? styles.active : ''}`} onClick={()=>handleOpenModal(1)}>
                        <p>Điểm nhấn thiết kế</p>
                        <Image src={'/header/dropdown_icon.png'} alt='dropdown icon' width={8} height={4}></Image>
                    </li>
                    <li className={`${styles.tag} ${isModal == 2 ? styles.active : ''}`} onClick={()=>handleOpenModal(2)}>
                        <p>Kinh doanh</p>
                        <Image src={'/header/dropdown_icon.png'} alt='dropdown icon' width={8} height={4}></Image>
                    </li>
                    <li className={`${styles.tag} ${isModal == 3 ? styles.active : ''}`} onClick={()=>handleOpenModal(3)}>
                        <p>Giáo dục</p>
                        <Image src={'/header/dropdown_icon.png'} alt='dropdown icon' width={8} height={4}></Image>
                    </li>
                    <li className={`${styles.tag} ${isModal == 4 ? styles.active : ''}`} onClick={()=>handleOpenModal(4)}>
                        <p>Kế hoạch và giá cả</p>
                        <Image src={'/header/dropdown_icon.png'} alt='dropdown icon' width={8} height={4}></Image>
                    </li>
                    <li className={`${styles.tag} ${isModal == 5 ? styles.active : ''}`} onClick={()=>handleOpenModal(5)}>
                        <p>Học hỏi</p>
                        <Image src={'/header/dropdown_icon.png'} alt='dropdown icon' width={8} height={4}></Image>
                    </li>
                    <li className={styles.block_dot_more}>
                        <Image className={styles.dot_more} onClick={()=>setModalTag(!isModalTag)} src={'/header/dot_more.png'} alt='dropdown icon' width={26} height={6}></Image>
                        {isModalTag && <div className={styles.modal_tag_option}>
                            <ul>
                                <li>
                                    <p>Điểm nhấn thiết kế</p>
                                </li>
                                <li>
                                    <p>Kinh doanh</p>
                                </li>
                                <li>
                                    <p>Giáo dục</p>
                                </li>
                                <li>
                                    <p>Kế hoạch và giá cả</p>
                                </li>
                                <li>
                                    <p>Học hỏi</p>
                                </li>
                            </ul>
                        </div>}
                    </li>
                    {isModal == 1 && <Design/>}
                    {isModal == 2 && <Business/>}
                    {isModal == 3 && <Education/>}
                    {isModal == 4 && <Plan/>}
                    {isModal == 5 && <Study/>}
                </ul>
            </div>
            <div className={`${styles.user_tool} flex`}>
                <Image className={`${styles.tool_icon}`} src={'/header/setting_icon.png'} alt='dropdown icon' width={29} height={29}></Image>
                <Image className={`${styles.tool_icon}`} src={'/header/noti_icon.png'} alt='dropdown icon' width={26} height={31}></Image>
                <div className={`${styles.tool_button}`}>
                    <p>Tạo một thiết kế</p>
                </div>
                <Image className={`${styles.avatar}`} src={'/header/avatar.png'} alt='dropdown icon' width={63} height={63}></Image>
            </div>
        </div>
    )
}