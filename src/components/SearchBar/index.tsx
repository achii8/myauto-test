import { useSelector } from 'react-redux';
import PriceInput from '../PriceInput';
import SelectBox from '../SelectBox';
import Tabs from '../Tabs';
import { SearchBarArea } from './style';
import { RootState } from '../../lib/redux/store';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { filterManufactorerArray } from './helpers';
import { typeArray } from '../../dummy/constants';

interface ISearchBarProps {
  refetchProducts: () => void;
  totalCount: number | string;
}

const SearchBar = ({ refetchProducts, totalCount }: ISearchBarProps) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const currentTab = searchParams.get('vehicleType') || '1';
  const [filteredManufacturers, setFilteredManufacturers] = useState<
    { value: string; label: string }[]
  >([]);

  const manufacturersArray = useSelector(
    (state: RootState) => state.manufactorer.manufacturersArray,
  );

  const categoriesArray = useSelector(
    (state: RootState) => state.categories.categoriesArray,
  );

  useEffect(() => {
    setFilteredManufacturers(
      filterManufactorerArray(currentTab, manufacturersArray),
    );
  }, [currentTab, manufacturersArray]);

  return (
    <SearchBarArea>
      <Tabs />
      <div className="flex flex-col items-center justify-center w-full pt-[22px] border-b border-b-gray-100 bg-[#A4AEC1]/10">
        <div className="flex flex-col w-[12.625rem] gap-[20px] ">
          <SelectBox id="ForRent" label="გარიგების ტიპი" options={typeArray} />
          <SelectBox
            id="Mans"
            label="მწარმოებელი"
            name="ყველა მწარმოებელი"
            options={filteredManufacturers}
          />
          <SelectBox id="Cats" label="კატეგორია" options={categoriesArray} />
        </div>
        <div className="w-[12.625rem]">
          <PriceInput />
        </div>
        <div className="flex w-full justify-center items-center py-4 pb-5 shadow-sm">
          <button
            type="button"
            className="bg-primary w-[12.625rem]  h-8 text-white text-md font-bold leading-[14px] rounded-sm"
            onClick={refetchProducts}
          >
            ძებნა {totalCount}
          </button>
        </div>
      </div>
    </SearchBarArea>
  );
};

export default SearchBar;
