import React from 'react';
import { TrendingDown, TrendingUp } from '../icons/icons';
import { priceSplitter } from '../utils';

const Coin = ({ coin }) => {
  return (
    <>
      <div className="grid grid-cols-3 md:grid-cols-4 font-light p-2 roudned border-gray-200 border-b hover:bg-gray-200">
        <div className="flex items-center gap-1 w-full">
          <img className="w-6" src={coin.image} alt={coin.name} />
          <p>{coin.name}</p>
          <span className="text-xs">({coin.symbol})</span>
        </div>
        <span className="w-full text-center">
          {priceSplitter(coin.current_price)}
        </span>
        <span
          className={`flex gap-1 ${
            coin.price_change_percentage_24h < 0
              ? 'text-red-400'
              : 'text-green-400'
          }`}
        >
          {coin.price_change_percentage_24h < 0 ? (
            <TrendingDown />
          ) : (
            <TrendingUp />
          )}
          {coin.price_change_percentage_24h}
        </span>
      </div>
    </>
  );
};

export default Coin;
