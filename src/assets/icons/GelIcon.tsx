import React from 'react'

interface GelIconProps {
  color?: string
}

const GelIcon: React.FC<GelIconProps> = ({ color = '#8C929B' }) => (
  <svg
    width="10"
    height="11"
    viewBox="0 0 10 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill={color}
      d="M4.98466 2.55309C4.83129 2.55309 4.64213 2.57119 4.41718 2.60741V6.15185H3.52761V2.82469C2.91411 3.10535 2.47444 3.52634 2.20859 4.08766C1.95297 4.63992 1.82515 5.32798 1.82515 6.15185C1.82515 6.82181 1.96319 7.42387 2.23926 7.95802C2.51534 8.48313 2.91411 8.89959 3.43558 9.20741C3.95705 9.51523 4.58078 9.66914 5.30675 9.66914H8.92638V11H0.644172V9.72346H2.14724V9.66914C1.66667 9.43374 1.26278 9.10782 0.935583 8.69136C0.618609 8.2749 0.383436 7.82222 0.230061 7.33333C0.0766871 6.83539 0 6.35103 0 5.88025C0 5.20123 0.143149 4.56296 0.429448 3.96543C0.715746 3.35885 1.12474 2.83827 1.65644 2.4037C2.19836 1.96914 2.82209 1.66584 3.52761 1.49383V0H4.41718V1.33086C4.64213 1.31276 4.83129 1.3037 4.98466 1.3037C5.10736 1.3037 5.30164 1.31276 5.56749 1.33086V0H6.45706V1.49383C7.18303 1.6749 7.81186 1.9963 8.34356 2.45803C8.88548 2.9107 9.29448 3.45844 9.57055 4.10123C9.85685 4.74403 10 5.42757 10 6.15185H8.17485C8.17485 5.32798 8.04192 4.63992 7.77607 4.08766C7.51023 3.52634 7.07055 3.10535 6.45706 2.82469V6.15185H5.56749V2.60741C5.38344 2.57119 5.18916 2.55309 4.98466 2.55309Z"
    />
  </svg>
)

export default GelIcon