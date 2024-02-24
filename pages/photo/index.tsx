import { ReactElement, useContext, useEffect, useRef, useState } from "react";
import { Type } from "@/component/interface";
import { LocationContext } from "../_app";
import { useMediaQuery } from "react-responsive";
import { TabSideContext } from "@/pages/_app";
import {
  AllProject,
} from "@/component/project/allProject";
import { Folder } from "@/component/project/folder";
import Image from "next/image";
import stylePhoto from "./photo.module.css";
import ItemSlidePhoto from "./itemSlide";
import { Video } from "@/component/project/video";
import { Picture } from "@/component/project/picture";
import { Brand } from "@/component/project/brand";
import { Design } from "@/component/project/design";
import Slide from "@/commons/Slide/Slide";

interface tabType {
  index: number;
  title: string;
  children: ReactElement;
}

interface DimensionType {
  width: number;
  left: number;
}

const PhotoPage = () => {
  const boxRightRef = useRef(null);
  const ref: any = useRef(null);
  const tabBlockRef: any = useRef(null);
  const [curentTab, setCurrentTab] = useState<number>(0);


  const { locationOfSite, setLocationOfSite }: Type = {
    ...useContext(LocationContext)
  };
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



  useEffect(() => {
    setDimensionOfSelected({
      width: ref?.current?.offsetWidth,
      left: ref?.current?.offsetLeft
    });
    tabBlockRef?.current?.scrollTo({
      top: 0,
      left:
        ref?.current?.offsetLeft -
        tabBlockRef?.current?.offsetWidth / 2 +
        ref?.current?.offsetWidth / 2,
      behavior: "smooth"
    });
  }, [curentTab]);
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
          space={20}
          item={listItem1}
          className={""}
          isTitle={false}
          title={""} isShowAllDetail={false}        />
      </div>
      {/* list image trend */}
        {/* <TrendPhoto /> */}
      {/* <Business/> */}
    </section>
  );
};

export default PhotoPage;
function setDimensionOfSelected(arg0: { width: any; left: any; }) {
  throw new Error("Function not implemented.");
}

