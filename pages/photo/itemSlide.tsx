import Image from 'next/image'
import React from 'react'
import styles from './photo.module.css'

const ItemSlidePhoto = () => {
  return (
    <div className={styles.item_slide}>
        <Image src="" alt="" fill/>
        <p className={styles.text_slide}></p>
    </div>
  )
}

export default ItemSlidePhoto