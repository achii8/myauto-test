import { useMediaQuery } from 'react-responsive';
import { dateSortArray, timeSortArray } from '../../dummy/constants';
import SelectBox from '../SelectBox';
import SearchIcon from '../../assets/icons/SearchIcon';

const SortItemsArea = ({
  handleSearchBarModalOpen,
  totalCount,
  refetch,
}: {
  handleSearchBarModalOpen: () => void;
  totalCount: number | string;
  refetch: () => void;
}) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center pt-2 md:pt-0">
        {isMobile ? (
          <button
            onClick={handleSearchBarModalOpen}
            className="text-black pl-4"
          >
            <SearchIcon />
          </button>
        ) : (
          <span className="font-helvetica-neue-lt-geo font-normal text-base leading-4 text-gray-300">
            {totalCount} განცხადება
          </span>
        )}
        <div className="flex flex-row gap-2">
          <SelectBox
            id="Period"
            name="დროის ფილტრი"
            options={timeSortArray}
            refetch={refetch}
          />
          <SelectBox
            id="SortOrder"
            name="თარიღის ფილტრი"
            options={dateSortArray}
            refetch={refetch}
          />
        </div>
      </div>
    </div>
  );
};

export default SortItemsArea;
