import React, { ReactComponentElement, useState } from "react";
import Modal from "antd";
import {  Button, Space  } from 'antd'

export interface ModalProps {
    openModalAddToGroup: any
    setOpenModalAddToGroup: any,
    text: string,
}

export const ModalCustom:React.FC<ModalProps> = ({ openModalAddToGroup, setOpenModalAddToGroup, text }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [openModalSucess, setOpenModalSucess] = useState(false);

    // const handleCheckAllChange = (e) => {
    //     setIsChecked(e.target.checked);
    // };

    // const onFinish = (value) => {
    //     setOpenModalAddToGroup(false)
    //     setOpenModalSucess(true)
    // }
    return (
        <>
            {/* <Modal
                width={671}
                open={openModalAddToGroup}
                onCancel={() => {
                    // setOpenModalAddToGroup(false)
                }}
                footer={null}
            >
                <div className={``}>
                    <div className={``} onClick={() => { 
                        // setOpenModalAddToGroup(false)
                         }}>
                            <p>sdadfasd</p>
                    </div>

                </div>
                <div className={``}>
                    
                    <div className={``}>
                        <div style={{ flex: 1 }}>
                            <Button
                                size="large"
                                type="primary"
                                htmlType="submit"
                                style={{ background: '#4C5BD4' }}
                            >
                                Mời vào nhóm
                            </Button>
                        </div>
                        <div style={{ flex: 1 }}>
                            <Button
                                style={{ background: '#D44C4C' }}
                                size="large"
                                onClick={() => { 
                                    // setOpenModalAddToGroup(false) 
                                    }}>
                                Huỷ
                            </Button>
                        </div>
                    </div>
                </div>
            </Modal> */}
        </>
    )
}


