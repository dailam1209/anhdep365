import { AllProject } from "@/component/project/allProject";
import { Folder } from "@/component/project/folder";
import React, { useEffect, useRef, useState, ReactElement } from "react";
import stylesProject from "@/pages/projects/project.module.css";
import Image from "next/image";
import styles from "./profileuser.module.css";
import styleCreateLike from '../createlike.module.css'
import { Input, Select } from "antd";
import { SearchIcon } from "@/public/create_follow/profile_user"
import { Clock, Common, DropDowFollow } from "@/public/create_follow";
import AboutMe from "./aboutMe";

interface ItemProps {
    icon: any,
    label: string,
    isActived: boolean
  }
  
  const Item:React.FC<ItemProps> = ({ icon, label, isActived }) => {
    return (
      <div className={styles.select_item}>
        <div className={styles.select_left}>
          <div className={styles.select_icon}>
            {icon}
          </div>
          <p className={styles.select_text}>{label}</p>
        </div>
      </div>
    )
  }

const ContentPage = () => {
    const handleChange = (value: string) => {
    };
  
    const options = [
      { value: "mau", label: "Mẫu"},
      { value: "photo", label: "Ảnh"},
      { value: "do hoa", label: "Đồ họa"}
    ];
  return (
    <div className={styles.content_page}>
      <div className={styles.content_greate}>
        <p className={styles.greate_title}>Đặc sắc</p>
        <div className={styles.greate_imgs}>
          {[1, 1, 11, 1, 1, 11, 11, 1, , 1, 11, 11].map((img, index) => (
            <div key={index} className={styles.content_img}>
              <Image src="/create_follow/profile_user/great.png" alt="" fill />
            </div>
          ))}
        </div>
      </div>
      {/* all product */}
      <div className={styles.content_products}>
        <p className={styles.greate_title}>Tất cả sản phẩm</p>
        {/* filter */}
            <div className={styles.box_fillter}>

                <div className={styleCreateLike.box_select}>
                    <Select
                    suffixIcon={ <DropDowFollow/>}
                    defaultValue={options[0]}
                    style={{ width: 120 }}
                    onChange={handleChange}
                    options={options}
                    />
                </div>
                    <Input className={styles.input_search} size="large" style={{
                        height: '50px'
                    }} placeholder="Tìm kiếm mẫu theo Vanilla studio" prefix={<SearchIcon className={``} />}/>
            </div>
        </div>
        <span className={styles.product_total}>9,999 mẫu</span>
        <div className={`${styles.greate_imgs} ${styles.add_margin}`}>
          {[1, 1, 11, 1, 1, 11, 11, 1, , 1, 11, 11].map((img, index) => (
            <div key={index} className={styles.content_img}>
              <Image src="/create_follow/profile_user/great.png" alt="" fill />
            </div>
          ))}
        </div>
        <div className={styles.products_giveaway}>
          {
            [1,1,1,1,1,1,1,1,1,1,1,1].map((img, index) => (
              <div key={index} className={styles.product_giveaway}>
                <Image src="/create_follow/profile_user/giveaway.png" alt="" fill/>
              </div>
            ))
          }
        </div>
      </div>
  )
}

interface tabType {
  index: number;
  title: string;
  children: ReactElement;
}

interface DimensionType {
  width: number;
  left: number;
}

const UserContent = () => {
  const [curentTab, setCurrentTab] = useState<number>(0);
  const [distanceScroll, setDistanceScroll] = useState<number>(0);
  const tabBlockRef: any = useRef(null);
  const [dimensionOfSelected, setDimensionOfSelected] = useState<DimensionType>(
    { width: 0, left: 0 }
  );
  const ref: any = useRef(null);

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
      title: "Nội dung",
      children: <ContentPage />
    },
    {
      index: 1,
      title: "Về tôi",
      children: <AboutMe/>
    }
  ];
  return (
    <div className={styles.wrapper_content}>
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
      {curentTab === 0 && data[0].children}
      {curentTab === 1 && data[1].children}
    </div>
  );
};

export default UserContent;
