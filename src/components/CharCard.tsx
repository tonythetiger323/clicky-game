import React from "react";
import "./CharCard.css";

const CharCard = ({ id, name, image, handleSelected }: any) => (
  <div>
    <div
      className="card"
      key={id}
      data-id={id}
      style={{ backgroundImage: `url(${image})` }}
      onClick={handleSelected}
    />
  </div>
);

export default CharCard;
