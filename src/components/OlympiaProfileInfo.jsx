import React from "react";
import OlympiaProfile from "./OlympiaProfile";
import "./OlympiaProfileInfo.scss";

const OlympiaProfileInfo = ({ tab, showBox, content, menu }) => {
  return (
    <div className="OlympiaProfileInfo">
      <ul>
        {tab.map((item) => (
          <li key={item.id} onClick={() => showBox(item.id)}>
            {item.text}
          </li>
        ))}
      </ul>
      <OlympiaProfile content={content} menu={menu} />
    </div>
  );
};

export default OlympiaProfileInfo;
