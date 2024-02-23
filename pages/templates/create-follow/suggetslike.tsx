import React from "react";
import styles from "./createlike.module.css";
import Image from "next/image";
import Link from "next/link";

const SuggetsLike = () => {
  return (
    <Link href={'/templates/create-follow/present'}>
      <div className={styles.item_user}>
      {/* image background user */}
      <div className={styles.background_user}>
        {/* background */}
        <div className={styles.background}>
          <div className={styles.background_left}>
            <Image
              src="/create_follow/image_large.png"
              alt="image_large"
              fill
            />
          </div>
          <div className={styles.background_right}>
            <div className={styles.image_top}>
              <Image
                src="/create_follow/image_small_1.png"
                alt="image_small_1"
                fill
              />
            </div>
            <div className={styles.image_bottom}>
              <Image
                src="/create_follow/image_small_2.png"
                alt="image_small_2"
                fill
              />
            </div>
          </div>
        </div>
        {/* user */}
        <div className={styles.image_user} >
          <div className={styles.image_user_border} style={{
            backgroundColor: '#E0B8FF'
          }}>
            <div className={styles.image}>
              <Image src="/create_follow/user.png" alt="" fill />
            </div>

          </div>
        </div>
      </div>
      {/* infor and follow */}
      <div className={styles.infor_follow}>
        <p className={styles.infor_name}>Vũ Thiên Như Quỳnh</p>
        <p className={styles.infor_user_follow}>20N người theo dõi</p>
        <div>

        <button className={styles.action_follow}>Theo dõi</button>
        </div>
      </div>
    </div>
    </Link>
    
  );
};

export default SuggetsLike;
