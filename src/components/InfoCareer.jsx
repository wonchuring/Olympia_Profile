import React from "react";

const InfoCareer = ({ item }) => {
  const { id, career } = item;
  return (
    <div className="InfoCareer">
      {career.map((item, index) => (
        <div key={index}>
          <strong>{item}</strong>
        </div>
      ))}
    </div>
  );
};

export default InfoCareer;
