import { useSelector } from 'react-redux';
import { Car } from '../../lib/types/car';
import { RootState } from '../../lib/redux/store';
import GelIcon from '../../assets/icons/GelIcon';
import LazyImage from '../Image';
import FireIcon from '../../assets/icons/FireIcon';
import DotIcon from '../../assets/icons/DotIcon';
import CompareIcon from '../../assets/icons/CompareIcon';
import NoteIcon from '../../assets/icons/NoteIcon';
import CheckIcon from '../../assets/icons/CheckIcon';

interface ICarCardProps {
  car: Car;
}

const CarCardMobile = ({ car }: ICarCardProps) => {
  const cars = useSelector(
    (state: RootState) => state.manufactorer.manufacturersById,
  );
  const models = useSelector(
    (state: RootState) => state.manufactorer.modelsByManufacturer,
  );

  const modelName = models[car.man_id][car.model_id].model_name;

  return (
    <div className="flex flex-col">
      <div className="flex flex-col  bg-white p-[18px]">
        <div className="flex flex-row gap-2  font-normal text-md leading-[16.9px] font-helvetica-neue-lt-geo">
          <h2 className="text-gray-300 text-md ">
            {cars[car.man_id].man_name} {modelName}
          </h2>
          <h3 className="text-gray-150">{car.prod_year} წ</h3>
        </div>
        <div className="flex flex-row justify-between items-center mt-[10px]">
          <div className="flex items-center flex-row gap-1">
            <span>108,122</span>
            <div className="px-[6px] bg-gray-100 rounded-full py-[6px]">
              <GelIcon color="black" />
            </div>
          </div>
          {car.customs_passed ? (
            <div className="flex flex-row px-2 py-1 bg-[#EEFBF1] text-[#1EB676] rounded-sm text-[10px]">
              <CheckIcon />
              განბაჟებული
            </div>
          ) : (
            <>
              <div className="flex flex-row px-2 py-1 bg-red-300 text-red-200 rounded-sm text-[10px] gap-1">
                განბაჟება <span> 2,176 ₾</span>
              </div>
            </>
          )}
        </div>
        <div className="flex w-full h-[16rem] mt-[12px]">
          <LazyImage
            imageUrl={`https://static.my.ge/myauto/photos/${car.photo}/thumbs/${car.car_id}_1.jpg?v=${car.photo_ver}`}
            alt={car.car_id.toString()}
          />
        </div>
        <div className="w-full grid grid-cols-2 mt-[14px]">
          <div className="flex flex-col">
            <div className="mt-[6px] text-gray-450 text-xs">173 000 კმ</div>
            <div className="mt-[6px] text-gray-450 text-xs">3.0 ბენზინი</div>
            <div className="mt-[6px] text-gray-450 text-xs">ავტომატიკა</div>
          </div>
          <div className="flex flex-col">
            <div className="mt-[6px] text-gray-450 text-xs">სედანი</div>
            <div className="mt-[6px] text-gray-450 text-xs">საჭე მარცხნივ</div>
            <div className="mt-[6px] text-gray-450 text-xs">თბილისი</div>
          </div>
        </div>
      </div>
      <div className="bg-white border-t-[0.5px] border-t border-t-black border-t-[#E4E7EB]">
        <div className="flex flex-row p-[18px] justify-between ">
          <div className="flex flex-row items-center gap-2 text-gray-250 font-normal leading-[13.06px] text-xxs">
            <FireIcon />
            <span>589 ნახვა</span>
            <DotIcon />
            <span>2 დღის წინ</span>
          </div>
          <div className="flex flex-row items-center gap-[10px]">
            <CompareIcon />
            <NoteIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCardMobile;
