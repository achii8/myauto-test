import { ISelectBox } from '../components/SelectBox'

export const breadCrumbsList: string[] = ['მთავარი', 'ძიება', 'იყიდება']
export const dateSortArray: ISelectBox[] = [
  { label: 'თარიღი კლებადი', value: '1' },
  { label: 'თარიღი ზრდადი', value: '2' },
  { label: 'ფასი კლებადი', value: '3' },
  { label: 'ფასი ზრდადი', value: '4' },
  { label: 'გარბენი კლებადი', value: '5' },
  { label: 'გარბენი ზრდადი', value: '6' },
]

export const typeArray: ISelectBox[] = [
  { value: '0', label: 'იყიდება' },
  { value: '1', label: 'ქირავდება' },
]
export const timeSortArray: ISelectBox[] = [
  { label: '1 საათი', value: '1h' },
  { label: '3 საათი', value: '3h' },
  { label: '6 საათი', value: '6h' },
  { label: '9 საათი', value: '9h' },
  { label: '12 საათი', value: '12h' },
]
