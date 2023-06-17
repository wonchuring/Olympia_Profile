import React from "react";
import OlympiaItem from "./OlympiaItem.jsx";
import "./OlympiaList.scss";

const OlympiaList = ({ data, showImg }) => {
  return (
    <ul className="OlympiaList">
      {data.map((item) => (
        <OlympiaItem key={item.id} item={item} showImg={showImg} />
      ))}
    </ul>
  );
};

export default OlympiaList;
