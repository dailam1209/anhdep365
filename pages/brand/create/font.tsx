import React, { useRef, useState } from "react";
import styles from "./create.module.css";
import { Delete, Down, Edit, Plus } from "@/public/brand";
import { Input } from "antd";

const Font = () => {
  const [number, setNumber] = useState<number>(0);
  const [ activeInput, setActiveInput ] = useState<number>(0);
  const arrayInput = [1, 1, 1, 1, 1, 1, 1, 1];
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
              <span className={styles.des_left_title}>Phông chữ</span>
            </div>
          </div>
          {/* right */}
          <div className={`${styles.brand__add} ${styles.brand__of_you}`}>
            <Plus className={styles.brand__of_you_icon} />
            <span className={styles.brand__of_you_tilte}>Thêm mới</span>
          </div>
        </div>
        {/* upload */}
        <div className={styles.color_wrap_input}>
          {arrayInput.map((input, index) => (
            <Input
              className={styles.brand_input}
              disabled={index + 1 == activeInput}
              placeholder="Tiêu đề"
              prefix={
                <>
                  <div className={styles.icon_input} >
                    <div onClick={() => setActiveInput(index + 1)}>
                        <Edit className={``} />
                    </div>
                    <div>
                        <Delete className={`${styles.delete}`} />
                    </div>
                  </div>
                </>
              }
              suffix={<></>}
            />
          ))}
          <Input
              className={styles.brand_input}
              disabled={0 == activeInput}
              placeholder="Tiêu đề"
              prefix={
                <>
                  <div className={styles.icon_input}>
                    <div onClick={() => {
                        setActiveInput(1), console.log('clicked');
                    }}>
                        <Edit className={``} />
                    </div>
                    <div>
                        <Delete className={`${styles.delete}`} />
                    </div>
                  </div>
                </>
              }
              suffix={<></>}
            />
            <Input
              className={styles.brand_input}
              disabled={ 1 == activeInput}
              placeholder="Tiêu đề"
              prefix={
                <>
                  <div className={styles.icon_input}>
                    <div onClick={() => {
                        setActiveInput(1), console.log('clicked');
                    }}>
                        <Edit className={``} />
                    </div>
                    <div>
                        <Delete className={`${styles.delete}`} />
                    </div>
                  </div>
                </>
              }
              suffix={<></>}
            />
          <p className={styles.bottom_input}>Quản lý phông chữ đã tải lên</p>
        </div>
      </div>
    </div>
  );
};

export default Font;
