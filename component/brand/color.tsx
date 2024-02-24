import React, { useRef, useState } from "react";
import styles from "./create.module.css";
import {
  CLoseColor,
  Down,
  Edit,
  HaftDrowTop,
  Plus,
  ThreeDot,
  Upload
} from "@/public/brand";

const Color = () => {
  const [number, setNumber] = useState<number>(0);
  const [ open, setOpen ] = useState(false)
  const uploadImageRef = useRef();
  return (
    <div className={`${styles.logo} ${styles.brand__color}`}>
      {/* flow property */}
      <div className={styles.logo__infor}>
        <div className={styles.logo__des}>
          {/* left */}
          <div className={styles.des_left}>
            <div onClick={() => setOpen(!open)} className={`${styles.drop_left} ${open ? styles.drop_left_animation : ''}`}>
              <Down className={undefined} />
            </div>
            <div className={styles.des_left_infor}>
              <span className={styles.des_left_title}>Màu</span>
              <span className={styles.des_left_total}>( {number} )</span>
            </div>
          </div>
          {/* right */}
          <div className={`${styles.brand__add} ${styles.brand__of_you}`} >
            <Plus className={styles.brand__of_you_icon} />
            <span className={styles.brand__of_you_tilte}>Thêm mới</span>
          </div>
        </div>
        {/* upload */}
        <div className={`${styles.color_wrap_action} `} style={{
            display: open ? 'block' : 'none'
          }}>
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
            <div
              className={`${styles.action_add_all} ${styles.action_color_close} `}
            >
              <div
                className={`${styles.action_add_click} ${styles.action_add_all_color}`}
              >
                <div
                  className={`${styles.action_color}`}
                  style={{
                    backgroundColor: "#ff6a6a"
                  }}
                ></div>
                <div className={styles.action_close}>
                  <CLoseColor className={``} />
                </div>
              </div>
              <span className={styles.action_title}>#ff6a6a</span>
              <div className={styles.action__color_toolkit}>
                <span>#ff6a6a</span>
                <div className={styles.drow_top}>
                  <HaftDrowTop className={``} />
                </div>
              </div>
            </div>
            <div className={styles.action_add_all}>
              <div className={styles.action_add_click}>
                <Plus className={`${styles.action_add_icon}`} />
              </div>
              <span className={styles.action_title}>Thêm mới</span>
              <div className={`${styles.action__color_toolkit} ${styles.action__color_toolkit_add}`}>
                <span>Thêm màu mới</span>
                <div className={styles.drow_top}>
                  <HaftDrowTop className={``} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Color;
