import { Button, Input, Modal, Tabs } from "antd";
import s from "./addbrand.module.css"
import { LeftOutlined, PlusOutlined, RightOutlined, SearchOutlined } from "@ant-design/icons";
import Image from "next/image"
import { useState } from "react";
interface IAddBrandProps{
    isOpen: boolean;
    setOpenAdd:(check:boolean)=>void;
}
interface IFirstTabData{
    image:string;
    title:string;
}
export function ModalAddBrand(props:IAddBrandProps){
    const{isOpen,setOpenAdd}=props
    const[folderChange, setFolderChange] =useState(false)
    const [titleFolder, setTitleFolder] =useState('')
    const FirstTabData :IFirstTabData[]=[
        {
            image:'/brand/folder.png',
            title:'Thư mục số 1',
        }
    ]
    const SecondTabData: IFirstTabData[]=[
        {
            image:'/brand/folder.png',
            title:'Dự án của bạn',
        },
        {
            image:'/brand/share.png',
            title:'Đã chia sẻ với bạn',
        }
    ]
    const FolderAdd=()=>{
        return(
            <div>
                <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-start"}}  onClick={()=>setFolderChange(false)}>
                    <div style={{width:"auto"}}><LeftOutlined /></div>
                    <div style={{width:"auto",paddingLeft:"20px"}}>{titleFolder}</div>
                </div>
                <div style={{minHeight:"200px", display:"flex",alignItems:"center", justifyContent:"center"}}>
                    Thêm Bộ thương hiệu và thư mục này hoặc tạo thư mục mới
                </div>
            </div>
        )
    }
    const FirstTab=() =>(
        <div className={s.ft_contain}>
            {
                FirstTabData.map((item,index)=>(
                    <div key={index} className={s.file} onClick={()=>{setFolderChange(true);setTitleFolder(item.title)}}>
                        <div className={s.content}>
                            <Image style={{width:"28px"}} width={28} height={28} alt="" src={item.image} />
                            <div className={s.content_title}>{item.title}</div>
                        </div>
                        <div style={{width:"auto"}}> <RightOutlined /></div>
                    </div>
                ))
            }
        </div>
    )

    const SecondTab=()=>(
        <div className={s.ft_contain}>
            {
                SecondTabData.map((item,index)=>(
                    <div key={index} className={s.file} onClick={()=>{setFolderChange(true);setTitleFolder(item.title)}}>
                        <div className={s.content}>
                            <Image style={{width:"28px"}} width={28} height={28} alt="" src={item.image} />
                            <div className={s.content_title}>{item.title}</div>
                        </div>
                        <div style={{width:"auto"}}> <RightOutlined /></div>
                    </div>
                ))
            }
        </div>
    )
    return(
        <div>
            <Modal
                open={isOpen}
                title={<div className={s.title_modal}>Thêm bộ thương hiệu vào một thư mục</div>}
                onCancel={()=>setOpenAdd(false)}
                width={1200} 
                footer={[
                    <div key="button-action" className={s.button_action}>
                    <Button>
                        Thư mục mới
                    </Button>
                    <Button key="submit" type="primary" onClick={() => {}}>
                        <PlusOutlined />
                        Thêm bộ thương hiệu
                    </Button>
                    </div>
                ]}     
            >
                <Input 
                    size="large" 
                    placeholder="Tìm kiếm tất cả thư mục"
                    addonBefore={ <SearchOutlined />}
                />
                <Tabs
                    defaultActiveKey="1"
                    // onChange={onChange}
                    className={s.tab_file}
                    size="large"
                    items={[
                    {
                        label: `Gần Đây`,
                        key: '1',
                        children: folderChange? <FolderAdd/>: <FirstTab/>,
                    },
                    {
                        label: `Tất cả`,
                        key: '2',
                        children:folderChange? <FolderAdd/>: <SecondTab/>,
                    },
                    ]}
                />
            </Modal>
        </div>
    )
}