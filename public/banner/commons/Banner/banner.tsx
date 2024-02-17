import React from "react";
import Image from "next/image";
import styles from "./banner.module.css";
import { useMediaQuery } from "react-responsive";

const Banner = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(max-width: 1366px)"
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const isSmallMobile = useMediaQuery({ query: "(max-width: 430px)" });

  return (
    <section>
      <div className={styles.banner}>
        <div className={styles.wrapper_banner}>
          <h2
            className={`${styles.banner__title} ${
              !isDesktopOrLaptop && styles.display_flex
            }`}
          >
            Bắt đầu giàu cảm hứng với {"    "}
            <p className={`${!isDesktopOrLaptop && styles.paragraph}`}>Anhdep365.com</p>
          </h2>
          <p
            style={{
              marginTop: isDesktopOrLaptop ? "3rem" : ""
            }}
            className={styles.banner__des}
          >
            Với hàng nghìn mẫu thiết kế độc đáo, hãy thổi <br></br>hồn cho ý
            tưởng và tác phẩm tuyệt vời của bạn
          </p>
        </div>
        {/* image */}
        <div
          className={`${styles.image_box} ${
            isTabletOrMobile ? styles.image_box_transform : ""
          }`}
          style={{
            display: isSmallMobile ? 'none' : ''
          }}
        >
          <div className={`${styles.banner__image_1} ${styles.image_position}`}>
            <Image
              src="/banner/image_1.png"
              alt="image-1"
              fill
              objectFit="cover"
            />
          </div>
          <div className={`${styles.banner__image_2} ${styles.image_position}`}>
            <Image
              src="/banner/image_2.png"
              alt="image-1"
              fill
              objectFit="cover"
            />
          </div>
          <div className={`${styles.banner__image_3} ${styles.image_position}`}>
            <Image
              src="/banner/image_3.png"
              alt="image-1"
              fill
              objectFit="cover"
            />
          </div>
          <div className={`${styles.banner__image_4} ${styles.image_position}`}>
            <Image
              src="/banner/image_4.png"
              alt="image-1"
              fill
              objectFit="cover"
            />
          </div>
          <div className={`${styles.banner__image_5} ${styles.image_position}`}>
            <Image
              src="/banner/image_5.png"
              alt="image-1"
              fill
              objectFit="cover"
            />
          </div>
          <div className={`${styles.banner__image_6} ${styles.image_position}`}>
            <Image
              src="/banner/image_6.png"
              alt="image-1"
              fill
              objectFit="cover"
            />
          </div>
          <div className={`${styles.banner__image_7} ${styles.image_position}`}>
            <Image
              src="/banner/image_7.png"
              alt="image-1"
              fill
              objectFit="cover"
            />
          </div>
          <div className={`${styles.banner__image_8} ${styles.image_position}`}>
            <Image
              src="/banner/image_8.png"
              alt="image-1"
              fill
              objectFit="cover"
            />
          </div>
          <div className={`${styles.banner__image_9} ${styles.image_position}`}>
            <Image
              src="/banner/image_9.png"
              alt="image-1"
              fill
              objectFit="cover"
            />
          </div>
          <div
            className={`${styles.banner__image_10} ${styles.image_position}`}
          >
            <Image
              src="/banner/image_10.png"
              alt="image-1"
              fill
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
