import { useState, useEffect } from 'react';
import DollarIcon from '../../assets/icons/DollarIcon';
import GelIcon from '../../assets/icons/GelIcon';
import { useNavigate, useLocation } from 'react-router-dom';

const Switch = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const currId = parseInt(urlParams.get('currId') || '3');
    setIsChecked(currId === 1);
  }, [location.search]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);

    const newCurrId = isChecked ? 3 : 1;
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('currId', newCurrId.toString());
    navigate({ search: urlParams.toString() });
  };

  return (
    <>
      <label className="relative inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="sr-only"
        />
        <div className="shadow-card border border-gray-100 flex h-[24px] items-center justify-center rounded-full bg-white">
          <span
            className={`flex h-6 w-6 items-center justify-center rounded-full ${
              !isChecked ? 'bg-gray-300 text-white' : 'text-body-color'
            }`}
          >
            <GelIcon color={`${!isChecked ? 'white' : '#8C929B'}`} />
          </span>
          <span
            className={`flex h-6 w-6 items-center justify-center rounded-full ${
              isChecked ? 'bg-gray-300 text-white' : 'text-body-color'
            }`}
          >
            <DollarIcon color={`${isChecked ? 'white' : '#8C929B'}`} />
          </span>
        </div>
      </label>
    </>
  );
};

export default Switch;
