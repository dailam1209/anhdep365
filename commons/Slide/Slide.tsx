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

export interface numberArrow {
  number: number;
  space: number,
  item: any,
  className: string
  isTitle: boolean
  title: string
}




const Slide: React.FC<numberArrow> = ({ number, space, item, className, isTitle, title }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const {isTabSide, setTabSide} = {...useContext(TabSideContext)};
 

  return (
    <div>
      {
        isTitle && <p className={styles.content_slide}>{title}</p>
      }
    <div
      style={{
        overflow: "hidden",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
        width: "100%",
        position: 'relative',
        // marginRight: '3.18rem'
      }}
      className={`${className}`}
    >
      <div
        style={{
          width : `${isTabSide ? `calc(100%)` : '100%'}`
        }}
      >
        <Swiper
        // spaceBetween={20} for in banner
          spaceBetween={space} // for content
          loop={true}
          slidesPerView="auto"
          speed={600}
          onActiveIndexChange={(e) =>{
            setActiveIndex(e.activeIndex);
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
          className={`prev-${number} ${styles.slide_btn} ${styles.slide_btn_left} ${activeIndex >=  1 ? styles.display_block :  styles.display_none}`}
        >
          <ArrowRight className={``} />
        </div>


          <div
            className={`next-${number} ${styles.slide_btn} ${styles.slide_btn_right} ${activeIndex !== 12
               ? styles.display_block : styles.display_none}`}
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
