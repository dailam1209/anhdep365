import React, { useState } from "react";
import { Down, Plus, Upload } from "@/public/brand";
import styles from "./create.module.css";
import { ItemOfLogo } from "./items";

interface LogosProps {
  listLogo: any;
}

interface LogoItemProps {
    src: string,
    date: string,
    name: string
}

const LogoItem:React.FC<LogoItemProps> = ({}) => {
    return (
        <div>
            
        </div>
    )
}

export const Logos: React.FC<LogosProps> = ({ listLogo }) => {
  const [number, setNumber] = useState<number>(0);
  const [ uploadImageRef, setUploadImageRef ] = useState<any>([]);
  return (
    <div className={styles.logo}>
      {/* flow property */}
      <div className={styles.logo__infor}>
        <div className={styles.logo__des}>
          {/* left */}
          <div className={styles.des_left}>
            <Down className={undefined} />
            <div className={styles.des_left_infor}>
              <span className={styles.des_left_title}>Logo</span>
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
        <input ref={uploadImageRef} type="file" id="imgupload" style={{
            display: 'none'
        }}/>
        {/* <div className={styles.logo__upload} onClick={() => uploadImageRef.current.click() }>
          <Upload className={undefined} />
          <p className={styles.logo__upload_title}>
            Thêm logo hoặc chỉ cần kéo-thả logo
          </p>
         
         
        </div> */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '40px',
        }}>
        {
 [1,1,1,1,1,1,1,1].map((item, index) => (
  <ItemOfLogo/>
  ))
          }
        </div>
      </div>
    </div>
  );
};
