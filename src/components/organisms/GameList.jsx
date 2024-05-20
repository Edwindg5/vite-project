import React from 'react';
import GameCard from '../molecules/GameCard';
import './GameList.css';

function GameList({ games }) {
  return (
    <div className="game-list">
      {games.map((game) => (
        <GameCard key={game.id} title={game.title} image={game.image} />
      ))}
    </div>
  );
}

export default GameList;
