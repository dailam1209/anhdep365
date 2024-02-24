import React, { useRef, useState } from "react";
import { Delete, Down, Edit, Plus } from "@/public/brand";
import { Input } from "antd";
import Editor from "@/component/quill_edit/edit";
import styles from "./create.module.css";

const Font = () => {
  const [number, setNumber] = useState<number>(0);
  const [ open, setOpen ] = useState(false)
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
          <div onClick={() => setOpen(!open)} className={`${styles.drop_left} ${open ? styles.drop_left_animation : ''}`}>
              <Down className={undefined} />
            </div>
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
        <div className={`${styles.color_wrap_input} ${styles.color_wrap_action} `} style={{
            display: open ? 'flex' : 'none'
          }}>
          {arrayInput.map((input, index) => (
            <Input
            key={index}
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
      <Editor/>
    </div>
  );
};

export default Font;
