import React from "react";
import styles from './createlike.module.css';
import SuggetsLike from "./suggetslike";
import Slide from "@/commons/Slide/Slide";
import HaveFollow from "./haveFollow";
import ListImgUserFollowing from "./listImage";

const CreateFollow = () => {
    const listItem1 = [
        {
          key: 1,
          children: () => <SuggetsLike />
        },
        {
          key: 2,
          children: () => <SuggetsLike/>
        },
        {
          key: 3,
          children: () => <SuggetsLike/>
        },
        {
          key: 4,
          children: () => <SuggetsLike/>
        },
        {
          key: 5,
          children: () => <SuggetsLike/>
        },
        {
          key: 6,
          children: () => <SuggetsLike/>
        },
        {
          key: 7,
          children: () => <SuggetsLike/>
        },
        {
          key: 8,
          children: () => <SuggetsLike/>
        },
        {
          key: 9,
          children: () => <SuggetsLike/>
        },
        {
          key: 10,
          children: () => <SuggetsLike/>
        }
      ];
    return (
        <div id="create_follow_wrapper" className={styles.create_follow_wrapper}>
            <Slide number={0} space={20} item={listItem1} className={""} isTitle={false} title={""} isShowAllDetail={false}/>
            <HaveFollow/>
            <div className={styles.box_list_img}>
              <ListImgUserFollowing/>
            </div>
        </div>
    )
};

export default CreateFollow;