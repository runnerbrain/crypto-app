import React from 'react';
import GetData from '../backend/GetData';
import TrendingList from './TrendingList';

const Trending = () => {
  const { response } = GetData('search/trending');
  console.log(response);
  // response.map((obj) => {
  //   <span>{obj.coin_id}</span>;
  // });

  return (
    <div className="text-2xl mt-4">
      {response &&
        response.coins.map((coin, i) => (
          <TrendingList key={coin.item.coin_id} coin={coin} index={i} />
        ))}
    </div>
  );
};

export default Trending;
