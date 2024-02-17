import { ReactElement, useContext, useEffect, useRef, useState } from "react";
import { Type } from "@/component/interface";
import { LocationContext } from "../_app";
import Slide from "@/commons/Slide/Slide";
import { useMediaQuery } from "react-responsive";
import { TabSideContext } from "@/pages/_app";
import styles from "../../commons/Slide/slide.module.css";
import Banner from "@/commons/Banner/banner";

import { Folder } from "@/component/project/folder";
import stylesProject from "../../pages/projects/project.module.css";
import Image from "next/image";
// import SlideFollowName from "@/commons/SlideFllowName/slideFollowName";
import ItemSamepleContentExample from "@/commons/Slide/itemSampleExample";
import Item from "@/commons/Slide/Item";
import ItemSampleFlow from "@/commons/Slide/itemSampleFlow";
import styleSlide from "../../commons/Slide/slide.module.css";
import NavMobile from "@/commons/navbarMobile/navMobile";
import FirstTemplate from "./firstTemplate";
import { usePathname } from 'next/navigation'



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
  const [currentPage, setCurrentPage] = useState(1);
  const boxRightRef = useRef(null);
  const ref: any = useRef(null);
  const tabBlockRef: any = useRef(null);
  const [curentTab, setCurrentTab] = useState<number>(0);
  const { locationOfSite, setLocationOfSite }: Type = {
    ...useContext(LocationContext)
  };
  const { isTabSide, setTabSide } = { ...useContext(TabSideContext) };
  useEffect(() => {
    if (locationOfSite?.name != "sample") {
      setLocationOfSite({ name: "sample" });
    }
  }, []);



  const isTabnetCheck: boolean = useMediaQuery({
    query: "(max-width: 912px)"
  });

  console.log('istabside', isTabSide);

 

  return (
    <div
      ref={boxRightRef}
      style={{
        width: `${isTabSide  ? isTabnetCheck ? "100%" : `calc(100% - 165px)` : "100%"}`,
        padding: `${isTabSide ? `0` : isTabnetCheck ? "" : "0 5.19rem"}`,
        paddingTop: "1rem",
        marginLeft:   !isTabSide  ?  "" :   "331px" 
      }}
      className={`${styles.animation_box} ${
        !isTabSide ? styleSlide.hidden_sidebar : ""
      }`}
    >
      <div
        style={{
          height:"2000px",
          marginLeft: !isTabSide ? "" : "102.6px",
          width: `${isTabSide ? `calc(100% - 202px)` : "calc(100% - 48px)"}`,
          padding: `${isTabSide ? `0` : isTabnetCheck ? "" : "1.25rem 1.5rem"}`
        }}
        className={styles.animation_box}
      >
       <FirstTemplate/>
      </div>
    </div>
  );
}
