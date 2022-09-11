import React from 'react';
import { useParams } from 'react-router-dom';
import GetData from '../backend/GetData';

const HistoryChart = () => {
  const { id } = useParams();
  const { response } = GetData(
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`
  );

  if (!response === null) {
    return <div>Loading ...</div>;
  }

  const coinChartData = response.prices.map((val) => ({
    x: val[0],
    y: val[1].toFixed(2),
  }));
  console.log(coinChartData);

  return <div>History Chart</div>;
};

export default HistoryChart;
