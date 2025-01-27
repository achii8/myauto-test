import React from 'react'

interface SacheIconProps {
  color?: string
}

const SacheIcon: React.FC<SacheIconProps> = ({ color = '#8C929B' }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="8" r="6.3" stroke="#9CA2AA" strokeWidth="1.4" />
    <circle cx="8" cy="8" r="1.3" stroke="#9CA2AA" strokeWidth="1.4" />
    <path
      d="M9.5 8L13.5 6.5"
      stroke="#9CA2AA"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.21387 7.99979L1.99977 7.29883"
      stroke="#9CA2AA"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 9.5V14"
      stroke="#9CA2AA"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SacheIcon
