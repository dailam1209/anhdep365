import { ReactElement, useContext, useEffect, useRef, useState} from "react"
import { Type } from "@/component/interface"
import { LocationContext, TabSideContext } from "../_app"
import styles from './project.module.css'
import NextImage from "next/image"
import { AllProject } from "@/component/project/allProject"
import { Folder } from "@/component/project/folder"
import { Design } from "@/component/project/design"
import { Picture } from "@/component/project/picture"
import { Brand } from "@/component/project/brand"
import { Video } from "@/component/project/video"
interface tabType{
  index:number,
  title:string,
  children:ReactElement
}
interface DimensionType{
  width:number,
  left:number
}
export default function Project() {
  const ref:any = useRef(null)
  const tabBlockRef:any = useRef(null)
  const {isTabSide, setTabSide} = {...useContext(TabSideContext)}
  const {locationOfSite, setLocationOfSite}:Type = {...useContext(LocationContext)}
  const [curentTab,setCurrentTab] = useState<number>(0)
  const [dimensionOfSelected,setDimensionOfSelected] = useState<DimensionType>({width:0,left:0})
  const [distanceScroll, setDistanceScroll] = useState<number>(0)
  const data:tabType[] = [
    {
      index:0,
      title:'Tất cả',
      children: <AllProject/>
    },
    {
      index:1,
      title:'Thư mục',
      children: <Folder/>
    },
    {
      index:2,
      title:'Thiết kế',
      children: <Design/>
    },
    {
      index:3,
      title:'Mẫu thương hiệu',
      children: <Brand/>
    },
    {
      index:4,
      title:'Hình ảnh',
      children: <Picture/>
    },
    {
      index:5,
      title:'Video',
      children: <Video/>
    }
  ]
  const handleScroll = () => {
    setDistanceScroll(tabBlockRef?.current?.scrollLeft)
  }
  const handleScrollLeft = () => {
    tabBlockRef?.current?.scrollTo({top:0,left: distanceScroll - 200,behavior: "smooth"})
  }
  const handleScrollRight = () => {
    tabBlockRef?.current?.scrollTo({top:0,left: distanceScroll + 200,behavior: "smooth"})
  }
  useEffect(()=>{
    if(locationOfSite?.name != 'project'){
      setLocationOfSite({name:'project'})
    }
  },[])
  useEffect(()=>{
    setDimensionOfSelected({width:ref?.current?.offsetWidth,left:ref?.current?.offsetLeft})
      tabBlockRef?.current?.scrollTo({top:0,left: ref?.current?.offsetLeft - tabBlockRef?.current?.offsetWidth/2 + ref?.current?.offsetWidth/2,behavior: "smooth"})
  },[curentTab])
  return (
    <div className={`${styles.container} ${isTabSide ? '' : styles.full_width}`}>
      <div className={`${styles.header}`}>
        <p className={`${styles.title}`}>Dự án</p>
        <div className={`${styles.button_add_new}`}>
          <NextImage src={'/project/plus.png'} height={22} width={22} alt={''}></NextImage>
          <p className="prevent-select">Thêm mới</p>
        </div>
      </div>
      <div className={`${styles.block_filter}`}>
        <div className={`${styles.block_filter_left}`}>
          <div className={`${styles.block_filter_item}`} onClick={()=>alert('Chủ sở hữu')}>
            <p className="prevent-select">Chủ sở hữu</p>
            <NextImage src={'/header/dropdown_icon.png'} width={13} height={6} alt=""></NextImage>
          </div>
          <div 
            className={`${styles.block_filter_item} ${[1,4,5]?.includes(curentTab) ? styles.disable : ''}`} 
            onClick={[1,4,5]?.includes(curentTab) ? ()=>null : ()=>alert('Danh mục')}
          >
            <p className="prevent-select">Danh mục</p>
            <NextImage src={'/header/dropdown_icon.png'} width={13} height={6} alt=""></NextImage>
          </div>
          <div className={`${styles.block_filter_item}`} onClick={()=>alert('Ngày sửa đổi')}>
            <p className="prevent-select">Ngày sửa đổi</p>
            <NextImage src={'/header/dropdown_icon.png'} width={13} height={6} alt=""></NextImage>
          </div>
        </div>
        <div className={`${styles.block_filter_right}`}>
          <div className={`${styles.block_filter_item}`}>
            <NextImage src={'/project/sort.png'} width={31} height={23} alt=""></NextImage>
            <p className={`prevent-select ${isTabSide ? styles.display_none : ''} ${styles.display_none_2}`}>Liên quan nhất</p>
            <NextImage src={'/header/dropdown_icon.png'} width={13} height={6} alt=""></NextImage>
          </div>
          <div className={`${styles.button_option}`}>
            <NextImage src={'/project/option.png'} width={26} height={22} alt=""></NextImage>
          </div>
        </div>
      </div>
      <div className={`${styles.tab_block}`}>
        <ul ref={tabBlockRef} onScroll={handleScroll}>
          {
            data?.map((item:tabType,index:number)=>{
              return(
                <li key={index} ref={item?.index == curentTab ? ref : null} onClick={()=>setCurrentTab(item?.index)}>
                  <p className="prevent-select">{item?.title}</p>
                </li>
              ) 
            })
          }
          <div style={{width:`${dimensionOfSelected?.width}px`,left:`${dimensionOfSelected?.left}px`}} className={`${styles.selected}`}></div>
        </ul>
        {
          distanceScroll > 0 &&
          <div onClick={handleScrollLeft} className={`${styles.scrollLeft}`}><NextImage src={'/header/dropdown_icon.png'} width={13} height={6} alt=""></NextImage></div>
        }
        {
          (tabBlockRef?.current?.scrollWidth > tabBlockRef?.current?.offsetWidth) && 
          distanceScroll != (tabBlockRef?.current?.scrollWidth - tabBlockRef?.current?.offsetWidth) &&
          <div onClick={handleScrollRight} className={`${styles.scrollRight}`}><NextImage src={'/header/dropdown_icon.png'} width={13} height={6} alt=""></NextImage></div>
        }
      </div>
      <div className={`${styles.tab_content}`}>
        {
          data[curentTab].children
        }
          {/* {
            data?.map((item:tabType,index:number)=>{
              return(
                <div key={index} style={{display:`${curentTab === index ? 'unset' :'none'}`}}>
                  {
                    item?.children
                  }
                </div>
              )
            })
          } */}
      </div>
    </div>
  )
}