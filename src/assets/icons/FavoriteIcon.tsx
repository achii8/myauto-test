import React from 'react'

interface FavoriteIconProps {
  color?: string
}

const FavoriteIcon: React.FC<FavoriteIconProps> = ({ color = '#8C929B' }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.68574 2.1679C8.51267 2.29346 8.3477 2.43458 8.19095 2.5894L8.0626 2.72088L8 2.78989L7.9374 2.72088L7.80905 2.5894C7.6523 2.43458 7.48733 2.29346 7.31426 2.1679C6.73288 1.74614 6.06008 1.5 5.3 1.5C2.58473 1.5 1 3.87655 1 6.304C1 8.67851 2.19139 10.7406 4.13701 12.4002C5.50533 13.5673 7.2954 14.5 8 14.5C8.705 14.5 10.495 13.5674 11.8633 12.4002C13.8088 10.7406 15 8.67852 15 6.304C15 3.87655 13.4153 1.5 10.7 1.5C9.93992 1.5 9.26711 1.74614 8.68574 2.1679ZM6.67538 3.71857C6.23895 3.2911 5.78989 3.1 5.3 3.1C3.75142 3.1 2.6 4.44771 2.6 6.304C2.6 8.08759 3.48098 9.73759 5.17536 11.1829C5.76665 11.6872 6.46051 12.1489 7.07374 12.4778C7.37967 12.6419 7.64224 12.7605 7.84224 12.8338C7.91231 12.8595 7.96436 12.8758 8.00009 12.886C8.03585 12.8758 8.08795 12.8595 8.1581 12.8338C8.35812 12.7605 8.62069 12.6419 8.92662 12.4778C9.53983 12.1489 10.2337 11.6873 10.825 11.1829C12.5191 9.73772 13.4 8.08768 13.4 6.304C13.4 4.44771 12.2486 3.1 10.7 3.1C10.2101 3.1 9.76105 3.29109 9.32462 3.71857L9.228 3.81755L8 5.17143L6.77199 3.81755L6.67538 3.71857Z"
      fill="#6F7383"
    />
  </svg>
)

export default FavoriteIcon