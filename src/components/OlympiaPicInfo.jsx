import React from "react";
import OlympiaPic from "./OlympiaPic";
import "./OlympiaPicInfo.scss";

const OlympiaPicInfo = ({ image }) => {
  return (
    <div className="OlympiaPicInfo">
      {image.map((item) => (
        <OlympiaPic key={item.id} item={item} />
      ))}
    </div>
  );
};

export default OlympiaPicInfo;
