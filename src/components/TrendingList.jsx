import React from 'react';

const TrendingList = ({ coin, index }) => {
  return (
    <>
      <div className="font-light mb-2 p-2 border-gray-200 border-2 rounded hover:bg-gray-200">
        <div className="flex items-center gap-1"></div>
        <span className="text-xl">
          {index + 1}.<img src={coin.item.thumb} alt=""></img>
          {coin.item.name}
        </span>
      </div>
    </>
  );
};

export default TrendingList;
