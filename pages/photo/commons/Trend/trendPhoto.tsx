import React from 'react';
import Image from 'next/image';
import styles from './trend.module.css'

const images = [
    {
        key: 1,
        path: '/trend/trend-1.png'
    },
    {
        key: 2,
        path: '/trend/trend-2.png'
    },
    {
        key: 3,
        path: '/trend/trend-3.png'
    },
    {
        key: 4,
        path: '/trend/trend-4.png'
    },
    {
        key: 5,
        path: '/trend/trend-5.png'
    },
    {
        key: 6,
        path: '/trend/trend-6.png'
    },
    {
        key: 7,
        path: '/trend/trend-7.png'
    },
    {
        key: 1,
        path: '/trend/trend-1.png'
    },
]

const TrendPhoto = () => {
  return (
    <div className={styles.wrapper_trend}>
        {/* title infor total image trend */}
        <div>
            <p className={styles.title_trend}>Ảnh chụp đang thịnh hành</p>
            <p className={styles.total_trend_image}><span>999.999.999 </span> ảnh</p>
        </div>
        {/* images */}
        <div className={styles.all__image_trend}>
            {
                images.map((image, index) => (
                    <div className={`${styles.images_trend}`}>
                        <img src={image.path}></img>
                        {/* <Image className={styles.image_trend} fill src={image.path} alt={`trend-${index}`} layout='fill' objectFit='cover' objectPosition='center'/> */}
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default TrendPhoto