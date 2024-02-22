import { useContext, useEffect, useRef, useState} from "react"
import { Type } from "@/component/interface"
import { LocationContext, TabSideContext } from "../_app"
import styles from './brand.module.css'
import { BrandItem } from "@/component/project/allProject"
import ItemBrand from "./itemBrand"
import { useMediaQuery } from "react-responsive";
import { usePathname } from 'next/navigation'

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

export default function Brand() {
  const {locationOfSite, setLocationOfSite}:Type = {...useContext(LocationContext)};
  const {isTabSide, setTabSide} = {...useContext(TabSideContext)};
  const isTabnetCheck: boolean = useMediaQuery({
    query: "(max-width: 912px)"
  });

  const [brandDimension, setBrandDimension] = useState<DesignDimensionType>({
    itemPerRow:0,
    windowWidth:0,
    gap:0,
    marginLeft:0
  });
  const brandRef:any = useRef(null);
  const brandItemRef:any = useRef(null);
  const pathname = usePathname()

  const listBrand:BrandType[] = []
for (let index = 0; index < 25; index++) {
  listBrand.push(
    {
      index:index,
      image:'/project/brand_logo.png',
      title:'Bộ thương hiệu',
      color:'#FF6A6A,#FFF6A3,#6AA6FF'
    }
  )
}
  useEffect(()=>{
    if(locationOfSite?.name !== 'brand'){
      setLocationOfSite({name:'brand'})
      console.log(locationOfSite?.name);
      console.log(pathname);
    }
  },[])
  return (

    <div style={{
      marginLeft: !isTabSide ? '0px' : '0px',
      transition: 'all 0.5s',
      // justifyContent:   'center',
      // display: 'flex',
      // alignItems: 'center',
    }}>
      <ItemBrand/>
    </div>

    // <div className={`${isTabnetCheck ? styles.container : styles.container_width} ${isTabSide ? '' : styles.full_width} ${ isTabnetCheck ? '' : isTabSide ? '' : styles.transform}`}>
    // </div>
  )
}