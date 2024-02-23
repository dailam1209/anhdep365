import React from 'react';
import Image from 'next/image';
import styleCreateFollow from '../createlike.module.css';
import styles from './profileuser.module.css'
import { Share, ThreeDotFollow } from '@/public/create_follow';
import { TwoUserProfileIcon, WarnProfileIcon } from '@/public/create_follow/profile_user';

const UserInfor = () => {
  return (
    <div className={styles.profile_user}>
        <div className={styles.profile_image}>
            <Image src="/create_follow/profile_user/avatar.png" alt="profile_user" fill/>
        </div>
        <span className={styles.profile_name}>Vanilla Studio</span>
        <p className={styles.profile_mail_number}>@vanilla <span>10K Người theo dõi</span></p>
        <div className={styles.action}>
            <button>
                Theo dõi
            </button>
            {/* <button className={styles.profile_following}>
                Đang theo dõi
                <div className={styles.remove_follow}>
                  <TwoUserProfileIcon className={``}/>
                  <p>Bỏ theo dõi<span> Vanilla Studio</span></p>
                </div>
            </button> */}
            <div className={styleCreateFollow.follow__action_handle}>
            {/* share */}
            <div className={styleCreateFollow.action_share}>
              <Share/>
              <p className={styleCreateFollow.actione_text}>Chia sẻ</p>
            </div>
            <div className={`${styleCreateFollow.action_share} ${styleCreateFollow.action_three_dot}`}>
              <ThreeDotFollow className={undefined}/>
              <div className={`${styleCreateFollow.box_action_remove} ${styles.custom_action_remove}`}>
                  <WarnProfileIcon className={``}/>
                  <p className={styles.action_remove_follow_profile}>Báo cáo</p>
              </div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default UserInfor