import { useSelector } from 'react-redux';
import CompareIcon from '../../assets/icons/CompareIcon';
import DotIcon from '../../assets/icons/DotIcon';
import EngineIcon from '../../assets/icons/EngineIcon';
import FavoriteIcon from '../../assets/icons/FavoriteIcon';
import MotorIcon from '../../assets/icons/MotorIcon';
import NoteIcon from '../../assets/icons/NoteIcon';
import SacheIcon from '../../assets/icons/SacheIcon';
import SpeedIcon from '../../assets/icons/SpeedIcon';
import { Car } from '../../lib/types/car';
import { RootState } from '../../lib/redux/store';
import LazyImage from '../Image';
import GelIcon from '../../assets/icons/GelIcon';
import GeoFlagIcon from '../../assets/icons/GeoFlagIcon';
import CheckIcon from '../../assets/icons/CheckIcon';
import { useLocation } from 'react-router-dom';
import DollarIcon from '../../assets/icons/DollarIcon';
import { getFuelType, getGearType } from './helper';

interface ICarCardProps {
  car: Car;
}

const CarCard = ({ car }: ICarCardProps) => {
  const location = useLocation();
  const currency = new URLSearchParams(location.search).get('currId');
  // const usd = useNumberFormat(car.price_usd).formatNumber;
  // const gel = useNumberFormat(car.price_value).formatNumber;

  const cars = useSelector(
    (state: RootState) => state.manufactorer.manufacturersById,
  );
  const models = useSelector(
    (state: RootState) => state.manufactorer.modelsByManufacturer,
  );

  const modelName = models[car.man_id][car.model_id].model_name;

  const getPrice = () => {
    if (car.price_value === 0) {
      return 'შეთანხმებით';
    }
    return currency === '3' ? car.price_value : car.price_usd;
  };

  return (
    <div className="flex flex-col bg-white p-4 rounded-lg">
      <div className="flex flex-row w-full gap-4">
        <div className="h-[8.75rem] w-[11.125rem] rounded-custom">
          <LazyImage
            imageUrl={`https://static.my.ge/myauto/photos/${car.photo}/thumbs/${car.car_id}_1.jpg?v=${car.photo_ver}`}
            alt={car.car_id.toString()}
          />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-2 font-medium text-md leading-[16.9px] font-helvetica-neue-lt-geo">
              <h2 className="text-gray-300">
                {cars[car.man_id].man_name} {modelName}
              </h2>
              <h3 className="text-gray-150">{car.prod_year} წ</h3>
            </div>
            <div className="flex flex-row gap-4">
              <div className="flex flex-row gap-1 text-red-200 items-center leading-[13px] text-xxs">
                {car.customs_passed ? (
                  <div className="flex flex-row gap-1">
                    <CheckIcon />
                    <span className="text-greenPrimary">განბაჟებული</span>
                  </div>
                ) : (
                  <>
                    <span>განბაჟება</span>
                    <span>2,176 ₾</span>
                  </>
                )}
              </div>
              <div className="flex flex-row gap-2">
                <GeoFlagIcon />
                <span className="text-gray-200 leading-[13.8px] text-xs font-helvetica-neue-lt-geo">
                  რუსთავის ავტო.
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between pt-6">
            <div className="grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-[15px]">
              <div className="flex flex-row gap-3 items-center">
                <MotorIcon />
                <div className="text-gray-500 leading-3 text-xs font-medium">
                  {getFuelType(car.fuel_type_id)}
                </div>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <SpeedIcon />
                <div className="text-gray-500 leading-3 text-xs font-medium">
                  {car.car_run_km} კმ
                </div>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <EngineIcon />
                <div className="text-gray-500 leading-3 text-xs font-medium">
                  {getGearType(car.gear_type_id)}
                </div>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <SacheIcon />
                <div className="text-gray-500 leading-3 text-xs font-medium">
                  {car.right_wheel ? 'მარჯვენა' : 'მარცხენა'}
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center gap-1">
              {getPrice()}
              {!(car.price_value === 0) && (
                <div className="px-[6px] bg-gray-100 rounded-full py-[6px]">
                  {currency === '3' ? (
                    <GelIcon color="black" />
                  ) : (
                    <DollarIcon color="black" />
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-row justify-between pt-[32.5px] ">
            <div className="flex flex-row items-center gap-1 text-gray-200 leading-[14.24px] font-normal text-xs">
              <span>{car.views} ნახვა</span>
              <DotIcon />
              <span>2 დღის წინ</span>
            </div>
            <div className="flex flex-row gap-4">
              <NoteIcon />
              <CompareIcon />
              <FavoriteIcon />
            </div>
          </div>
        </div>
      </div>
      {/* extra data goes here */}
      {/* <div className="flex flex-row justify-between border-t border-t-solid border-t-gray-350 mt-4">
        <div className="flex flex-row mt-[10px] gap-2">
          <Tag icon={<ASAPIcon />} name="სასწრაფოდ" />
          <Tag icon={<PerfectIcon />} name="იდიალურ მდგომარეობაში" />
          <Tag icon={<HistoryIcon />} name="სუფთა ისტორია" />
        </div>
      </div> */}
    </div>
  );
};
export default CarCard;
