import React from "react";
import { MapProfileIcon, ShareProfileIcon, VisitProfileIcon } from "@/public/create_follow/profile_user";
import styles from './profileuser.module.css'

const AboutMe = () => {
  return (
    <div className={styles.me_content}>
        <div className={styles.box_talk_share}>

        <p className={styles.talk_share}>
            Chỉ cần bên nhau như những ngày ấy<br></br>Anh sẽ cùng em đi hết tháng
            ngày<br></br>Để trong cơn mơ anh chẳng tìm thấy<br></br>Để anh bơ vơ mãi
            phút nơi đây
        </p>
        </div>
      <div className={styles.contact_me}>
        <span className={styles.contact_title}>Liên kết</span>
        <div className={styles.contact_item}>
            <ShareProfileIcon className={``}/>
            <span className={styles.contact_link}>https://www.facebook.com</span>
        </div>
        <div >
            <p className={styles.contact_title}>Tông tin chia sẻ</p>
            <div className={styles.contact_item}>
                <MapProfileIcon className={``}/>
                <span>Hà Nội, Việt Nam</span>
            </div>
            <div className={styles.contact_item}>
                <VisitProfileIcon className={``}/>
                <span>999K lượt xem</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
