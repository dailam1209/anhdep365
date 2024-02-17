import s from "./index.module.scss"
import Image from "next/image"
export default function Bussiness(){
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
        </div>
    )
}