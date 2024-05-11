import { useEffect, useState } from 'react';
import DashIcon from '../../assets/icons/DashIcon';
import Switch from '../Switch';
import { useNavigate } from 'react-router-dom';

const PriceInput: React.FC = () => {
  const [fromPrice, setFromPrice] = useState<string>('');
  const [toPrice, setToPrice] = useState<string>('');
  const navigate = useNavigate();

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: 'PriceFrom' | 'PriceTo',
  ) => {
    const value = event.target.value;
    if (type === 'PriceFrom') {
      setFromPrice(value);
    } else {
      setToPrice(value);
    }
  };

  const handleSearch = () => {
    const queryParams = new URLSearchParams();
    if (fromPrice) {
      queryParams.set('PriceFrom', fromPrice);
    }
    if (toPrice) {
      queryParams.set('PriceTo', toPrice);
    }
    navigate({
      search: queryParams.toString(),
    });
  };

  useEffect(() => {
    handleSearch();
  }, [fromPrice, toPrice]);

  return (
    <div className="w-full flex flex-col mt-4 gap-3 pb-11">
      <div className="w-full flex flex-row justify-between">
        <span className="text-gray-300 text-sm leading-[15.69px] font-medium">
          ფასი
        </span>
        <Switch />
      </div>
      <div className="w-fit flex flex-row items-center justify-between gap-1">
        <input
          type="numeric"
          className="font-normal w-[94px] border border-solid border-gray-600 text-sm rounded-[8px] h-[40px] outline-none pl-2"
          placeholder="დან"
          value={fromPrice}
          onChange={(e) => handleInputChange(e, 'PriceFrom')}
        />
        <DashIcon />
        <input
          type="numeric"
          className="font-normal w-[94px] border border-solid border-gray-600 text-sm rounded-[8px] h-[40px] outline-none pl-2"
          placeholder="მდე"
          value={toPrice}
          onChange={(e) => handleInputChange(e, 'PriceTo')}
        />
      </div>
      {/* <button
        type="button"
        className="bg-primary w-full h-8 text-white text-md font-bold leading-[14px] rounded-sm"
        onClick={handleSearch}
      >
        ძებნა
      </button> */}
    </div>
  );
};

export default PriceInput;
