import tw from 'tailwind-styled-components'

export const BreadcrumbsArea = tw.ol`
  flex
  flex-row
  gap-1
  w-[65.625rem]
`

export interface BreadcrumbsListProps {
  last?: string
}

export const BreadcrumbsList = tw.li<BreadcrumbsListProps>`
  flex
  flex-row
  items-center
  text-sm
  text-gray-200
  gap-1
  font-normal
  cursor-pointer
  ${(props) => props.last === 'true' && 'text-orange-500'}; // Adjust the condition
`
