import Image from 'next/image'
import styles from './folder.module.css'

export function Folder(){
    return(
        <div className={`${styles.container} ${styles.fadeInRight} ${styles.animated}`}>
            <div className={`${styles.folder}`}>
                <div className={`${styles.block_title}`}>
                    <Image src={'/header/dropdown_icon.png'} width={13} height={6} alt=""></Image>
                    <p className={`${styles.title}`}>Thư mục</p>
                </div>
                <div className={`${styles.folder_content}`}>
                    <div className={`${styles.folder_item}`}>
                        <Image src={'/project/folder_star.png'} width={60} height={60} alt=""></Image>
                        <p className='prevent-select'>Đã gắn sao</p>
                    </div>
                    <div className={`${styles.folder_item}`}>
                        <Image src={'/project/folder_upload.png'} width={60} height={60} alt=""></Image>
                        <p className='prevent-select'>Tải lên</p>
                    </div>
                    <div className={`${styles.folder_item}`}>
                        <Image src={'/project/folder.png'} width={60} height={60} alt=""></Image>
                        <p className='prevent-select'>Thư mục của tôi</p>
                    </div>
                </div>
            </div>
            <div className={`${styles.block_create_folder}`}>
                <Image src={'/project/folder_blue.png'} width={249} height={225} alt=''></Image>
                <p className={`${styles.text1}`}>Luôn ngăn nắp nhờ có các thư mục</p>
                <p className={`${styles.text2}`}>Tạo thư mục để dễ dàng sắp xếp các dự án cá nhân và của đội</p>
                <div className={`${styles.button_create}`}>
                    <Image src={'/project/add_folder.png'} width={28} height={31} alt='add folder'></Image>
                    <p className='prevent-select'>Tạo thư mục</p>
                </div>
            </div>
        </div>
    )
}