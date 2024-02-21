import React, { useRef, useState } from "react";
import styles from "./create.module.css";
import { Down, Edit, Plus, ThreeDot, Upload } from "@/public/brand";

const Color = () => {
  const [number, setNumber] = useState<number>(0);
  const uploadImageRef = useRef();
  return (
    <div className={`${styles.logo} ${styles.brand__color}`}>
      {/* flow property */}
      <div className={styles.logo__infor}>
        <div className={styles.logo__des}>
          {/* left */}
          <div className={styles.des_left}>
            <Down className={undefined} />
            <div className={styles.des_left_infor}>
              <span className={styles.des_left_title}>Màu</span>
              <span className={styles.des_left_total}>( {number} )</span>
            </div>
          </div>
          {/* right */}
          <div className={`${styles.brand__add} ${styles.brand__of_you}`}>
            <Plus className={styles.brand__of_you_icon} />
            <span className={styles.brand__of_you_tilte}>Thêm mới</span>
          </div>
        </div>
        {/* upload */}
        <div className={styles.color_wrap_action}>
          <div className={styles.color__actions}>
            {/* left */}
            <div className={styles.actions_left}>
              <span className={styles.action_title}>Bảng màu</span>
              <Edit className={styles.action_icon} />
            </div>
            <ThreeDot className={undefined} />
            {/* right */}
          </div>
          <div className={styles.action_add}>
            <div className={styles.action_add_all}>
              <div className={styles.action_add_click}>
                <Plus className={`${styles.action_add_icon}`} />
              </div>
              <span className={styles.action_title}>Thêm mới</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Color;
