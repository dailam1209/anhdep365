import { ReactElement, useContext, useEffect, useRef, useState } from "react";
import { Type } from "@/component/interface";
import { LocationContext, TabSideContext } from "../_app";
import styles from "./template.module.css";
import FirstTemplate from "./firstTemplate";
import { useDeviceQueries } from "@/commons/response";


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
  const { isPC, isPCSmall, isTabnet, isTabnetSmall, isMobile } = useDeviceQueries();
  const { isTabSide, setTabSide } = { ...useContext(TabSideContext) };
  const { locationOfSite, setLocationOfSite }: Type = {
    ...useContext(LocationContext)
  };
  let marginStyle = '';

  switch (true) {
    case isPC:
      marginStyle = isTabSide ? '' : '0 200px';
      break;
    case isMobile:
      marginStyle = '0 16px';
      break;
    case isPCSmall:
      marginStyle = isTabSide ? '0 35px' : '0 83px'
    default:
      marginStyle = '';
  }
  useEffect(() => {
    if (locationOfSite?.name != "sample") {
      setLocationOfSite({ name: "sample" });
    }
  }, []);

  return (
    <div  className={styles.box__template_content} style={{
      margin: marginStyle
    }}>
      <FirstTemplate/>
    </div>
  );
}
