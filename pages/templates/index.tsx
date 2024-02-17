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
// import SlideFollowName from "@/commons/SlideFllowName/slideFollowName";
import ItemSamepleContentExample from "@/commons/Slide/itemSampleExample";
import Item from "@/commons/Slide/Item";
import ItemSampleFlow from "@/commons/Slide/itemSampleFlow";
import styleSlide from "../../commons/Slide/slide.module.css";
import NavMobile from "@/commons/navbarMobile/navMobile";
import PhotoPage from "../photo";

interface tabType {
  index: number;
  title: string;
  children: ReactElement;
}

interface DimensionType {
  width: number;
  left: number;
}

export default function Sample() {
  const boxRightRef = useRef(null);
  const [isTabnet, setIsTabnet] = useState<boolean>();
  const [isMobile, setIsMobile] = useState<boolean>();
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
    query: "(max-width: 1024px)"
  });

  console.log("istabnet", isTabnetCheck, isTabnet);

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
      children: () => <Item />
    },
    {
      key: 2,
      children: () => <Item />
    },
    {
      key: 3,
      children: () => <Item />
    },
    {
      key: 4,
      children: () => <Item />
    },
    {
      key: 5,
      children: () => <Item />
    },
    {
      key: 6,
      children: () => <Item />
    },
    {
      key: 7,
      children: () => <Item />
    },
    {
      key: 8,
      children: () => <Item />
    },
    {
      key: 9,
      children: () => <Item />
    },
    {
      key: 10,
      children: () => <Item />
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

  console.log("!isTabSide && !isTabnetCheck", !isTabSide && !isTabnetCheck);

  return (
    <div
      ref={boxRightRef}
      style={{
        width: `${isTabSide  ? isTabnetCheck ? "100%" : `calc(100% - 165px)` : "100%"}`,
        padding: `${isTabSide ? `0` : "0 5.19rem"}`,
        paddingTop: "1rem",
        marginLeft: !isTabnetCheck ?  !isTabSide  ? "" : "331px" : ''
      }}
      className={`${styles.animation_box} ${
        !isTabSide ? styleSlide.hidden_sidebar : ""
      }`}
    >
      <div
        style={{
          marginLeft: !isTabSide ? "" : "102.6px",
          width: `${isTabSide ? `calc(100% - 202px)` : "calc(100% - 48px)"}`,
          padding: `${isTabSide ? `0` : "1.25rem 1.5rem"}`
        }}
        className={styles.animation_box}
      >
        {/* <div
          style={{
            marginBottom: "1.25rem"
          }}
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
        <Banner />
        <div className={`${stylesProject.tab_block}`}>
          <ul ref={tabBlockRef} onScroll={handleScroll}>
            {data?.map((item: tabType, index: number) => {
              return (
                <li
                  key={index}
                  ref={item?.index == curentTab ? ref : null}
                  onClick={() => setCurrentTab(item?.index)}
                >
                  <p className="prevent-select">{item?.title}</p>
                </li>
              );
            })}
            <div
              style={{
                width: `${dimensionOfSelected?.width}px`,
                left: `${dimensionOfSelected?.left}px`
              }}
              className={`${stylesProject.selected}`}
            ></div>
          </ul>
          {distanceScroll > 0 && (
            <div
              onClick={handleScrollLeft}
              className={`${stylesProject.scrollLeft}`}
            >
              <Image
                src={"/header/dropdown_icon.png"}
                width={13}
                height={6}
                alt=""
              ></Image>
            </div>
          )}
          {tabBlockRef?.current?.scrollWidth >
            tabBlockRef?.current?.offsetWidth &&
            distanceScroll !=
              tabBlockRef?.current?.scrollWidth -
                tabBlockRef?.current?.offsetWidth && (
              <div
                onClick={handleScrollRight}
                className={`${stylesProject.scrollRight}`}
              >
                <Image
                  src={"/header/dropdown_icon.png"}
                  width={13}
                  height={6}
                  alt=""
                ></Image>
              </div>
            )}
        </div> */}
        {/* list follow name */}
        {/* <div
          style={{
            margin: `2.5rem 0`
          }}
        >
          <Slide
            number={0}
            space={20}
            item={listItem4}
            className={""}
            isTitle={true}
            title={""}
          />
        </div> */}
        {/* <Slide
          number={3}
          space={13.75}
          item={listItem3}
          className={`${styleSlide.slide_margin_bottom}`}
          isTitle={true}
          title={"Có thể bạn sẽ thích"}
        />
        <Slide
          number={4}
          space={13.75}
          item={listItem3}
          className={`${styleSlide.slide_margin_bottom}`}
          isTitle={true}
          title={"Có thể bạn sẽ thích"}
        />
        <Slide
          number={5}
          space={13.75}
          item={listItem3}
          className={`${styleSlide.slide_margin_bottom}`}
          isTitle={true}
          title={"Có thể bạn sẽ thích"}
        />
        <Slide
          number={6}
          space={13.75}
          item={listItem3}
          className={`${styleSlide.slide_margin_bottom}`}
          isTitle={true}
          title={"Có thể bạn sẽ thích"}
        />
        <Slide
          number={7}
          space={13.75}
          item={listItem3}
          className={`${styleSlide.slide_margin_bottom}`}
          isTitle={true}
          title={"Có thể bạn sẽ thích"}
        />
        <Slide
          number={8}
          space={13.75}
          item={listItem3}
          className={`${styleSlide.slide_margin_bottom}`}
          isTitle={true}
          title={"Có thể bạn sẽ thích"}
        />
        <Slide
          number={9}
          space={13.75}
          item={listItem3}
          className={`${styleSlide.slide_margin_bottom}`}
          isTitle={true}
          title={"Có thể bạn sẽ thích"}
        />
        <Slide
          number={10}
          space={13.75}
          item={listItem3}
          className={`${styleSlide.slide_margin_bottom}`}
          isTitle={true}
          title={"Có thể bạn sẽ thích"}
        />
        <Slide
          number={11}
          space={13.75}
          item={listItem3}
          className={`${styleSlide.slide_margin_bottom}`}
          isTitle={true}
          title={"Có thể bạn sẽ thích"}
        /> */}

        <PhotoPage />
      </div>
      {/* {
        isMobileCheck && <NavMobile/>
      } */}
    </div>
  );
}
