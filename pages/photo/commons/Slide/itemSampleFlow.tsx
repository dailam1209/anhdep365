import React from "react";
import Image from "next/image";
import styles from "./slide.module.css";

interface ItemType {
  index: number;
  image: string;
  text: string;
}

const ItemSampleFlow: React.FC<ItemType> = ({ index, image, text }) => {
  return (
    <div className={styles.item_flow}>
      <div key={index} className={`${styles.recommend_item}`}>
        <div className={`${styles.recommend_img}`}>
          <Image src={image} alt={text} width={160} height={170}></Image>
        </div>
      </div>
      <div className={`${styles.recommend_text}`}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ItemSampleFlow;
