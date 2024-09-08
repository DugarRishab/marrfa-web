import React from "react";
import "./CustomButton.css";

const CustomButton = ({ text, invert = false, fullWidth=false, rounded=true, startIcon=null, style,  ...props }) => {
    return (
        <button {...props} style = {{
          width: fullWidth?"100%":"max-content" ,
          borderRadius: rounded?"100px":"",
          ...style
        }} className={"custom-btn" + (invert ? " invert" : "")}>
            {startIcon?startIcon:null}{text}
        </button>
    );
};

export default CustomButton;
