import Image from 'next/image'
import styles from './brand.module.css'
import { useEffect, useRef, useState } from 'react'
interface BrandDimensionType{
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
const listBrand:BrandType[] = []
// for (let index = 0; index < 12; index++) {
//   listBrand.push(
//     {
//       index:index,
//       image:'/project/brand_logo.png',
//       title:'Bộ thương hiệu',
//       color:'#FF6A6A,#FFF6A3,#6AA6FF'
//     }
//   )
// }
export function Brand () {
    const brandRef:any = useRef(null)
    const brandItemRef:any = useRef(null)
    const [brandDimension, setBrandDimension] = useState<BrandDimensionType>({
        itemPerRow:0,
        windowWidth:0,
        gap:0,
        marginLeft:0
    })
    const setWindowDimensions = () => {
        setBrandDimension({...brandDimension,windowWidth : window.innerWidth})
        // setWindowHeight(window.innerHeight)
      }
    useEffect(()=>{
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
      },[brandDimension?.windowWidth])
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
                <div className={`${styles.block_title}`}>
                    <Image src={'/header/dropdown_icon.png'} width={13} height={6} alt=""></Image>
                    <p className={`${styles.title}`}>Mẫu thương hiệu</p>
                </div>
                {
                  listBrand.length != 0 ?
                  <>
                    <div className={`${styles.brand_content}`} ref={brandRef}
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
                      className={`${styles.brand_content} ${styles.brand_content2}`} 
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
                  </>
                  : 
                  <div className={`${styles.content_blank}`}>
                    <Image src={'/project/brand.png'} width={345} height={308} alt='brand image'></Image>
                    <p className={`${styles.text_content_blank1}`}>Rút ngắn thời gian thiết kế với Mẫu thương hiệu</p>
                    <p className={`${styles.text_content_blank2}`}>Giúp đội nhanh chóng tạo các thiết kế nhất quán bằng Mẫu thương hiệu</p>
                    <div className={`${styles.add_brand}`}>
                      <Image src={'/project/add_brand.png'} width={30} height={30} alt='add brand'></Image>
                      <p className='prevent-select'>Tạo Mẫu thương hiệu</p>
                    </div>
                    <div></div>  
                  </div>
                }
            </div>
    )
}
