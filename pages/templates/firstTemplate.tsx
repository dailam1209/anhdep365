import Slide from "@/commons/Slide/Slide";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Item from "@/commons/Slide/Item";
import stylesProject from "../../pages/projects/project.module.css";
import Brand from "../brand";
import { Design } from "@/component/project/design";
import { Picture } from "@/component/project/picture";
import { Video } from "@/component/project/video";
import { AllProject } from "@/component/project/allProject";
import { Folder } from "@/component/project/folder";
import styleSlide from "../../commons/Slide/slide.module.css";
import ItemSamepleContentExample from "@/commons/Slide/itemSampleExample";
import ItemSampleFlow from "@/commons/Slide/itemSampleFlow";
import Banner from "@/commons/Banner/banner";

interface tabType {
  index: number;
  title: string;
  children: ReactElement;
}

interface DimensionType {
  width: number;
  left: number;
}

const FirstTemplate = () => {
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
      children: <ItemSamepleContentExample />
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
    <div>
      {" "}
      <div
        style={{
          marginBottom: "1.25rem"
        }}
      >
        <Slide
          number={40}
          space={20}
          item={listItem1}
          className={""}
          isTitle={false}
          title={""}
        />
      </div>
      <Banner/>
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
      </div>
      {/* list follow name */}
      <div
        style={{
          margin: `2.5rem 0`
        }}
      >
        <Slide
          number={0}
          space={20}
          item={listItem3}
          className={""}
          isTitle={true}
          title={""}
        />
      </div>
      <Slide
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
      />
    </div>
  );
};

export default FirstTemplate;
