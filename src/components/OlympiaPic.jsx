import React, { useState } from "react";

const OlympiaPic = ({ item }) => {
  const { id, name, img1, img2, img3, img4, img5 } = item;
  const [topimg, setTopImg] = useState(img1);

  const changeImg = (bottomimg) => {
    setTopImg(bottomimg);
  };
  return (
    <div className="OlympiaPic">
      <div className="topimg">
        <img src={topimg} alt={name} />
      </div>
      <div className="bottomimg">
        <img src={img1} alt={name} onClick={() => changeImg(img1)} />
        <img src={img2} alt={name} onClick={() => changeImg(img2)} />
        <img src={img3} alt={name} onClick={() => changeImg(img3)} />
        <img src={img4} alt={name} onClick={() => changeImg(img4)} />
        <img src={img5} alt={name} onClick={() => changeImg(img5)} />
      </div>
    </div>
  );
};

export default OlympiaPic;
