import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Tab } from './style';
import CarIcon from '../../assets/icons/CarIcon';
import TractorIcon from '../../assets/icons/TractorIcon';
import MotoIcon from '../../assets/icons/MotoIcon';

const Tabs = () => {
  const [selected, setSelected] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tabParam = parseInt(searchParams.get('vehicleType') || '1', 10);
    setSelected(tabParam);
  }, [location.search]);

  const isTabSelected = (tabId: number) => {
    return tabId === selected;
  };

  const handleTabClick = (tabId: number) => {
    setSelected(tabId);
    const searchParams = new URLSearchParams('');
    searchParams.set('vehicleType', String(tabId));
    navigate({ search: searchParams.toString() });
  };

  return (
    <div className="w-full grid grid-cols-3">
      <Tab
        className={isTabSelected(0) ? 'border-b-orange-500 bg-white' : ''}
        onClick={() => handleTabClick(0)}
      >
        <CarIcon color={isTabSelected(0) ? '#FD4100' : '#8C929B'} />
      </Tab>
      <Tab
        className={isTabSelected(1) ? 'border-b-orange-500 bg-white' : ''}
        onClick={() => handleTabClick(1)}
      >
        <TractorIcon color={isTabSelected(1) ? '#FD4100' : '#8C929B'} />
      </Tab>
      <Tab
        className={isTabSelected(2) ? 'border-b-orange-500 bg-white' : ''}
        onClick={() => handleTabClick(2)}
      >
        <MotoIcon color={isTabSelected(2) ? '#FD4100' : '#8C929B'} />
      </Tab>
    </div>
  );
};

export default Tabs;
