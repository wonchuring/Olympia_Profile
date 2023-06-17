import React from "react";

const InfoOverview = ({ item }) => {
  const { id, overview } = item;

  return (
    <div className="InfoOverview">
      <strong>
        {overview.split(". ").map((sentence, index) => (
          <p key={index}>{sentence}</p>
        ))}
      </strong>
    </div>
  );
};

export default InfoOverview;
