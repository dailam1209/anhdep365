import Image from 'next/image'
import styles from './allProject.module.css'
import { useEffect, useRef, useState } from 'react'
interface RecentlyType{
    index:number,
    image:string,
    text:string
}
interface DesignDimensionType{
  itemPerRow:number,
  windowWidth:number,
  gap:number,
  marginLeft:number
}
interface BrandType{
  index:number,
  image:string,
  color:string,
  title:string
}
const listRecommend:RecentlyType[] = []
for (let index = 0; index < 21; index++) {
  listRecommend?.push(
    {
      index:index,
      image:'/home/project_img.png',
      text:'Doc'
    }
  )
}
const listDesign:RecentlyType[] = []
for (let index = 0; index < 12; index++) {
  listDesign?.push(
    {
      index:index,
      image:'/home/project_img.png',
      text:`CV số ${index+1}`
    }
  )
}
const listBrand:BrandType[] = []
for (let index = 0; index < 12; index++) {
  listBrand.push(
    {
      index:index,
      image:'/project/brand_logo.png',
      title:'Bộ thương hiệu',
      color:'#FF6A6A,#FFF6A3,#6AA6FF'
    }
  )
}
export function AllProject(){
    const refDismension:any = useRef(null)
    const refDismensionItem:any = useRef(null)
    const designRef:any = useRef(null)
    const designItemRef:any = useRef(null)
    const brandRef:any = useRef(null)
    const brandItemRef:any = useRef(null)
    const [dimension, setDimension] = useState<number>(0)
    const [page, setPage] = useState<number>(0)
    const [itemPerPage,setItemPerPage] = useState<number>(0)
    const [designDimension, setDesignDimension] = useState<DesignDimensionType>({
      itemPerRow:0,
      windowWidth:0,
      gap:0,
      marginLeft:0
    })
    const [brandDimension, setBrandDimension] = useState<DesignDimensionType>({
      itemPerRow:0,
      windowWidth:0,
      gap:0,
      marginLeft:0
    })
    
    const handleScrollLeft = () => {
        setPage(page-1)
    }
    const handleScrollRight = () => {
        setPage(page+1)
    }
    const setWindowDimensions = () => {
      setDesignDimension({...designDimension,windowWidth : window.innerWidth})
      // setWindowHeight(window.innerHeight)
    }
    useEffect(()=>{
      setDimension(Math.floor(refDismension?.current?.offsetWidth/(refDismensionItem?.current?.offsetWidth+18))*(refDismensionItem?.current?.offsetWidth+18))
      setItemPerPage(Math.floor(refDismension?.current?.offsetWidth/(refDismensionItem?.current?.offsetWidth+18)))

      window.addEventListener('resize', setWindowDimensions);
      return () => {
        window.removeEventListener('resize', setWindowDimensions)
      }
    },[])
    useEffect(()=>{
      let gap_local = 0
      if(window.innerWidth <= 800){
        gap_local = 20
      }else if(window.innerWidth <= 1200){
        gap_local = 10
      }else if(window.innerWidth <= 1600){
        gap_local = 20
      }else{
        gap_local = 32
      }
      if(designItemRef?.current){
        setDesignDimension(
          {
            ...designDimension,
            itemPerRow : Math.floor((designRef?.current?.offsetWidth + gap_local) / (designItemRef?.current?.offsetWidth + gap_local)),
            marginLeft : designItemRef?.current?.offsetLeft - designRef?.current?.offsetLeft,
            gap : gap_local
          }
        )
      }
      if(brandItemRef?.current){
        setBrandDimension(
          {
            ...brandDimension,
            itemPerRow : Math.floor((brandRef?.current?.offsetWidth + gap_local) / (brandItemRef?.current?.offsetWidth + gap_local)),
            marginLeft : brandItemRef?.current?.offsetLeft - brandRef?.current?.offsetLeft,
            gap : gap_local
          }
        )
      }
    },[designDimension?.windowWidth])
    const RecentlyItem = ({data}:{data:RecentlyType}) => {
        return(
          <div 
            ref={refDismensionItem} key={data?.index} className={`${styles.recently_item}`}
        >
            <div className={`${styles.recently_img}`}>
                <Image src={data?.image} alt={data?.text} width={171} height={160}></Image>
            </div>
            <p className={`${styles.recently_text}`}>{data?.text}</p>
          </div>
        )
    }
    const DesignItem = ({data}:{data:RecentlyType}) => {
      return(
        <div key={data?.index} className={`${styles.design_item}`}>
          <div className={`${styles.design_img}`}>
            <Image src={data?.image} alt={data?.text} width={171} height={160}></Image>
          </div>
          <p className={`${styles.design_text}`}>{data?.text}</p>
        </div>
      )
    }
    const BrandItem = ({data}:{data:BrandType}) => {
      return(
        <div className={`${styles.brand_item}`}>
            <Image src={data?.image} width={258} height={108} alt='logo brand'></Image>
            <div className={`${styles.brand_color}`}>
              {
                data?.color?.split(',')?.map((color:string,index:number)=>{
                  return(
                    <div key={index} className={`${styles.brand_color_item}`} style={{backgroundColor:`${color}`}}>
                    </div>
                  )
                })
              }
            </div>
            <div className={`${styles.brand_title}`}>
              <p>{data?.title}</p>
              <Image src={'/header/dot_more.png'} width={18} height={4} alt=''></Image>
            </div>
        </div>
      )
    }
    return(
        <div className={`${styles.container} ${styles.fadeInRight} ${styles.animated}`}>
            <p className={`${styles.title}`}>Gần đây</p>
            <div className={`${styles.recently}`}>
                <div ref={refDismension} className={`${styles.list_recently}`} style={{transform:`translate3d(-${dimension*page}px, 0, 0)`}}>
                    {
                    listRecommend?.map((item:RecentlyType,index:number)=>{
                        return(
                        <div key={index}>
                            <RecentlyItem data={item}></RecentlyItem>
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
            <div className={`${styles.folder}`}>
                <div className={`${styles.block_title}`}>
                    <Image src={'/header/dropdown_icon.png'} width={13} height={6} alt=""></Image>
                    <p className={`${styles.title}`}>Thư mục</p>
                </div>
                <div className={`${styles.folder_content}`}>
                    <div className={`${styles.folder_item}`}>
                        <Image src={'/project/folder_star.png'} width={60} height={60} alt=""></Image>
                        <p className='prevent-select'>Đã gắn sao</p>
                    </div>
                    <div className={`${styles.folder_item}`}>
                        <Image src={'/project/folder_upload.png'} width={60} height={60} alt=""></Image>
                        <p className='prevent-select'>Tải lên</p>
                    </div>
                    <div className={`${styles.folder_item}`}>
                        <Image src={'/project/folder.png'} width={60} height={60} alt=""></Image>
                        <p className='prevent-select'>Thư mục của tôi</p>
                    </div>
                </div>
            </div>
            <div className={`${styles.design}`}>
                <div className={`${styles.block_title}`}>
                    <Image src={'/header/dropdown_icon.png'} width={13} height={6} alt=""></Image>
                    <p className={`${styles.title}`}>Thiết kế</p>
                </div>
                <div className={`${styles.design_content}`} ref={designRef}
                  style={{justifyContent:`${listDesign?.length > designDimension?.itemPerRow && designDimension?.itemPerRow != 0 ? 'space-around' : 'flex-start'}`}}
                >
                    {
                        listDesign?.map((item:RecentlyType,index:number)=>{
                            return(
                              ((Math.floor(listDesign?.length / designDimension?.itemPerRow) != Math.floor((index) / designDimension?.itemPerRow)) || index < designDimension?.itemPerRow)
                              &&
                              <div key={index} ref={index == 0 ? designItemRef : null}>
                                  <DesignItem data={item}></DesignItem>
                              </div>
                            )
                        })
                    }
                </div>
                <div 
                  className={`${styles.design_content} ${styles.design_content2}`} 
                  style={{
                    marginLeft:`${designDimension?.marginLeft}px`,
                    gap:`${(designRef?.current?.offsetWidth-(designDimension?.itemPerRow * designItemRef?.current?.offsetWidth)-designDimension?.marginLeft*2)/(designDimension?.itemPerRow-1)}px`,
                    marginTop:`${listDesign?.length > designDimension?.itemPerRow ? designDimension?.gap : 0}px`
                  }}
                >
                  {
                    listDesign?.map((item:RecentlyType,index:number)=>{
                      return(
                        (Math.floor(listDesign?.length / designDimension?.itemPerRow) == Math.floor((index) / designDimension?.itemPerRow) && (Math.floor(listDesign?.length / designDimension?.itemPerRow) != 0)) 
                        &&
                        <div key={index}>
                          <DesignItem data={item}></DesignItem>
                        </div>
                      )
                    })
                  }
                </div>
                <div className={`${styles.more}`}>
                  <p className="prevent-select">Hiển thị thêm</p>
                </div>
            </div>
            <div className={`${styles.design}`}>
                <div className={`${styles.block_title}`}>
                    <Image src={'/header/dropdown_icon.png'} width={13} height={6} alt=""></Image>
                    <p className={`${styles.title}`}>Mẫu thương hiệu</p>
                </div>
                <div className={`${styles.design_content}`} ref={brandRef}
                  style={{justifyContent:`${listBrand?.length > brandDimension?.itemPerRow && brandDimension?.itemPerRow != 0 ? 'space-around' : 'flex-start'}`}}
                >
                    {
                        listBrand?.map((item:BrandType,index:number)=>{
                            return(
                              ((Math.floor(listBrand?.length / brandDimension?.itemPerRow) != Math.floor((index) / brandDimension?.itemPerRow)) || index < brandDimension?.itemPerRow)
                              &&
                              <div key={index} ref={index == 0 ? brandItemRef : null}>
                                  <BrandItem data={item}></BrandItem>
                              </div>
                            )
                        })
                    }
                </div>
                <div 
                  className={`${styles.design_content} ${styles.design_content2}`} 
                  style={{
                    marginLeft:`${brandDimension?.marginLeft}px`,
                    gap:`${(brandRef?.current?.offsetWidth-(brandDimension?.itemPerRow * brandItemRef?.current?.offsetWidth)-brandDimension?.marginLeft*2)/(brandDimension?.itemPerRow-1)}px`,
                    marginTop:`${listBrand?.length > brandDimension?.itemPerRow ? brandDimension?.gap : 0}px`
                  }}
                >
                  {
                    listBrand?.map((item:BrandType,index:number)=>{
                      return(
                        (Math.floor(listBrand?.length / brandDimension?.itemPerRow) == Math.floor((index) / brandDimension?.itemPerRow) && (Math.floor(listBrand?.length / brandDimension?.itemPerRow) != 0)) 
                        &&
                        <div key={index}>
                          <BrandItem data={item}></BrandItem>
                        </div>
                      )
                    })
                  }
                </div>
                <div className={`${styles.more}`}>
                  <p className="prevent-select">Hiển thị thêm</p>
                </div>
            </div>
            <div className={`${styles.design}`}>
                <div className={`${styles.block_title}`}>
                    <Image src={'/header/dropdown_icon.png'} width={13} height={6} alt=""></Image>
                    <p className={`${styles.title}`}>Hình ảnh</p>
                </div>
                <div className={`${styles.design_content}`}
                  style={{justifyContent:`${listDesign?.length > designDimension?.itemPerRow && designDimension?.itemPerRow != 0 ? 'space-around' : 'flex-start'}`}}
                >
                    {
                        listDesign?.map((item:RecentlyType,index:number)=>{
                            return(
                              ((Math.floor(listDesign?.length / designDimension?.itemPerRow) != Math.floor((index) / designDimension?.itemPerRow)) || index < designDimension?.itemPerRow)
                              &&
                              <div key={index}>
                                  <DesignItem data={item}></DesignItem>
                              </div>
                            )
                        })
                    }
                </div>
                <div 
                  className={`${styles.design_content} ${styles.design_content2}`} 
                  style={{
                    marginLeft:`${designDimension?.marginLeft}px`,
                    gap:`${(designRef?.current?.offsetWidth-(designDimension?.itemPerRow * designItemRef?.current?.offsetWidth)-designDimension?.marginLeft*2)/(designDimension?.itemPerRow-1)}px`,
                    marginTop:`${listDesign?.length > designDimension?.itemPerRow ? designDimension?.gap : 0}px`
                  }}
                >
                  {
                    listDesign?.map((item:RecentlyType,index:number)=>{
                      return(
                        (Math.floor(listDesign?.length / designDimension?.itemPerRow) == Math.floor((index) / designDimension?.itemPerRow) && (Math.floor(listDesign?.length / designDimension?.itemPerRow) != 0)) 
                        &&
                        <div key={index}>
                          <DesignItem data={item}></DesignItem>
                        </div>
                      )
                    })
                  }
                </div>
                <div className={`${styles.more}`}>
                  <p className="prevent-select">Hiển thị thêm</p>
                </div>
            </div>
            <div className={`${styles.design}`}>
                <div className={`${styles.block_title}`}>
                    <Image src={'/header/dropdown_icon.png'} width={13} height={6} alt=""></Image>
                    <p className={`${styles.title}`}>Video</p>
                </div>
                <div className={`${styles.design_content}`}
                  style={{justifyContent:`${listDesign?.length > designDimension?.itemPerRow && designDimension?.itemPerRow != 0 ? 'space-around' : 'flex-start'}`}}
                >
                    {
                        listDesign?.map((item:RecentlyType,index:number)=>{
                            return(
                              ((Math.floor(listDesign?.length / designDimension?.itemPerRow) != Math.floor((index) / designDimension?.itemPerRow)) || index < designDimension?.itemPerRow)
                              &&
                              <div key={index}>
                                  <DesignItem data={item}></DesignItem>
                              </div>
                            )
                        })
                    }
                </div>
                <div 
                  className={`${styles.design_content} ${styles.design_content2}`} 
                  style={{
                    marginLeft:`${designDimension?.marginLeft}px`,
                    gap:`${(designRef?.current?.offsetWidth-(designDimension?.itemPerRow * designItemRef?.current?.offsetWidth)-designDimension?.marginLeft*2)/(designDimension?.itemPerRow-1)}px`,
                    marginTop:`${listDesign?.length > designDimension?.itemPerRow ? designDimension?.gap : 0}px`
                  }}
                >
                  {
                    listDesign?.map((item:RecentlyType,index:number)=>{
                      return(
                        (Math.floor(listDesign?.length / designDimension?.itemPerRow) == Math.floor((index) / designDimension?.itemPerRow) && (Math.floor(listDesign?.length / designDimension?.itemPerRow) != 0)) 
                        &&
                        <div key={index}>
                          <DesignItem data={item}></DesignItem>
                        </div>
                      )
                    })
                  }
                </div>
                <div className={`${styles.more}`}>
                  <p className="prevent-select">Hiển thị thêm</p>
                </div>
            </div>
        </div>
    )
}