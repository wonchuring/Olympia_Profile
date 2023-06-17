import React, { useEffect, useState } from "react";

import olympiaData from "../assets/api/olympiaData";
import olympiaImgData from "../assets/api/olympiaImgData";
import olympiaTab from "../assets/api/olympiaTab";
import olympiaContents from "../assets/api/olympiaContents";

import OlympiaList from "./OlympiaList";
import OlympiaPicInfo from "./OlympiaPicInfo";
import OlympiaProfileInfo from "./OlympiaProfileInfo";

import "./style.scss";

const Main = () => {
  const [data, setData] = useState(olympiaData);
  const [image, setImage] = useState(olympiaImgData);
  const [tab, setTab] = useState(olympiaTab);
  const [content, setContent] = useState(olympiaContents);
  const [menu, setMenu] = useState(1);

  const showImg = (id) => {
    setMenu(1);
    setImage(olympiaImgData.filter((item) => item.id === id));
    setContent(olympiaContents.filter((item) => item.id === id));
  };

  const showBox = (id) => {
    setMenu(id);
    setTab(tab.map((item) => (item.id === id ? { ...item, on: true } : { ...item, on: false })));
  };

  useEffect(() => {
    setContent(olympiaContents.filter((item) => item.id === menu));
  }, []);

  useEffect(() => {
    setImage(olympiaImgData.filter((item) => item.id === 1));
  }, []);

  return (
    <div>
      <div className="wrap">
        <section className="content">
          <div className="inner">
            <h2>
              <img src="./images/olympialogo.png" alt="" />
            </h2>
            <OlympiaList data={data} showImg={showImg} />
          </div>
        </section>
        <section className="info">
          <OlympiaPicInfo image={image} />
          <OlympiaProfileInfo tab={tab} menu={menu} showBox={showBox} content={content} />
        </section>
      </div>
    </div>
  );
};

export default Main;
