import React, { useState } from "react";
import formats from "./toolbarOptions";
import { Quill } from "react-quill";
// const Size = Quill.import("attributors/style/size");

const renderOptions = (formatData: any) => {
  const { className, options } = formatData;
  const [selected, setSelected] = useState<boolean>(true);
//   Size.whitelist = ["14px", "16px", "18px"];
//   Quill.register(Size, true);
  return (
    <select className={className}>
      <option selected={selected}></option>
      {options.map((value: any) => {
        return <option value={value}></option>;
      })}
    </select>
  );
};
const renderSingle = (formatData: any) => {
  const { className, value } = formatData;
  return <button className={className} value={value}></button>;
};
const CustomToolbar = () => (
  <div id="toolbar">
    {formats.map((classes) => {
      return (
        <span className="ql-formats">
          {classes.map((formatData) => {
            return formatData?.options
              ? renderOptions(formatData)
              : renderSingle(formatData);
              
          })}
        </span>
      );
    })}
  </div>
);
export default CustomToolbar;
