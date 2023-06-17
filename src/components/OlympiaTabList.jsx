import React from "react";
import OlympiaTabItem from "./OlympiaTabItem";

const OlympiaTabList = ({ tab }) => {
  return (
    <ul className="OlympiaTabList">
      {tab.map((item) => (
        <OlympiaTabItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default OlympiaTabList;
