import GetData from '../backend/GetData';
import Coin from './Coin';

const Markets = () => {
  const { response } = GetData(
    'coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  );
  return (
    <div>
      <h1>Markets</h1>
      <div className="grid grid-cols-4 md:grid-cols-4 bg-slate-300 rounded-sm">
        <div className="pl-4">
          <span>Coin</span>
        </div>
        <span className="text-center">Current Price</span>
        <span>Price change %</span>
        <span>Market Cap</span>
      </div>
      {response && response.map((coin) => <Coin key={coin.id} coin={coin} />)}
    </div>
  );
};

export default Markets;
