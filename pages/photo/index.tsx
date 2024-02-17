import { ReactElement, useContext, useEffect, useRef, useState } from "react";
import { Type } from "@/component/interface";
import { LocationContext } from "../_app";
import Slide from "@/commons/Slide/Slide";
import { useMediaQuery } from "react-responsive";
import { TabSideContext } from "@/pages/_app";
import styles from "../../commons/Slide/slide.module.css";
import Banner from "@/commons/Banner/banner";
import {
  AllProject,
  Brand,
  Design,
  Picture,
  Video
} from "@/component/project/allProject";
import { Folder } from "@/component/project/folder";
import stylesProject from "../../pages/projects/project.module.css";
import Image from "next/image";
import ItemSamepleContentExample from "@/commons/Slide/itemSampleExample";
import Item from "@/commons/Slide/Item";
import styleSlide from "../../commons/Slide/slide.module.css";
import ItemSampleFlow from "@/commons/Slide/itemSampleFlow";
import NavMobile from "@/commons/navbarMobile/navMobile";
import stylePhoto from "./photo.module.css";
import ItemSlidePhoto from "./itemSlide";
import TrendPhoto from "./commons/Trend/trendPhoto";
import Business from "./business";

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
  const [distanceScroll, setDistanceScroll] = useState<number>(0);
  const [dimensionOfSelected, setDimensionOfSelected] = useState<DimensionType>(
    { width: 0, left: 0 }
  );
  const [curentTab, setCurrentTab] = useState<number>(0);
  const handleScroll = () => {
    setDistanceScroll(tabBlockRef?.current?.scrollLeft);
  };
  const handleScrollLeft = () => {
    tabBlockRef?.current?.scrollTo({
      top: 0,
      left: distanceScroll - 200,
      behavior: "smooth"
    });
  };
  const handleScrollRight = () => {
    tabBlockRef?.current?.scrollTo({
      top: 0,
      left: distanceScroll + 200,
      behavior: "smooth"
    });
  };
  const { locationOfSite, setLocationOfSite }: Type = {
    ...useContext(LocationContext)
  };
  const { isTabSide, setTabSide } = { ...useContext(TabSideContext) };
  useEffect(() => {
    if (locationOfSite?.name != "sample") {
      setLocationOfSite({ name: "sample" });
    }
  }, []);

  const isMobileCheck: boolean = useMediaQuery({
    query: "(max-width: 430px)"
  });
  const isTabnetCheck: boolean = useMediaQuery({
    query: "(max-width: 913px)"
  });

  const data: tabType[] = [
    {
      index: 0,
      title: "Được đề xuất",
      children: <AllProject />
    },
    {
      index: 1,
      title: "Thuyết trình",
      children: <Folder />
    },
    {
      index: 2,
      title: "Mạng xã hội",
      children: <Design />
    },
    {
      index: 3,
      title: "Video",
      children: <Brand />
    },
    {
      index: 4,
      title: "In ấn",
      children: <Picture />
    },
    {
      index: 5,
      title: "Xem thêm",
      children: <Video />
    }
  ];

  const listIterm3 = [
    {
      key: 1,
      children: (
        <ItemSampleFlow
          index={0}
          image={"/home/project_img.png"}
          text={"Doc"}
        />
      )
    },
    {
      key: 2,
      children: <ItemSamepleContentExample />
    },
    {
      key: 3,
      children: <ItemSamepleContentExample />
    },
    {
      key: 4,
      children: <ItemSamepleContentExample />
    },
    {
      key: 5,
      children: <ItemSamepleContentExample />
    },
    {
      key: 6,
      children: <ItemSamepleContentExample />
    },
    {
      key: 7,
      children: <ItemSamepleContentExample />
    },
    {
      key: 8,
      children: <ItemSamepleContentExample />
    },
    {
      key: 9,
      children: <ItemSamepleContentExample />
    },
    {
      key: 10,
      children: <ItemSamepleContentExample />
    }
  ];
  const listItem2 = [
    {
      key: 1,
      children: () => {
        return <Item />;
      }
    },
    {
      key: 2,
      children: <Item />
    },
    {
      key: 3,
      children: <Item />
    },
    {
      key: 4,
      children: <Item />
    },
    {
      key: 5,
      children: <Item />
    },
    {
      key: 6,
      children: <Item />
    },
    {
      key: 7,
      children: <Item />
    },
    {
      key: 8,
      children: <Item />
    },
    {
      key: 9,
      children: <Item />
    },
    {
      key: 10,
      children: <Item />
    }
  ];

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

  const listItem3 = [
    {
      key: 1,
      children: () => <ItemSamepleContentExample />
    },
    {
      key: 2,
      children: () => <ItemSamepleContentExample />
    },
    {
      key: 3,
      children: () => <ItemSamepleContentExample />
    },
    {
      key: 4,
      children: () => <ItemSamepleContentExample />
    },
    {
      key: 5,
      children: () => <ItemSamepleContentExample />
    },
    {
      key: 6,
      children: () => <ItemSamepleContentExample />
    },
    {
      key: 7,
      children: () => <ItemSamepleContentExample />
    },
    {
      key: 8,
      children: () => <ItemSamepleContentExample />
    },
    {
      key: 9,
      children: () => <ItemSamepleContentExample />
    },
    {
      key: 10,
      children: () => <ItemSamepleContentExample />
    }
  ];

  const listItem4 = [
    {
      key: 1,
      children: () => (
        <ItemSampleFlow
          index={0}
          image={"/home/project_img.png"}
          text={"Doc"}
        />
      )
    },
    {
      key: 2,
      children: () => (
        <ItemSampleFlow
          index={0}
          image={"/home/project_img.png"}
          text={"Doc"}
        />
      )
    },
    {
      key: 3,
      children: () => (
        <ItemSampleFlow
          index={0}
          image={"/home/project_img.png"}
          text={"Doc"}
        />
      )
    },
    {
      key: 4,
      children: () => (
        <ItemSampleFlow
          index={0}
          image={"/home/project_img.png"}
          text={"Doc"}
        />
      )
    },
    {
      key: 5,
      children: () => (
        <ItemSampleFlow
          index={0}
          image={"/home/project_img.png"}
          text={"Doc"}
        />
      )
    },
    {
      key: 6,
      children: () => (
        <ItemSampleFlow
          index={0}
          image={"/home/project_img.png"}
          text={"Doc"}
        />
      )
    },
    {
      key: 7,
      children: () => (
        <ItemSampleFlow
          index={0}
          image={"/home/project_img.png"}
          text={"Doc"}
        />
      )
    },
    {
      key: 8,
      children: () => (
        <ItemSampleFlow
          index={0}
          image={"/home/project_img.png"}
          text={"Doc"}
        />
      )
    },
    {
      key: 9,
      children: () => (
        <ItemSampleFlow
          index={0}
          image={"/home/project_img.png"}
          text={"Doc"}
        />
      )
    },
    {
      key: 10,
      children: () => (
        <ItemSampleFlow
          index={0}
          image={"/home/project_img.png"}
          text={"Doc"}
        />
      )
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
          title={""}
        />
      </div>
      {/* list image trend */}
        {/* <TrendPhoto /> */}
      {/* <Business/> */}
    </section>
  );
};

export default PhotoPage;
