import React from "react";
import "./OlympiaItem.scss";

const OlympiaItem = ({ item, showImg }) => {
  const { id, name, imgurl } = item;
  return (
    <li className="OlympiaItem" onClick={() => showImg(id)}>
      <strong>{id}</strong>
      <div className="OlympiaImg">
        <img src={imgurl} alt={name} />
      </div>
      <span>{name}</span>
    </li>
  );
};

export default OlympiaItem;
