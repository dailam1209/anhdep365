import { Select } from "antd";
import React from "react";
import styles from "./createlike.module.css";
import Image from "next/image";
import { Clock, DropDowFollow } from '@/public/create_follow'
import Dropdown from "antd/es/dropdown/dropdown";
import ItemFollow from "./itemFollow";

const HaveFollow = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
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
              defaultValue="Gần đây nhất"
              style={{ width: 120 }}
              onChange={handleChange}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Gần đây nhất" },
                { value: "Yiminghe", label: "yiminghe" },
                { value: "disabled", label: "Disabled", disabled: true }
              ]}
            />
            <Clock className={styles.icon_select}/>
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
