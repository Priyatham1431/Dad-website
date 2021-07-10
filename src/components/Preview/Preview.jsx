import React from "react";
import "./Preview.css";

const Preview = ({title, poetry}) => {
  return (
    <>
      <div className="outer">
        <p className={`${poetry ? "color:white" : "color:black"} title-text`}>{title}</p>
      </div>
    </>
  );
};

export default Preview;
