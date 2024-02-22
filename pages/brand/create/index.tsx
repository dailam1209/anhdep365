import React, { useState, useContext, useEffect } from 'react';
import styles from './create.module.css';
import { Type } from "@/component/interface"
import styleBrand from '../brand.module.css'
import { ModalCustom } from '@/commons/modal/modal';
import { Logos } from './logos';
import { BrandOfYou, Edit, Plus } from '@/public/brand'
import { useMediaQuery } from 'react-responsive';
import { LocationContext, TabSideContext } from '@/pages/_app';
import Color from './color';
import Font from './font';

interface BrandType{
  index:number,
  image:string,
  color:string,
  title:string
}

interface DesignDimensionType{
  itemPerRow:number,
  windowWidth:number,
  gap:number,
  marginLeft:number
}

export default function  CreateBrand  ()  {
  const [openAdd, setOpenAdd ] = useState<Boolean>(false);
  const [ logos, setLogos ] = useState<any>([]);
  const isTabnetCheck: boolean = useMediaQuery({
    query: "(max-width: 912px)"
  });
  const {locationOfSite, setLocationOfSite}:Type = {...useContext(LocationContext)};

  const {isTabSide, setTabSide} = {...useContext(TabSideContext)};

  useEffect(()=>{
    if(locationOfSite?.name !== 'brand'){
      setLocationOfSite({name:'brand'})
    }
  },[])

  return (
    <div className={`${isTabnetCheck ? styleBrand.container : styleBrand.container_width} ${isTabSide ? '' : styleBrand.full_width} ${ isTabnetCheck ? '' : isTabSide ? '' : styleBrand.transform}`}>
      <div className={`${styles.create_brand_container}`}>
        <div className={styles.brand__title_add}>
          <div className={styles.brand__wrap_title}>
          <p className={styles.brand__tilte}>Bộ thương hiệu</p>
          <Edit className={`${styles.brand__title_edit}`}/>
          </div>
          <div className={styles.brand__options}>
            <span className={styles.brand__share}>Bộ thương hiệu được chia sẻ với:</span>
            <div className={styles.brand__of_you}>
              <BrandOfYou className={``}/>
              <span className={styles.brand__of_you_tilte}>Thương hiệu cá nhân của bạn</span>
            </div>
            <div className={`${styles.brand__add} ${styles.brand__of_you}`}>
              <Plus className={styles.brand__of_you_icon}/>
              <span  className={styles.brand__of_you_tilte}>Thêm vào thư mục</span>
            </div>
          </div>
        </div>
          <Logos listLogo={logos}/>
          <Color/>
          <Font/>
          <Logos listLogo={`${logos} ${styles.brand__color}`}/>
          <Logos listLogo={`${logos} ${styles.brand__color}`}/>
          <Logos listLogo={`${logos} ${styles.brand__color}`}/>
      </div>
    </div>
  )
}
