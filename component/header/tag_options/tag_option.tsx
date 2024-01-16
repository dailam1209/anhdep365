import Link from 'next/link'
import styles from './tag_option.module.css'

export function Design(){
    return(
        <div className={styles.design_container}>
            <div>
                <p className={styles.title}>Tài liệu trực quan</p>
                <ul>
                    <li><Link href={''}>Bộ trực quan</Link></li>
                    <li><Link href={''}>Tài liệu</Link></li>
                    <li><Link href={''}>Bài thuyến trình</Link></li>
                    <li><Link href={''}>Bảng trắng</Link></li>
                    <li><Link href={''}>Trình chỉnh sửa PDF</Link></li>
                    <li><Link href={''}>Đồ thị và biểu đồ</Link></li>
                </ul>
            </div>
            <div>
                <p className={styles.title}>Ảnh và video</p>
                <ul>
                    <li><Link href={''}>Trình chỉnh sửa video</Link></li>
                    <li><Link href={''}>Trình chỉnh sửa video YouTube</Link></li>
                    <li><Link href={''}>Trình chỉnh sửa ảnh</Link></li>
                    <li><Link href={''}>Ảnh ghép</Link></li>
                </ul>
            </div>
            <div>
                <p className={styles.title}><Link href={''}>In</Link></p>
                <ul>
                    <li><Link href={''}>Danh thiếp</Link></li>
                    <li><Link href={''}>Thẻ</Link></li>
                    <li><Link href={''}>Lời mời</Link></li>
                    <li><Link href={''}>Cốc</Link></li>
                    <li><Link href={''}>Áo thun</Link></li>
                    <li><Link href={''}>Áo hoodie</Link></li>
                    <li><Link href={''}>Lịch</Link></li>
                    <li><Link href={''}>Nhãn</Link></li>
                </ul>
            </div>
            <div>
                <p className={styles.title}>Tiếp thị</p>
                <ul>
                    <li><Link href={''}>Logo</Link></li>
                    <li><Link href={''}>Áp phích</Link></li>
                    <li><Link href={''}>Tờ rơi</Link></li>
                    <li><Link href={''}>Tài liệu quảng cáo</Link></li>
                    <li><Link href={''}>Truyền thông xã hội</Link></li>
                    <li><Link href={''}>Trang web</Link></li>
                    <li><Link href={''}>Nhãn dán</Link></li>
                    <li><Link href={''}>Biển báo sân</Link></li>
                    <li><Link href={''}>Trình tạo mã QR</Link></li>
                </ul>
            </div>
        </div>
    )
}
export function Business(){
    return(
        <div className={styles.design_container}>
            đây là kinh doanh
        </div>
    )
}
export function Education(){
    return(
        <div className={styles.design_container}>
            đây là giáo dục
        </div>
    )
}
export function Plan(){
    return(
        <div className={styles.design_container}>
            đây là kế hoạch và giá cả
        </div>
    )
}
export function Study(){
    return(
        <div className={styles.design_container}>
            đây là học hỏi
        </div>
    )
}