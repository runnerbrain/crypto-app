import React from 'react';
import { Link } from 'react-router-dom';

const TrendingList = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.item.id}`}>
      <div className="font-light mb-2 p-2 border-gray-200 border-2 rounded hover:bg-gray-200">
        <div className="flex items-center gap-1">
          <span className="font-semibold">{coin.item.score + 1}.</span>
          <img className="w-5" src={coin.item.thumb} alt={coin.item.name}></img>
          <p>{coin.item.name}</p>
          <small>({coin.item.symbol})</small>
        </div>
      </div>
    </Link>
  );
};

export default TrendingList;
