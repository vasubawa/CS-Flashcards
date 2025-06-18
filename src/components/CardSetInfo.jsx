import React from 'react';

function CardSetInfo({ title, description, totalCards }) {
  return (
    <div className="card-set-info">
      <h1>{title}</h1>
      <p>{description}</p>
      <p>Total cards: {totalCards}</p>
    </div>
  );
}

export default CardSetInfo;