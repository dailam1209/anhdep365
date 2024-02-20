import React from "react";
import styles from "./business.module.css";
import Image from "next/image";

const Banner = () => {
  return (
    <div className={styles.banner_business}>
      {/* title */}
      <div className={styles.title}>
        <h2 className={styles.title_banner}>Tái định nghĩa cách ta làm việc</h2>
        <p className={styles.description_banner}>
          Tạo ấn tượng khi hoàn thành công việc, từ whiteboard, mẫu <br></br>{" "}
          bài thuyết trình, hóa đơn đến tiêu đề thư
        </p>
      </div>
      {/* icon */}
      <div className={styles.icons} style={{
        backgroundImage: `url('/photo/business/dot.png')` ,
        padding: '10px 20px'
      }}>
        {/* icon left */}
        <div className={styles.icon_left}>
          {/* top */}
          <div className={styles.icon_left_top}>
            <Image
              className={styles.sticker_job}
              src="/photo/business/sticker-great-job.png"
              alt="laptop"
              width={41.87}
              height={58}
              objectFit="cover"
              objectPosition="center"
            />
            <Image
              className={styles.paper_image_1}
              src="/photo/business/paper-green.png"
              alt="paper"
              width={61}
              height={67}
            />
          </div>
          <div className={styles.icon_left_bottom}>
            <Image
              className={styles.sticker_well_done}
              src="/photo/business/sticker-well-done.png"
              alt="laptop"
              width={68.62}
              height={99.59}
              objectFit="cover"
              objectPosition="center"
            />
            <Image
              className={styles.paper_image_2}
              src="/photo/business/paper-yellow.png"
              alt="paper"
              width={68}
              height={94}
            />
          </div>
          {/* bottom */}
        </div>
        {/* center */}
        <div className={styles.icon_certer}>
          <Image
            className={styles.sticker_good_job}
            src="/photo/business/sticker-good-job.png"
            alt="laptop"
            width={111}
            height={70}
            objectFit="cover"
            objectPosition="center"
          />
          <div className={styles.wrapper_laptop}>
            <Image
              className={styles.image_laptop}
              src="/photo/business/laptop.png"
              alt="laptop"
              width={456.73}
              height={245.41}
              objectFit="cover"
              objectPosition="center"
            />
            <Image
              className={styles.image_in_laptop}
              src="/photo/business/in-laptop.png"
              alt="paper"
              width={318.35}
              height={201.68}
              objectFit="cover"
              objectPosition="center"
            />
            <Image
              className={styles.image_bottom_laptop}
              src="/photo/business/sticker-bright.png"
              alt="paper"
              width={102}
              height={107}
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>

        {/* icon right */}
        <div className={styles.icon_right}>
          {/* top */}
          <div className={styles.icon_right_top}>
          <Image
            className={styles.paper_right_top}
            src="/photo/business/paper-yellow.png"
            alt="laptop"
            width={67}
            height={77}
            objectFit="cover"
            objectPosition="center"
          />
          </div>
          
          {/* bottom */}
          <div className={styles.icon_right_top}>
          <Image
            className={styles.paper_right_bottom}
            src="/photo/business/paper-yellow.png"
            alt="laptop"
            width={67}
            height={77}
            objectFit="cover"
            objectPosition="center"
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
