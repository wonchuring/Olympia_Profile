import React from "react";
import InfoOverview from "./InfoOverview";
import InfoProfile from "./InfoProfile";
import Infocarrer from "./InfoCareer";
import "./OlympiaProfile.scss";

const OlympiaProfile = ({ content, menu }) => {
  return (
    <div className="OlympiaProfile">
      {menu === 1 && content.map((item) => <InfoProfile item={item} key={item.id} />)}
      {menu === 2 && content.map((item) => <InfoOverview item={item} key={item.id} />)}
      {menu === 3 && content.map((item) => <Infocarrer item={item} key={item.id} />)}
    </div>
  );
};

export default OlympiaProfile;
