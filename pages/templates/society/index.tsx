import s from "./index.module.scss"
import Image from "next/image"
export default function MangXaHoi(){
    return(
        <div className={s.society_container}>
            <div className={s.first_map}>
                <div className={s.f_text}>
                    <div>Chia sẻ nội dung nổi trội trên mạng xã hội</div>
                    <div>Chúng tôi có nhiều mẫu đẹp mắt giúp bạn dễ dàng tạo nội dung thu hút, bất kể là bài đăng tĩnh hay video trên mạng xã hội. Chắc chắn bạn sẽ tỏa sáng trên mọi nền tảng!</div>
                </div>
                <div className={s.title_img}>
                    <Image width={320} height={320} alt="" src='/society/phone1.png' />
                    <Image width={320} height={320} alt="" src='/society/phone2.png' />

                </div>
            </div>
        </div>
    )
}