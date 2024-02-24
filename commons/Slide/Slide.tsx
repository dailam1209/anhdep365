import React, { useContext, useEffect, useState } from "react";
import { TabSideContext } from "@/pages/_app";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowRight } from "@/public/tabside/tabside_mau";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Item  from "./Item";
import { Navigation, Pagination } from "swiper/modules";

import styles from "./slide.module.css";
import ItemSampleContentExample from "./itemSampleExample";
import Link from "next/link";

export interface numberArrow {
  number: number;
  space: number,
  item: any,
  className: string
  isTitle: boolean,
  isShowAllDetail: boolean,
  title: string
}


const Slide: React.FC<numberArrow> = ({ number, space, item, className, isTitle, title, isShowAllDetail }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const {isTabSide, setTabSide} = {...useContext(TabSideContext)};

  return (
    <div>
      {
        isTitle && <div className={styles.title}>
           <p className={styles.content_slide}>{title}</p>
           {
            isShowAllDetail &&
           <Link href={''}>
           <p>Xem tất cả</p>
           </Link>
           }
           </div>
      }
    <div
      style={{
        overflow: "hidden",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
        width: "100%",
        position: 'relative',
        marginRight: '3.18rem'
      }}
      className={`${className}`}
    >
      <div
        style={{
          width : `${isTabSide ? `calc(100% - 10px)` : '100%'}`
        }}
      >
        <Swiper
        // spaceBetween={20} for in banner
          spaceBetween={space} // for content
          loop={false}
          slidesPerView="auto"
          speed={600}
          onActiveIndexChange={(e) =>{
            setActiveIndex(e.activeIndex);
            console.log(e.activeIndex);
          }}
          navigation={{
            prevEl: `.prev-${number}`,
            nextEl: `.next-${number}`
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          
        >
          {
            item.map((item: any, index: string | number) => (
            <SwiperSlide key={index} className={styles.item}>
              {item.children}
            </SwiperSlide>
            ))
          }
          
        </Swiper>
      </div>
        <div
          className={` ${styles.slide_btn} ${styles.slide_btn_left} ${activeIndex >=  1 ? styles.display_block :  styles.display_none} prev-${number}`}
        >
          <ArrowRight className={``} />
        </div>


          <div
            className={` ${styles.slide_btn} ${styles.slide_btn_right} ${activeIndex !== 12
               ? styles.display_block : styles.display_none} next-${number}`}
               style={{
                left : `${isTabSide ? `85%` : '95%'}`
              }}
          >
            <ArrowRight className={``} />
          </div>
    </div>
    </div>
  );
};

export default Slide;
