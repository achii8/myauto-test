import React from 'react'

interface DotIconProps {
  color?: string
}

const DotIcon: React.FC<DotIconProps> = ({ color = '#8C929B' }) => (
  <svg
    width="3"
    height="4"
    viewBox="0 0 3 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="1.5" cy="2" r="1.5" fill={color} />
  </svg>
)

export default DotIcon