import React from 'react';
import './GameCard.css';

function GameCard({ title, image, onClick }) {
  return (
    <div className="game-card" onClick={onClick}>
      <img src={image} alt={title} className="game-card-image" />
      <h3 className="game-card-title">{title}</h3>
    </div>
  );
}

export default GameCard;
