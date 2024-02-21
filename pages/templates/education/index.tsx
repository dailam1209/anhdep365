import s from "./index.module.scss";
import Image from "next/image";


export default function GiaoDuc(){
    return(
        <div className={s.education_container}>
            <div className={s.first_map}>
            <div className={s.first_map}>
                <div className={s.f_text}>
                    <div>Giảng dạy, học tập và thiết kế với Canva</div>
                    <div>Tài nguyên học tập cùng các mẫu được thiết kế đẹp mắt cho Giáo dục, từ bài thuyết trình trên lớp đến bài tập về nhà.</div>
                </div>
                <div className={s.title_img}>
                    <Image className={s.img1} width={320} height={320} alt="" src='/photo/education/learnandstudy.png' />
                    <Image className={s.img2} width={320} height={320} alt="" src='/photo/education/backtoschool.png' />
                    <Image className={s.img2} width={320} height={320} alt="" src='/photo/education/dreambig.png' />
                </div>
            </div>
            </div>
        </div>
    )
}