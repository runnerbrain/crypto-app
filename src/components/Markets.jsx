import GetData from '../backend/GetData';
import Coin from './Coin';

const Markets = () => {
  const { response } = GetData(
    'coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  );
  //   console.log(response[0].id);
  //   //   return response && response.map((coin) => coin.id);
  //   //   return <div>coin</div>;
  return (
    <div>
      {response && response.map((coin) => <Coin key={coin.id} coin={coin} />)}
    </div>
  );
};

export default Markets;
