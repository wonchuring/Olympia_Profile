import React from "react";

const InfoProfile = ({ item }) => {
  const { id, name, korName, birth, nationality, height, weight } = item;

  return (
    <div className="InfoProfile">
      <h3>{name}</h3>
      <span>{korName}</span>
      <hr />
      <strong>출생</strong>
      <p>{birth}</p>
      <strong>국적</strong>
      <p>{nationality}</p>
      <strong>신장</strong>
      <p>{height}</p>
      <strong>체중</strong>
      <p>{weight}</p>
    </div>
  );
};

export default InfoProfile;
