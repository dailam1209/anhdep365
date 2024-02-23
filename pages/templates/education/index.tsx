import SlideShow from "@/component/slideShow";
import s from "./index.module.scss";
import Image from "next/image";
import { Tabs } from "antd";


export default function GiaoDuc(){

    
    const ClassTab=()=>{
        const listShowData= []
        for (let index = 0; index < 21; index++) {
        listShowData?.push(
            {
            avatar:'/home/project_img.png',
            title:'LỚP3 '
            }
        )
        }
        const listShowModel= []
        for (let index = 0; index < 21; index++) {
            listShowModel?.push(
            {
            avatar:'/photo/education/face.png',
            title:'Flashcard '
            }
        )
        }
        return(
            <div className={s.tab_class}>
                <div className={s.second_map}>
                    <SlideShow padding={true} listShow ={listShowData} heightAva={160} widthAva={171} />
                </div>
                <div className={s.third_map}>
                    <div className={s.first_title}>
                        Khám phá kho mẫu chất lượng cao dành cho giáo dục
                    </div>
                    <div className={s.body_tmap}>
                        {
                        listShowModel?.map((item,index)=>(
                            <div key={index} className={s.item}>
                                <Image className={s.image_model} width={360} height={244} src={item.avatar} alt=""/>
                                <div className={s.title}> {item.title}</div>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        )
    }
    return(
        <div className={s.education_container}>
            <div className={s.first_map}>
                <div className={s.f_text}>
                    <div>Giảng dạy, học tập và thiết kế với Canva</div>
                    <div>Tài nguyên học tập cùng các mẫu được thiết kế đẹp mắt cho Giáo dục, từ bài thuyết trình trên lớp đến bài tập về nhà.</div>
                </div>
                <div className={s.title_img}>
                    <Image className={s.img1} width={124} height={113} alt="" src='/photo/education/learnandstudy.png' />
                    <Image className={s.img2} width={428} height={284} alt="" src='/photo/education/backtoschool.png' />
                    <Image className={s.img3} width={161} height={115} alt="" src='/photo/education/dreambig.png' />
                </div>
            </div>
            <Tabs
                    defaultActiveKey="1"
                    // onChange={onChange}
                    // className={folderChange? s.none:s.tabside}
                    size="large"
                    items={[
                    {
                        label:`Lớp `,
                        key: '1',
                        children:<ClassTab/> ,
                    },
                    {
                        label:`Môn học`,
                        key: '2',
                        children: <ClassTab/> ,
                    },
                    {
                        label:`Loại tài nguyên`,
                        key: '3',
                        children: <ClassTab/> ,
                    },
                    ]}
                />
        </div>
    )
}