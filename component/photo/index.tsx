import { ReactElement, useContext, useEffect, useRef, useState } from "react";
import { Type } from "@/component/interface";
import Slide from "@/commons/Slide/Slide";
import { LocationContext, TabSideContext } from "@/pages/_app";
import styles from "../../commons/Slide/slide.module.css";
import Image from "next/image";
import stylePhoto from "./photo.module.css";
import ItemSlidePhoto from "./itemSlide";
import TrendPhoto from "./trendPhoto";
import { useMediaQuery } from "react-responsive";

const PhotoPage = () => {

  const { locationOfSite, setLocationOfSite }: Type = {
    ...useContext(LocationContext)
  };

  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  useEffect(() => {
    if (locationOfSite?.name != "sample") {
      setLocationOfSite({ name: "sample" });
    }
  }, []);


  const listItem1 = [
    {
      key: 1,
      children: () => <ItemSlidePhoto linkImage="" text="Hoa" />
    },
    {
      key: 2,
      children: () => <ItemSlidePhoto linkImage="" text="Hoa"/>
    },
    {
      key: 3,
      children: () => <ItemSlidePhoto linkImage="" text="Hoa"/>
    },
    {
      key: 4,
      children: () => <ItemSlidePhoto linkImage="" text="Hoa"/>
    },
    {
      key: 5,
      children: () => <ItemSlidePhoto linkImage="" text="Hoa"/>
    },
    {
      key: 6,
      children: () => <ItemSlidePhoto linkImage="" text="Hoa"/>
    },
    {
      key: 7,
      children: () => <ItemSlidePhoto linkImage="" text="Hoa"/>
    },
    {
      key: 8,
      children: () => <ItemSlidePhoto linkImage="" text="Hoa"/>
    },
    {
      key: 9,
      children: () => <ItemSlidePhoto linkImage="" text="Hoa"/>
    },
    {
      key: 10,
      children: () => <ItemSlidePhoto linkImage="" text="Hoa"/>
    }
  ];

  return (
    <section>
      {/* banner  */}
      <div className={`${stylePhoto.photo_banner} `}>
        <div className={stylePhoto.banner_img}>
          <Image src="" alt="" fill />
          <div className={stylePhoto.banner_infor}>
            <h2 className={stylePhoto.title}>Khám phá ảnh</h2>
            <span className={stylePhoto.des}>
              Kho ảnh đa dạng và chất lượng cao đang chờ bạn khám phá
            </span>
          </div>
        </div>
      </div>
      {/* slide */}
      <div
        style={{
          marginBottom: "1.25rem",
          marginTop: "0.5rem"
        }}
        id="wrapper_slide"
      >
        <Slide
          number={4}
          space={isMobile ? 9.3 : 20}
          item={listItem1}
          className={""}
          isTitle={false}
          title={""}
        />
      </div>
      {/* list image trend */}
        <TrendPhoto/>
    </section>
  );
};

export default PhotoPage;
