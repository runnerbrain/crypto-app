import { useParams } from 'react-router-dom';
import GetData from '../backend/GetData';

const CoinDetail = () => {
  const { id } = useParams();
  const { response } = GetData(
    `coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=true&sparkline=false`
  );
  console.log(response);

  if (!response) return <div>Loading...</div>;
  return (
    <div className="my-6">
      <div className="flex gap-2 items-center">
        <img src={response.image.small} alt={response.name} />
        <h1>{response.name}</h1>
      </div>
      <p
        className="mt-6 text-gray-600 [&>a]:text-blue-600 [&>a]:underline"
        dangerouslySetInnerHTML={{ __html: response.description.en }}
      ></p>
    </div>
  );
};

export default CoinDetail;
