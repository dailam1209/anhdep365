import React from 'react';
import styles from './navbarMobile.module.css'
import { ExampleIcon, HomeIcon, PlusIcon, ProjectIcon, StarIcon } from '../../../../public/navbarMobile'

const NavMobile = () => {
  return (
    <section className={styles.box_navmobile}>
        <div className={styles.item_navmobile}>
            <HomeIcon/>
            <span className={styles.item_navmobile_text}>Trang chủ</span>
        </div>
        <div className={styles.item_navmobile}>
            <ProjectIcon/>
            <span>Dự án</span>
        </div>
        <div className={`${styles.item_navmobile} ${styles.item_navmobile_plus}`}>
            <PlusIcon/>
        </div>
        <div className={styles.item_navmobile}>
            <ExampleIcon/>
            <span>Mẫu</span>
        </div>
        <div className={styles.item_navmobile}>
            <StarIcon/>
            <span>Magic Studio</span>
        </div>
    </section>
  )
}

export default NavMobile;