import Image from 'next/image'
import React from 'react'
import styles from './photo.module.css'


export interface ItemSlidePhotoProps {
  linkImage: string,
  text: string
}

const ItemSlidePhoto: React.FC<ItemSlidePhotoProps> = ({ linkImage, text}) => {
  return (
    <div className={styles.item_slide}>
        <Image src={linkImage ? linkImage : ''} alt="image-photo" fill/>
        <p className={styles.text_slide}>{text}</p>
    </div>
  )
}

export default ItemSlidePhoto