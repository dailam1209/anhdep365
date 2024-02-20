
import SlideShow from "../../../component/slideShow/index"
import s from "./index.module.scss"
import Image from "next/image"


export default function Bussiness(){
  const listShowData= []
  for (let index = 0; index < 21; index++) {
    listShowData?.push(
      {
        avatar:'/home/project_img.png',
        title:'Doccccccccc'
      }
    )
  }
  const listShowBST= []
  for (let index = 0; index < 21; index++) {
    listShowBST?.push(
      {
        avatar:'/photo/business/bosuutap.png',
        title:'Mẫu báo cáo Digital',
        title2:'25 mục'
      }
    )
  }
  const listShowModel=[]
  for (let index = 0; index < 21; index++) {
    listShowModel?.push(
      {
        avatar:'/photo/business/phucvu.png',
        title:'Báo Cáo',
      }
    )
  }
    return(
        <div className={s.bussiness_container}>
            <div className={s.first_map}>
                <div className={s.text_box}>
                  <div>
                    Tái định nghĩa cách ta làm việc
                  </div>
                  <div>
                    Tạo ấn tượng khi hoàn thành công việc, từ whiteboard, mẫu bài thuyết trình, hóa đơn đến tiêu đề thư
                  </div>
                </div>
                <div className={s.item_right}>
                    <Image className={s.tv} height={245} width={456} src="/photo/business/tv.png" alt={""}/>
                    <Image className={s.bright} height={107} width={102} src="/photo/business/bright.png" alt={""}/>
                    <Image className={s.goodjob} height={70} width={111} src="/photo/business/goodjob.png" alt={""}/>
                    <Image className={s.greatjob} height={58} width={42} src="/photo/business/greatjob.png" alt={""}/>
                    <Image className={s.welldone} height={99} width={68} src="/photo/business/welldone.png" alt={""}/>
                    <div className={s.greatjob_box}></div>
                    <div className={s.bright_box}></div>
                    <div className={s.goodjob_box}></div>
                    <div className={s.welldone_box}></div>
                </div>
            </div>
            <div className={s.second_map}>
              <SlideShow padding={true} listShow ={listShowData} heightAva={160} widthAva={171} />
            </div>
            <div className={s.second_map}>
              <div className={s.title}>Bộ sưu tập đặc biệt</div>
              <SlideShow padding={false} listShow ={listShowBST} heightAva={260} widthAva={350} />
            </div>
            <div className={s.third_map}>
              <div className={s.first_title}>
                Khám phá kho mẫu chất lượng cao cho doanh nghiệp
              </div>
              <div className={s.body_tmap}>
                {
                  listShowModel?.map((item,index)=>(
                    <div key={index} className={s.item}>
                      <Image className={s.image_model} width={281} height={397} src={item.avatar} alt=""/>
                      <div className={s.title}> {item.title}</div>
                    </div>
                  ))
                }
              </div>
            </div>
        </div>
    )
}