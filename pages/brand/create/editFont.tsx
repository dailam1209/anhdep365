import React, { useState } from "react";
import dynamic from 'next/dynamic';
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";


interface Props {
  className?: string;
  className_rv?: string;
  name?: any;
  form?: any;
}
const EditFront = ({ className, className_rv, name, form }: Props) => {
  const [content, setContent] = useState("");
  // Hàm xử lý khi nội dung trình soạn thảo thay đổi
  const handleEditorChange = (value: string) => {
    // console.log("object");
    setContent(value);
    form.setFieldsValue({
      [name]: value
    });
  };

  
  return (
    <div>
      <ReactQuill
        value={content}
        onChange={handleEditorChange}
        modules={{
          toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["font","bold", "italic"],
            // ["bold", "italic", "underline", "strike"],
            // [{ color: [] }, { background: [] }], // Thêm màu sắc cho văn bản và nền
            // ["link", "image", "video"],
            // ["blockquote", "code-block"],
            // [{ list: "ordered" }, { list: "bullet" }],
            // [{ indent: "-1" }, { indent: "+1" }],
            // [{ align: [] }],
            // ["clean"]
          ]
        }}
        theme="snow"
      />
      {/* Hiển thị nội dung trình soạn thảo */}
      <div className={className_rv} style={{
        display: 'none'
      }}>
        <h2>Preview</h2>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default EditFront;
