import { Select } from "antd";
import React, { useState } from "react";
import styles from "./createlike.module.css";
import Image from "next/image";
import { CheckSelect, Clock, Common, DropDowFollow } from '@/public/create_follow'
import Dropdown from "antd/es/dropdown/dropdown";
import ItemFollow from "./itemFollow";

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
      {/* {
        isActived && <div>
        <CheckSelect className={``}/>
      </div>
      } */}
      
    </div>
  )
}

const HaveFollow = () => {
  const handleChange = (value: string) => {
  };

  const options = [
    { value: "jack", label: <Item icon={<Clock className={styles.clockIcon} />} label={"Gần dây nhất"} isActived={true}/> },
    { value: "lucy", label: <Item icon={<Common className={styles.clockIcon} />} label={"Phổ biến nhất"} isActived={true}/> },
  ];
 
  return (
    <div className={styles.wrapper__have_follow}>
      <div className={styles.follow_filter}>
        <p className={styles.follow_title}>Creator bạn theo dõi</p>
        <div className={styles.follow_number}>
          <p className={styles.number}>
            0 <span className={styles.des}>người theo dõi</span>
          </p>
          <div className={styles.box_select}>
            <Select
            suffixIcon={ <DropDowFollow/>}
              defaultValue={options[0].value}
              style={{ width: 120 }}
              onChange={handleChange}
              options={options}
            />
          </div>
        </div>
      </div>
      {/* <div className={styles.follow_empty}>
        <div className={styles.image_empty}>
            <Image src="/create_follow/empty.png" alt="" fill/>
        </div>
        <div className={styles.empty_text}>
            <p className={styles.text_notice}>Bạn chưa theo dõi bất kì Creator nào</p>
            <p className={styles.suggest_step}>Creator bạn theo dõi sẽ xuất hiện ở đây. Khám phá những creator được đề xuất ở trên để bắt đầu.</p>
        </div>
      </div> */}
      <ItemFollow/>
    </div>
  );
};

export default HaveFollow;
