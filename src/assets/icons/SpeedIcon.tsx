import React from 'react'

interface SpeedIconProps {
  color?: string
}

const SpeedIcon: React.FC<SpeedIconProps> = ({ color = '#8C929B' }) => (
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
      d="M12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8"
      stroke="#9CA2AA"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path
      d="M9 7L10.5 5.5"
      stroke="#9CA2AA"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SpeedIcon
