import { Manufacturer } from '../../lib/types/manufactorer'

export const filterManufactorerArray = (
  currentTab: string,
  manufacturersArray: Manufacturer[],
) => {
  let filteredOptions: { value: string; label: string }[] = []
  switch (currentTab) {
    case '2':
      filteredOptions = manufacturersArray
        .filter((manufacturer) => manufacturer.is_moto === '1')
        .map((manufacturer) => ({
          value: manufacturer.man_id,
          label: manufacturer.man_name,
        }))
      break
    case '3':
      filteredOptions = manufacturersArray
        .filter((manufacturer) => manufacturer.is_spec === '1')
        .map((manufacturer) => ({
          value: manufacturer.man_id,
          label: manufacturer.man_name,
        }))
      break
    default:
      filteredOptions = manufacturersArray
        .filter((manufacturer) => manufacturer.is_car === '1')
        .map((manufacturer) => ({
          value: manufacturer.man_id,
          label: manufacturer.man_name,
        }))
      break
  }
  return filteredOptions
}
