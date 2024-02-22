import Image from 'next/image';
import React from 'react';
import styles from './createlike.module.css'
import { Share, ThreeDotFollow } from '@/public/create_follow';
import { ThreeDot } from '@/public/brand';

const ItemFollow = () => {
  return (
    <div className={styles.follow__item}>
        {/* infor user */}
        <div className={styles.follow__actions}>
          {/* image */}
          <div className={styles.follow__action_user}>
            <div className={styles.user_img}>
            <Image src="/create_follow/user_follow.png" alt="user_followed" fill/>
            </div>
            <p className={styles.follow__action_name}>Vũ Thị Thiên Hương</p>
          </div>
          {/* action follow or remove */}
          <div className={styles.follow__action_handle}>
            {/* share */}
            <div className={styles.action_share}>
              <Share/>
              <p className={styles.actione_text}>Chia sẻ</p>
            </div>
            <div className={`${styles.action_share} ${styles.action_three_dot}`}>
              <ThreeDotFollow/>
              <div className={styles.box_action_remove}>
                <p className={styles.action_remove_follow}>Bỏ theo dõi</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ItemFollow