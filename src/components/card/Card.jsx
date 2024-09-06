
import React from 'react';


const Card = ({ title, icon, onClick }) => {
  return (
    <div className="cards">
    <div className="card" onClick={onClick}>
      <p>{title}</p>
      <img src={icon} alt="" />
    </div>
    </div>
  );
};

export default Card;