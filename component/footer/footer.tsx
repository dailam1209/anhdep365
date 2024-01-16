import Image from 'next/image'
import styles from './footer.module.css'
export default function Footer(){
    return(
        <div className={styles.footer_container}>
            <div className={styles.footer_content}>
                <div className={styles.footer_block_left}>
                    <div className={styles.footer_infor}>
                        <p>Đơn vị chủ quản:</p>
                        <p style={{fontSize:'32px'}}>Công ty Cổ phần Thanh toán Hưng Hà</p>
                        <p>VP1: Tầng 4, B50, Lô 6, KĐT Định Công, Hoàng Mai, Hà Nội</p>
                        <p>VP2: Thôn Thanh Miếu, Xã Việt Hưng, Huyện Văn Lâm, Tỉnh Hưng Yên </p>
                        <p>VP3: Tầng 2, Số 1 Đường Trần Nguyên Đán, KĐT Định Công, Hoàng Mai, Hà Nội</p>
                        <p>Hotline: 0982.079.209</p>
                        <p>Email hỗ trợ: timviec365.vn@gmail.com</p>
                    </div>
                    <div className={`${styles.footer_chat}`}>
                        <p>Tải APP Chat 365 tại đây</p>
                        <Image className={styles.qr_chat} src={'/footer/qr_chat.png'} width={156} height={156} alt=''></Image>
                    </div>
                    <div className={`${styles.footer_tag} flex`}>
                        <div>
                            <div className={`${styles.footer_tag_ele} flex`}>
                                <Image src={'/footer/arrow.png'} width={24} height={24} alt=''></Image>
                                <p>Giới thiệu chung</p>
                            </div>
                            <div className={`${styles.footer_tag_ele} flex`}>
                                <Image src={'/footer/arrow.png'} width={24} height={24} alt=''></Image>
                                <p>thông tin cần biết</p>
                            </div>
                            <div className={`${styles.footer_tag_ele} flex`}>
                                <Image src={'/footer/arrow.png'} width={24} height={24} alt=''></Image>
                                <p>Thỏa thuận sử dụng</p>
                            </div>
                            <div className={`${styles.footer_tag_ele} flex`}>
                                <Image src={'/footer/arrow.png'} width={24} height={24} alt=''></Image>
                                <p>Sơ đồ website</p>
                            </div>
                        </div>
                        <div>
                        <div className={`${styles.footer_tag_ele} flex`}>
                                <Image src={'/footer/arrow.png'} width={24} height={24} alt=''></Image>
                                <p>Quy định bảo mật</p>
                            </div>
                            <div className={`${styles.footer_tag_ele} flex`}>
                                <Image src={'/footer/arrow.png'} width={24} height={24} alt=''></Image>
                                <p>Quy trình giải quyết tranh chấp</p>
                            </div>
                            <div>
                                <Image style={{marginRight:'15px'}} src={'/footer/lience.png'} width={148} height={56} alt=''></Image>
                                <Image src={'/footer/dmca_protected.png'} width={118} height={59} alt=''></Image>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.footer_block_right} flex`}>
                    <p>Tải APP Chat 365 tại đây</p>
                    <Image className={styles.qr_chat} src={'/footer/qr_chat.png'} width={295} height={295} alt=''></Image>
                    <div className={styles.chat_mobi}>
                        <Image src={'/footer/app_store.png'} width={160} height={48} alt='app store'></Image>
                        <Image src={'/footer/ch_play.png'} width={160} height={48} alt='app store'></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}