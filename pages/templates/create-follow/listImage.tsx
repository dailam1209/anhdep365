import { EditFollow, Report, SeeBefore, Star, StarActive, StarBlack, ThreeDoTWhite } from '@/public/create_follow';
import Image from 'next/image';
import React from 'react';
import styles from './createlike.module.css'
import Link from 'next/link';


const ItermImage = () => {

}

const ListImgUserFollowing = () => {
  return (
    <div className={styles.list_img_show}>
        {
            [1,1,1,1,1,1,1,1,1,1,1,11,].map((img, index) => (
                <Link href={'/templates/create-follow/profile-user'}>
                    <div className={styles.img_time} style={{
                        backgroundImage: `url(/create_follow/img_user_following.png)`,
                        backgroundPosition: 'center',
                        backgroundSize:'cover',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <div className={styles.action_img_above}>
                            <div className={`${styles.action_img_icon} ${styles.action_left}`}>
                                {/* <Star/> */}
                                <StarActive className={``}/>
                            </div>
                            <div className={`${styles.action_img_icon} ${styles.action_right}`}>
                                <ThreeDoTWhite/>
                            <div className={styles.action_when_hover}>
                                <div className={styles.action_item}>
                                    <StarBlack className={styles.action_custom_icon}/>
                                    <span  className={styles.action_item_text}>Ngôi sao</span>
                                </div>
                                <div className={styles.action_item}>
                                    <EditFollow className={styles.action_custom_icon}/>
                                    <span className={styles.action_item_text}>Tuỳ chỉnh mẫu này</span>
                                </div>
                                <div className={styles.action_item}>
                                    <SeeBefore className={styles.action_custom_icon}/>
                                    <span  className={styles.action_item_text}>Xem trước mẫu này</span>
                                </div>
                                <div className={styles.action_item}>
                                    <Report className={styles.action_custom_icon}/>
                                    <span  className={styles.action_item_text}>Báo cáo</span>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))
        }
    </div>
  )
}

export default ListImgUserFollowing