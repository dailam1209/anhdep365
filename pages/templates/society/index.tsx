import SlideShow from "@/component/slideShow"
import s from "./index.module.scss"
import Image from "next/image"
import { useContext } from "react";
import { TabSideContext } from "@/pages/_app";
export default function MangXaHoi(){
    const { isTabSide, setTabSide } = { ...useContext(TabSideContext) };
    const listShowData= []
  for (let index = 0; index < 21; index++) {
    listShowData?.push(
      {
        avatar:'/home/project_img.png',
        title:'Bài đăng instagram'
      }
    )
  }
  const listShowModel= []
  for (let index = 0; index < 21; index++) {
    listShowModel?.push(
      {
        avatar:'/society/khomau.png',
        title:'Đăng bài facebook',
      }
    )
  }
  const listShowItem= []
  for (let index = 0; index < 21; index++) {
    listShowItem?.push(
      {
        avatar:'/society/tapchi.png',
        title:'Bộ sưu tập mẫu đẹp',
        title2:'25 mục'
      }
    )
  }
  isTabSide
    return(
        <div className={s.society_container}>
            <div className={s.body}>
            <div className={s.first_map}>
                <div className={s.f_text}>
                    <div>Chia sẻ nội dung nổi trội trên mạng xã hội</div>
                    <div>Chúng tôi có nhiều mẫu đẹp mắt giúp bạn dễ dàng tạo nội dung thu hút, bất kể là bài đăng tĩnh hay video trên mạng xã hội. Chắc chắn bạn sẽ tỏa sáng trên mọi nền tảng!</div>
                </div>
                <div className={s.title_img}>
                    <Image className={s.img1 } width={320} height={320} alt="" src='/society/phone1.png' />
                    <Image className={`${s.img2} ${isTabSide? s.none : ""}`} width={320} height={320} alt="" src='/society/phone2.png' />
                </div>
            </div>
            <div className={s.second_map}>
                <SlideShow padding={true} listShow ={listShowData} heightAva={160} widthAva={171} />
            </div>
            <div className={s.second_map}>
              <div className={s.title}>Bộ sưu tập nổi bật</div>
              <SlideShow padding={false} listShow ={listShowItem} heightAva={260} widthAva={350} />
            </div>
            <div className={s.third_map}>
                <div className={s.first_title}>
                    Khám phá kho mẫu chất lượng cao cho doanh nghiệp
                </div>
                <div className={s.body_tmap}>
                    {
                    listShowModel?.map((item,index)=>(
                        <div key={index} className={s.item}>
                        <Image className={s.image_model} width={359} height={302} src={item.avatar} alt=""/>
                        <div className={s.title}> {item.title}</div>
                        </div>
                    ))
                    }
                </div>
            </div>
            </div>
        </div>
    )
}