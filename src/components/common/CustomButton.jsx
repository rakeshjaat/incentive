import React from "react";

const CustomButton = ({ text, btnStyle, icon }) => {
  return (
    <button className={`common_btn ${btnStyle}`}>
      {text} {icon ? icon : ""}
    </button>
  );
};

export default CustomButton;
