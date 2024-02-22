import { useContext, useEffect, useRef, useState } from "react";
import styles from "@/component/project/brand.module.css";
import { TabSideContext } from "../_app";
import { BrandItem } from "@/component/project/allProject";
import styleBrandPage from './brand.module.css'
import { useMediaQuery } from "react-responsive";
import Link from "next/link";

interface BrandType {
  index: number;
  image: string;
  color: string;
  title: string;
}

interface DesignDimensionType {
  itemPerRow: number;
  windowWidth: number;
  gap: number;
  marginLeft: number;
}
const ItemBrand = () => {
  const itemWidthRef = useRef(null);
  const { isTabSide, setTabSide } = { ...useContext(TabSideContext) };
  const [widthTitle, setWidthTitle ] = useState(0);

  const [brandDimension, setBrandDimension] = useState<DesignDimensionType>({
    itemPerRow: 0,
    windowWidth: 0,
    gap: 0,
    marginLeft: 0
  });
  const brandRef: any = useRef(null);
  const brandItemRef: any = useRef(null);

  const listBrand: BrandType[] = [];
  for (let index = 0; index < 25; index++) {
    listBrand.push({
      index: index,
      image: "/project/brand_logo.png",
      title: "Bộ thương hiệu",
      color: "#FF6A6A,#FFF6A3,#6AA6FF"
    });
  };
  const isMoreTabnet = useMediaQuery({ query: "(max-width: 1366px)" });

  return (
    <div className={`${styles.design}`}>
      <div className={`${styles.block_title}`}>
        <p
          className={`${styles.title}`}
          style={{
            width: `${isMoreTabnet ? (itemWidthRef.current?.clientWidth * 4 + 4 * 16) + 'px' : '100%'}`,
            alignItems: 'center'
          }}
        >
          Mẫu thương hiệu
        </p>
      </div>
      <div
        className={`${styles.design_content} ${styles.design_content2} ${styleBrandPage.list_item}`}
        style={{
          margin: "0 34px",
          display: "flex",
          flexWrap: 'wrap',
          gap: `16px`,
          marginTop: `${
            listBrand?.length > brandDimension?.itemPerRow
              ? brandDimension?.gap
              : 0
          }px`
        }}
      >
        {listBrand?.map((item: BrandType, index: number) => {
          return (
            Math.floor(listBrand?.length / brandDimension?.itemPerRow) ==
              Math.floor(index / brandDimension?.itemPerRow) &&
            Math.floor(listBrand?.length / brandDimension?.itemPerRow) != 0 && (
              <Link href={'/brand/create'}>
              <div key={index} ref={itemWidthRef} >
                <BrandItem data={item}></BrandItem>
              </div>
              </Link>
              
            )
          );
        })}
      </div>
      <div className={`${styles.more}`}>
        <p className="prevent-select">Hiển thị thêm</p>
      </div>
    </div>
  );
};

export default ItemBrand;
