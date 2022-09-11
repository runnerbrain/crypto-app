import React from 'react';
import HistoryChart from './../components/HistoryChart';
import CoinDetail from './../components/CoinDetail';

const CryptoDetails = () => {
  return (
    <div className="wrapper-container">
      <HistoryChart />
      <CoinDetail />
    </div>
  );
};

export default CryptoDetails;
