import CarCard from '../../components/CarCard';
import SearchBar from '../../components/SearchBar';
import SortItemsArea from '../../components/SortItemsArea';
import { getProducts } from '../../lib/api/lists';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { Car } from '../../lib/types/car';
import { useLocation } from 'react-router-dom';
import LayoutWrapper from '../../layout';
import CarCardMobile from '../../components/CarCardMobile';
import { useMediaQuery } from 'react-responsive';
import Modal from '../../components/Modal';
import useNumberFormat from '../../lib/hooks/useNumberFormat';

const SearchResultPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isSearchBarModalOpen, setIsSearchBarModalOpen] = useState(false);

  const handleSearchBarModalOpen = () => {
    setIsSearchBarModalOpen(true);
  };

  const handleSearchBarModalClose = () => {
    setIsSearchBarModalOpen(false);
  };

  const {
    data: carData,
    refetch: refetchProducts,
    error,
    isLoading,
  } = useQuery('cars', () => getProducts(searchParams));

  const total = carData?.data?.meta?.total || 0;
  const { formatNumber } = useNumberFormat(total);

  if (isLoading) {
    return <div>loading..</div>;
  }

  return (
    <LayoutWrapper>
      <div className="flex flex-row gap-5 justify-center">
        {!isMobile && (
          <SearchBar
            refetchProducts={refetchProducts}
            totalCount={formatNumber}
          />
        )}
        {isSearchBarModalOpen && (
          <Modal
            onClose={handleSearchBarModalClose}
            isOpen={isSearchBarModalOpen}
          >
            <SearchBar
              refetchProducts={refetchProducts}
              totalCount={formatNumber}
            />
          </Modal>
        )}
        <div className="flex flex-col w-[48.75rem]">
          <SortItemsArea
            handleSearchBarModalOpen={handleSearchBarModalOpen}
            totalCount={formatNumber}
            refetch={refetchProducts}
          />
          <div className={`flex flex-col gap-[10px] mt-4`}>
            {carData?.data?.items?.map((car: Car) => {
              return isMobile ? (
                <CarCardMobile car={car} key={car.car_id.toString()} />
              ) : (
                <CarCard car={car} key={car.car_id.toString()} />
              );
            })}
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default SearchResultPage;
