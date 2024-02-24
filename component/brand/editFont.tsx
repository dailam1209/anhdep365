import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";


interface Props {
  className?: string;
  className_rv?: string;
  name?: any;
  form?: any;
}
const EditFront:React.FC<Props> = ({ className, className_rv, name, form }) => {
  const [content, setContent] = useState("");
  const handleEditorChange = (value: string) => {
    setContent(value);
    form.setFieldsValue({
      [name]: value
    });
  };
  
  return (
    <div>
      
    </div>
  );
};

export default EditFront;
