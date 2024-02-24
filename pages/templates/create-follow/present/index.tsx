import React from "react";
import Image from "next/image";
import styles from "./present.module.css";
import Slide from "@/commons/Slide/Slide";
import { ArrowRightPresentIcon, PlayPresentIcon } from '@/public/create_follow/present'

interface CollectionProps {
  url: string;
}

const ColllectionPresent: React.FC<CollectionProps> = ({ url }) => {
  return (
    <div className={styles.item_present}>
      <div className={styles.img_present}>
        <div className={styles.pos_img}>
          <Image
            className={styles.img}
            src={url}
            alt=""
            width={218}
            height={122.69}
          />
        </div>
      </div>
      <p className={styles.des_present}>Bài thuyết trình 16:9</p>
    </div>
  );
};

const TryNowPresent = () => {
  const arrayRender = [1, 1, 1];
  return (
    <div className={styles.try_it_all}>
      {arrayRender.map((item, index) => (
        <div key={index} className={styles.try_follow}>
          <div className={styles.try_des}>
            <p className={styles.try_text}>
              Ghi hình ngay, thuyết trình sau<br></br>
              với Thuyết trình tự ghi hình
            </p>
            <div className={styles.try_action}>
                <span className={styles.try_action_text}>Thử ngay</span>
                <ArrowRightPresentIcon className={``}/>
            </div>
          </div>
          <div className={styles.try_img}>
            <Image src="/create_follow/present/post_card.png" alt="" width={180} height={180} />
          </div>
        </div>
      ))}
    </div>
  );
};


const VideoItemPresent = () => {
  return (
    <div className={styles.video_present}>
      <div className={styles.video_img}>
        <Image src="/create_follow/present/video_slide.png" alt="" width={270} height={150}/>
      <div className={styles.play_present}>
      <PlayPresentIcon className={``}/>
      </div>
      </div>
    </div>
  )
}
const Present = () => {
  const listItem1 = [
    {
      key: 1,
      children: () => (
        <ColllectionPresent url={"/create_follow/present/present_image.png"} />
      )
    },
    {
      key: 2,
      children: () => (
        <ColllectionPresent url={"/create_follow/present/present_image.png"} />
      )
    },
    {
      key: 3,
      children: () => (
        <ColllectionPresent url={"/create_follow/present/present_image.png"} />
      )
    },
    {
      key: 4,
      children: () => (
        <ColllectionPresent url={"/create_follow/present/present_image.png"} />
      )
    },
    {
      key: 5,
      children: () => (
        <ColllectionPresent url={"/create_follow/present/present_image.png"} />
      )
    },
    {
      key: 6,
      children: () => (
        <ColllectionPresent url={"/create_follow/present/present_image.png"} />
      )
    },
    {
      key: 7,
      children: () => (
        <ColllectionPresent url={"/create_follow/present/present_image.png"} />
      )
    },
    {
      key: 8,
      children: () => (
        <ColllectionPresent url={"/create_follow/present/present_image.png"} />
      )
    },
    {
      key: 9,
      children: () => (
        <ColllectionPresent url={"/create_follow/present/present_image.png"} />
      )
    },
    {
      key: 10,
      children: () => (
        <ColllectionPresent url={"/create_follow/present/present_image.png"} />
      )
    }
  ];

  const listItem2 = [
    {
      key: 1,
      children: () => (
        <VideoItemPresent/>
      )
    },
    {
      key: 2,
      children: () => (
        <VideoItemPresent/>
      )
    },
    {
      key: 3,
      children: () => (
        <VideoItemPresent/>
      )
    },
    {
      key: 4,
      children: () => (
        <VideoItemPresent/>
      )
    },
    {
      key: 5,
      children: () => (
        <VideoItemPresent/>
      )
    },
    {
      key: 6,
      children: () => (
        <VideoItemPresent/>
      )
    },
    {
      key: 7,
      children: () => (
        <VideoItemPresent/>
      )
    },
    {
      key: 8,
      children: () => (
        <VideoItemPresent/>
      )
    },
    {
      key: 9,
      children: () => (
        <VideoItemPresent/>
      )
    },
    {
      key: 10,
      children: () => (
        <VideoItemPresent/>
      )
    }
  ];
  return (
    <div>
      {/* collection */}
      <Slide
        number={0}
        space={16.4}
        item={listItem1}
        className={""}
        isTitle={false}
        title={""} isShowAllDetail={false}      />
      <div className={styles.try_box}>
        <TryNowPresent/>
      </div>
      <Slide
        number={0}
        space={16.4}
        item={listItem2}
        className={""}
        isTitle={true}
        title={"Bài thuyết trình"} isShowAllDetail={true}      />
      <Slide
        number={0}
        space={16.4}
        item={listItem2}
        className={""}
        isTitle={true}
        title={"Thuyết trình lên ý tưởng"} isShowAllDetail={true}      />
      <Slide
        number={0}
        space={16.4}
        item={listItem2}
        className={""}
        isTitle={true}
        title={"Thuyết trình trò chơi"} isShowAllDetail={true}      />
    </div>
  );
};

export default Present;
