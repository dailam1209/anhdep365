import Image from 'next/image'
import React from 'react'
import styles from './slide.module.css'

const ItemSamepleContentExample = () => {
  return (
    <div className={styles.sample_image}>
        <Image src="/contentExample/image_content.png" alt='image-content' fill/>
    </div>
  )
}

export default ItemSamepleContentExample