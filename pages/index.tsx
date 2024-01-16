import { useContext, useEffect, useRef, useState} from "react"
import { LocationContext, TabSideContext } from "./_app"
import { Type } from "@/component/interface"
import styles from '../styles/Home.module.css'
import Image from "next/image"
interface TabItemType{
  index:number,
  image:string,
  text:string
}
interface RecentlyItemType{
  index:number,
  image:string,
  text:string,
  text2:string
}
const listRecently:RecentlyItemType[] = []
for (let index = 0; index < 14; index++) {
  listRecently?.push(
    {
      index:index,
      image:'/home/project_img.png',
      text:'Bản thuyết trình',
      text2:`Bản thuyết trình ${index+1}`
    }
  )
}
const listRecommend:TabItemType[] = []
for (let index = 0; index < 21; index++) {
  listRecommend?.push(
    {
      index:index,
      image:'/home/project_img.png',
      text:'Doc'
    }
  )
}
export default function Home() {
  const ref:any = useRef(null)
  const refDismension:any = useRef(null)
  const refDismensionItem:any = useRef(null)
  const scrollRef:any = useRef(null)
  const recentlyRef:any = useRef(null)
  const recentlyItemRef:any = useRef(null)
  const {locationOfSite, setLocationOfSite}:Type = {...useContext(LocationContext)}
  const {isTabSide, setTabSide} = {...useContext(TabSideContext)}
  const [currentSelect, setCurrentSelect] = useState<number>(0)
  const [position, setPosition] = useState<number>(0)
  const [dimension, setDimension] = useState<number>(0)
  const [page,setPage] = useState<number>(0)
  const [itemPerPage,setItemPerPage] = useState<number>(0)
  const [itemPerRow,setItemPerRow] = useState<number>(0)
  const [windowWidth, setWindowWidth] = useState<number>(0)
  const [gap, setGap] = useState<number>(0)
  const [marginLeft,setMarginLeft] = useState<number>(0)
  const listTab = [
    {
      index:0,
      image:'/home/for_you.png',
      text:'Cho bạn'
    },
    {
      index:1,
      image:'/home/doc.png',
      text:'Doc'
    },
    {
      index:2,
      image:'/home/white_board.png',
      text:'Whiteboard'
    },
    {
      index:3,
      image:'/home/presentation.png',
      text:'Thuyết trình'
    },
    {
      index:4,
      image:'/home/social_network.png',
      text:'Mạng xã hội'
    },
    {
      index:5,
      image:'/home/video.png',
      text:'Video'
    },
    {
      index:6,
      image:'/home/print.png',
      text:'In ấn'
    },
    {
      index:7,
      image:'/home/website.png',
      text:'Trang web'
    },
    {
      index:8,
      image:'/home/see_more.png',
      text:'Xem thêm'
    }
  ]
  const handleScrollLeft = () => {
    setPage(page-1)
  }
  const handleScrollRight = () => {
    setPage(page+1)
  }
  const setWindowDimensions = () => {
    setWindowWidth(window.innerWidth)
    // setWindowHeight(window.innerHeight)
  }
  useEffect(()=>{
    if(locationOfSite?.name != 'home'){
      setLocationOfSite({name:'home'})
    }
    window.addEventListener('resize', setWindowDimensions);
    
    return () => {
      window.removeEventListener('resize', setWindowDimensions)
    }
  },[])
  useEffect(()=>{
    let gap_local = 0
    if(window.innerWidth <= 800){
      setGap(20)
      gap_local = 20
    }else if(window.innerWidth <= 1200){
      setGap(10)
      gap_local = 10
    }else if(window.innerWidth <= 1600){
      setGap(20)
      gap_local = 20
    }else{
      setGap(32)
      gap_local = 32
    }
    if(recentlyItemRef?.current ){
      setItemPerRow(Math.floor((recentlyRef?.current?.offsetWidth + gap_local) / (recentlyItemRef?.current?.offsetWidth + gap_local)))
    }
    setDimension(Math.floor(refDismension?.current?.offsetWidth/(refDismensionItem?.current?.offsetWidth+18))*(refDismensionItem?.current?.offsetWidth+18))
    setItemPerPage(Math.floor(refDismension?.current?.offsetWidth/(refDismensionItem?.current?.offsetWidth+18)))
    setMarginLeft(recentlyItemRef?.current?.offsetLeft - recentlyRef?.current?.offsetLeft)
  },[windowWidth])
  // useEffect(()=>{
  //   setMarginLeft(recentlyItemRef?.current?.offsetLeft - recentlyRef?.current?.offsetLeft)
  // },[itemPerRow])
  useEffect(()=>{
    if(ref){
      setPosition(ref?.current?.offsetLeft + ref?.current?.offsetWidth/2 - 8.5)

      // animation header
      let startTimestamp:any = null;
      const duration = 800;
      let startPosition = 
        ref?.current?.offsetLeft - scrollRef?.current?.offsetWidth/2 + ref?.current?.offsetWidth/2 > 0 ? 
          ref?.current?.offsetLeft - scrollRef?.current?.offsetWidth/2 + ref?.current?.offsetWidth/2 > (scrollRef?.current?.scrollWidth - scrollRef?.current?.offsetWidth) ? 
          (scrollRef?.current?.scrollWidth - scrollRef?.current?.offsetWidth) : 
          ref?.current?.offsetLeft - scrollRef?.current?.offsetWidth/2 + ref?.current?.offsetWidth/2:
          0;
      let targetPosition = scrollRef?.current?.scrollLeft;
      let distance = targetPosition - startPosition;
      const easeOutQuad = (progress:any) => {
        return Math.pow(progress - 1, 2);
      };
      const scrollStep = (timestamp:any) => {
        if(targetPosition != startPosition){
          if (!startTimestamp) {
            startTimestamp = timestamp;
          }
          let elapsed = timestamp - startTimestamp;
          let progress = Math.min(elapsed / duration, 1);
          let easeProgress = easeOutQuad(progress);
          scrollRef?.current?.scrollTo({left:startPosition + distance * easeProgress,top:0})
          if (elapsed < duration) {
            requestAnimationFrame(scrollStep);
          }
        }
      };
      requestAnimationFrame(scrollStep);
      // scrollRef?.current?.scrollTo({left:ref?.current?.offsetLeft - 200,top:0,behavior: "smooth", duration: 2000};
    }
  },[currentSelect])
  const TabItem = ({data}:{data:TabItemType}) => {
    return(
      <div key={data?.index} className={`${styles.tab_item}`}>
        <Image src={data?.image} alt={data?.text} width={40} height={40}></Image>
        <p>{data?.text}</p>
      </div>
    )
  }
  const RecommendItem = ({data}:{data:TabItemType}) => {
    return(
      <div ref={refDismensionItem} key={data?.index} className={`${styles.recommend_item}`}>
        <div className={`${styles.recommend_img}`}>
          <Image src={data?.image} alt={data?.text} width={160} height={170}></Image>
        </div>
        <p className={`${styles.recommend_text}`}>{data?.text}</p>
      </div>
    )
  }
  const RecentlyItem = ({data}:{data:RecentlyItemType}) => {
    return(
      <div key={data?.index} className={`${styles.recently_item}`}>
        <div className={`${styles.recently_img}`}>
          <Image src={data?.image} alt={data?.text} width={160} height={170}></Image>
        </div>
        <p className={`${styles.recently_text}`}>{data?.text}</p>
        <p className={`${styles.recently_text2}`}>{data?.text2}</p>
      </div>
    )
  }
  return (
    <div className={`${styles.container} ${isTabSide ? '' : styles.full_width}`}>
      <div className={`${styles.content}`}>
        <div className={`${styles.header}`}>
          <p className={`${styles.slogan}`}>CÙNG PAGE TẠO CV THIẾT KẾ CV DÀNH RIÊNG CHO BẠN!</p>
          <div className={`${styles.search}`}>
            <Image src={'/home/search.png'} alt={'search'} width={24} height={24}></Image>
            <input type="text" placeholder="Tìm kiếm nội dung trên Anhdep365"/>
          </div>
          <div className={`${styles.tab_container}`}>
          <div className={`${styles.tab_block}`} ref={scrollRef}>
            <div className={`${styles.tab_list}`}>
            {
              listTab?.map((item:TabItemType,index:number)=>{
                return(
                  <div ref={ currentSelect == item?.index ? ref : null} key={index} onClick={()=>setCurrentSelect(item?.index)}>
                    <TabItem  data={item}></TabItem>
                  </div>
                )
              })
            }
            </div>
            <Image className={`${styles.selected}`} style={{left:`${position}px`}} src={'/home/selected.png'} alt="selected" width={17} height={10}></Image>
          </div>
          </div>
        </div>
        <div className={`${styles.recommend}`}>
          <p className={`${styles.recommend_title}`}>Có thể bạn muốn thử...</p>
          <div ref={refDismension} className={`${styles.list_recommend}`} style={{transform:`translate3d(-${dimension*page}px, 0, 0)`}}>
            {
              listRecommend?.map((item:TabItemType,index:number)=>{
                return(
                  <div key={index}>
                   <RecommendItem data={item}></RecommendItem>
                  </div>
                )
              })
            }
          </div>
          {
              page > 0 && 
              <Image 
                onClick={handleScrollLeft}  
                className={`${styles.pre_button}`} 
                src={'/home/next.png'} alt="next" width={50} height={50}
              ></Image>
            }
            {
              itemPerPage*(page+1) < listRecommend?.length &&
              <Image 
                onClick={handleScrollRight} 
                className={`${styles.next_button}`} 
                src={'/home/next.png'} 
                alt="next" width={50} height={50}
              ></Image>
            }
        </div>
        <div className={`${styles.recently}`}>
          <p className={`${styles.recently_title}`}>Thiết kế gần đây</p>
          <div className={`${styles.list_recently}`} ref={recentlyRef} style={{justifyContent:`${listRecently?.length > itemPerRow && itemPerRow != 0 ? 'space-around' : 'flex-start'}`}}>
            {
              listRecently?.map((item:RecentlyItemType,index:number)=>{
                return(
                  ((Math.floor(listRecently?.length / itemPerRow) != Math.floor((index) / itemPerRow)) || index < itemPerRow)
                  &&
                  <div key={index} ref={index == 0 ? recentlyItemRef : null}>
                   <RecentlyItem data={item}></RecentlyItem>
                  </div>
                )
              })
            }
          </div>
          <div 
            className={`${styles.list_recently} ${styles.list_recently2}`} 
            style={{
              marginLeft:`${marginLeft}px`,
              gap:`${(recentlyRef?.current?.offsetWidth-(itemPerRow * recentlyItemRef?.current?.offsetWidth)-marginLeft*2)/(itemPerRow-1)}px`,
              marginTop:`${listRecently?.length > itemPerRow ? gap : 0}px`
            }}
          >
            {
              listRecently?.map((item:RecentlyItemType,index:number)=>{
                return(
                  (Math.floor(listRecently?.length / itemPerRow) == Math.floor((index) / itemPerRow) && (Math.floor(listRecently?.length / itemPerRow) != 0)) 
                  &&
                  <div key={index}>
                   <RecentlyItem data={item}></RecentlyItem>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className={`${styles.more}`}>
          <p className="prevent-select">Hiển thị thêm</p>
        </div>
      </div>
    </div>
  )
}