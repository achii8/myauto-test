import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
export interface ISelectBox {
  value: string;
  label: string;
}

interface SelectBoxProps {
  id: string;
  label?: string;
  options: ISelectBox[];
  name?: string;
  refetch?: () => void;
}

const SelectBox: React.FC<SelectBoxProps> = ({
  id,
  label,
  options,
  name,
  refetch,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;
    const searchParams = new URLSearchParams(location.search);
    if (selectedOption) {
      searchParams.set(id, selectedOption);
    } else {
      searchParams.delete(id);
    }
    const searchString = searchParams.toString();
    const newUrl = `${location.pathname}${searchString ? `?${searchString}` : ''}`;
    navigate(newUrl);
    if (refetch) {
      refetch();
    }
  };

  const selected = new URLSearchParams(location.search).get(id);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const selectedOption = searchParams.get(id);
    if (selectedOption) {
      handleSelectChange({ target: { value: selectedOption } } as any);
    }
  }, []);

  return (
    <div className="flex flex-col w-full">
      {label && (
        <label htmlFor={id} className="w-full text-xs text-gray-300">
          {label}
        </label>
      )}
      <div className="border border-gray-400 w-full rounded-sm mt-[8px]">
        <select
          id={id}
          onChange={handleSelectChange}
          className="h-[2.5rem] text-sm text-gray-500 placeholder:text-gray-200 w-full pr-[20px] bg-white items-center rounded-sm justify-center px-[12px] outline-none bg-white"
          value={selected ? selected : ''}
        >
          <option value="" className="w-full bg-green-100">
            {name || label}
          </option>
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="w-full bg-white bg-green-100"
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectBox;
