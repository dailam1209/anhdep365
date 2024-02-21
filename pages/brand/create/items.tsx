import Image from "next/image";
import styles from './create.module.css'

export const ItemOfLogo = () => {
    return (
        <div className={styles.item__logo}>
            <div className={styles.item__logo_image} >
                <Image objectFit="contain" height={131} width={150} src={'/brand/logo_apple.png'} alt="logo-apple" />
            </div>
            <div className={styles.item_logo_infor}>
                <p className={styles.item__logo_name}>logo-apple.png</p>
                <div className={styles.item__logo_property}>
                    <span className={styles.name}>Hình ảnh</span>
                    <p className={styles.item__logo_time}> <span className={styles.time}> 5</span> <span>phút trước</span></p>
                </div>
            </div>
        </div>
    )
};