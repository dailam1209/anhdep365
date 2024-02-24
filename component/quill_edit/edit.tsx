// Import thư viện và stylesheet của react-quill
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import styles from './quill.module.css'

// Import các thành phần và hooks khác từ React hoặc Next.js
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import CustomToolbar from './customToolbar';
import { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { CheckFront, CloseFront, Delete, Edit } from '@/public/brand';
import { tree } from 'next/dist/build/templates/app-page';
import ColorPickerComponent from '../color_picker/colorPicker';


interface Props {
    className?: string;
    className_rv?: string;
    name?: any;
    form?: any;
}

const IconElement = () => {
    const [ isEdit, setIsEdit ] = useState<Boolean>(false);
    return (
        <div style={{
                position: 'absolute',
                top: '90.5px',
                right:'20px',
                bottom: 0
            }}>
                <div className={styles.font__wrap}>
                    <div className={styles.font__edit_icon}>
                        <Edit className={``}/>
                    </div>
                    <div className={styles.font__edit_icon}>
                        <Delete className={``}/>
                    </div>
                </div>
                {isEdit && <div>
                    <div>
                        <CheckFront className={``}/>
                    </div>
                    <div>
                        <CloseFront className={``}/>
                    </div>
                    </div>}
                
            </div>
    )
}
const Editor = ({ className, className_rv ,name, form}:  Props) => {
    // Khai báo state để lưu trữ nội dung của trình soạn thảo
    const currentEditRef = useRef(null);
    const [content, setContent] = useState('');
    const [ isEdit, setIsEdit ] = useState<Boolean>(false);
    const [isHandle, setIsHandle ] = useState<Boolean>(false);


    // Hàm xử lý khi nội dung trình soạn thảo thay đổi
    const handleEditorChange = (value: string) => {
        console.log(value)
        setContent(value);
        form.setFieldsValue({
            [name]: value,
          });
    };

    const modules = {
        toolbar: {
            container: "#toolbar",
        }
    }
    const handleDisplayNone = () => {
        if(!isHandle) {
            return 0;
        }
        let blockEdit
        let blockEditContent
        // let blockEdit 
        if (currentEditRef && currentEditRef.current) {
            const element = currentEditRef.current as any;
            blockEdit = element.querySelector('.ql-snow');
        }

        if (currentEditRef && currentEditRef.current) {
            const element = currentEditRef.current as any;
            blockEditContent = element.querySelector('.ql-snow');
        }

        
        // const blockEdit = currentEditRef?.current ? currentEditRef?.current?.querySelector('ql-snow') : undefined;
        // const blockEditContent = currentEditRef?.current ?  currentEditRef?.current?.querySelector('.ql-container') : undefined;
       
        if(isEdit ) {
            if(blockEdit) {
                blockEdit.classList.add(`${styles.hidden_block}`)
                blockEditContent.classList.add(`${styles.add_border_top}`)
            }
        } else {
            blockEdit.classList.remove(`${styles.hidden_block}`)
            blockEditContent.classList.remove(`${styles.add_border_top}`)
        }
        
    }

    const formats = [
        'font','size',
        'bold','italic','underline','strike',
        'color','background',
        'script',
        'header','blockquote','code-block',
        'indent','list',
        'direction','align',
        'link','image','video','formula',
      ]

      useEffect(() => {
            handleDisplayNone()
            setIsHandle(true)
      }, [isEdit])

    return (
        <div className={className} >
            {/* Trình soạn thảo văn bản */}
            <div ref={currentEditRef} style={{
                position: 'relative'
            }}>
            <CustomToolbar />
            <ReactQuill
            
            style={{
                position: 'relative'
            }}
                value={content}
                onChange={handleEditorChange}
                modules={modules}
                formats={formats}
                theme="snow"
            /> 
            <div style={{
                position: 'absolute',
                top: isEdit ? '15px' : '90.5px',
                right:'20px',
                transition: 'all 0.1s',
                bottom: 0
            }}>
                {isEdit && <div className={styles.font__wrap}>
                    <div onClick={() => {
                        setIsHandle(true),
                        setIsEdit(!isEdit)
                    }} className={styles.font__edit_icon}>
                        <Edit className={``}/>
                    </div>
                    <div className={styles.font__edit_icon}>
                        <Delete className={``}/>
                    </div>
                </div>}
                {!isEdit && <div className={styles.font__wrap}>
                    <div onClick={() => {
                        setIsEdit(!isEdit)
                    }} className={styles.font__edit_icon} >
                        <CheckFront className={``}/>
                    </div>
                    <div className={styles.font__edit_icon}>
                        <CloseFront className={``}/>
                    </div>
                    </div>}
                
            </div>
            </div>
            <ColorPickerComponent handleColorSelected={function (color: string): void {
                throw new Error('Function not implemented.');
            } }/>
        </div>
    );
};

export default Editor
