import React from "react";

interface MotoIconProps {
  color?: string;
}

const MotoIcon: React.FC<MotoIconProps> = ({ color="#8C929B" }) => (
    <svg width="62" height="32" viewBox="0 0 62 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill={color} d="M26.448 20.665C26.446 19.8924 26.178 19.1441 25.689 18.546L26.56 17.475C27.0961 18.0582 27.4729 18.7698 27.654 19.541C27.7356 19.9098 27.7772 20.2863 27.778 20.664C27.7753 20.8376 27.8416 21.0052 27.9623 21.1301C28.0831 21.2549 28.2484 21.3268 28.422 21.33H34.502C34.7535 22.0982 35.239 22.7686 35.8904 23.2471C36.5419 23.7257 37.3267 23.9886 38.135 23.999C39.1776 23.9795 40.1701 23.5476 40.8949 22.7979C41.6197 22.0481 42.0178 21.0417 42.002 19.999C42.0181 18.9562 41.62 17.9496 40.8952 17.1998C40.1703 16.45 39.1777 16.0182 38.135 15.999C37.0919 16.0177 36.0988 16.4493 35.3735 17.1991C34.6483 17.949 34.2499 18.9559 34.266 19.999H32.935C32.936 18.948 33.2417 17.9198 33.815 17.039C33.5376 16.4341 33.1165 15.9062 32.5884 15.5013C32.0603 15.0964 31.4412 14.8268 30.785 14.716C30.6959 14.7011 30.6108 14.6677 30.5354 14.6179C30.46 14.5681 30.3958 14.5031 30.347 14.427L28.878 12.151C28.557 11.6469 28.102 11.2422 27.564 10.982C27.564 10.987 27.555 10.989 27.549 10.995C27.2177 10.8274 26.859 10.7207 26.49 10.68V9.39098C26.6749 9.35961 26.8616 9.34024 27.049 9.33298H27.778C27.9503 9.3263 28.1133 9.25316 28.2329 9.1289C28.3524 9.00464 28.4192 8.83891 28.4192 8.66648C28.4192 8.49405 28.3524 8.32832 28.2329 8.20406C28.1133 8.0798 27.9503 8.00665 27.778 7.99998L27.049 7.99998C25.5104 8.04082 24.0494 8.68421 22.9805 9.79162C21.9116 10.899 21.3204 12.3819 21.334 13.921C21.3178 14.4862 21.526 15.0348 21.913 15.447C22.0827 15.6225 22.2862 15.7618 22.5111 15.8567C22.7361 15.9516 22.9779 16 23.222 15.999C23.5879 15.9995 23.9527 16.0397 24.31 16.119C24.7507 16.2245 25.1714 16.4004 25.556 16.64L24.685 17.711C24.2373 17.4665 23.7361 17.3363 23.226 17.332C22.3569 17.3478 21.5296 17.7075 20.9252 18.3322C20.3209 18.957 19.9889 19.7959 20.002 20.665C19.9868 21.0978 20.0588 21.5292 20.2139 21.9336C20.369 22.3379 20.604 22.7069 20.9048 23.0184C21.2056 23.33 21.566 23.5778 21.9647 23.7471C22.3633 23.9163 22.7919 24.0035 23.225 24.0035C23.6581 24.0035 24.0867 23.9163 24.4853 23.7471C24.884 23.5778 25.2444 23.33 25.5452 23.0184C25.846 22.7069 26.081 22.3379 26.2361 21.9336C26.3912 21.5292 26.4633 21.0978 26.448 20.665ZM25.158 20.665C25.1663 20.9241 25.1225 21.1822 25.0291 21.424C24.9357 21.6658 24.7947 21.8863 24.6144 22.0725C24.434 22.2588 24.2181 22.4068 23.9795 22.5079C23.7408 22.6091 23.4842 22.6612 23.225 22.6612C22.9658 22.6612 22.7092 22.6091 22.4706 22.5079C22.2319 22.4068 22.016 22.2588 21.8356 22.0725C21.6553 21.8863 21.5143 21.6658 21.4209 21.424C21.3275 21.1822 21.2837 20.9241 21.292 20.665C21.2837 20.1434 21.4827 19.6399 21.8453 19.2649C22.2079 18.89 22.7045 18.6742 23.226 18.665C23.4412 18.6676 23.6543 18.7072 23.856 18.782L22.722 20.248C22.6146 20.3871 22.5651 20.5623 22.5837 20.7371C22.6023 20.9118 22.6877 21.0726 22.822 21.186C22.8873 21.2408 22.9631 21.2818 23.0447 21.3066C23.1263 21.3313 23.2121 21.3393 23.2969 21.3299C23.3817 21.3206 23.4637 21.2941 23.5379 21.2522C23.6122 21.2103 23.6772 21.1537 23.729 21.086L24.862 19.615C25.0545 19.9314 25.1565 20.2946 25.157 20.665H25.158ZM40.712 19.999C40.7227 20.694 40.4575 21.365 39.9745 21.8649C39.4915 22.3648 38.83 22.6528 38.135 22.666C37.6794 22.6618 37.2331 22.5359 36.8425 22.3013C36.4518 22.0668 36.1309 21.7321 35.913 21.332H37.489C38.0105 21.3225 38.5069 21.1067 38.8694 20.7317C39.232 20.3568 39.431 19.8535 39.423 19.332C39.4264 19.2452 39.4123 19.1586 39.3814 19.0775C39.3506 18.9963 39.3037 18.9222 39.2435 18.8596C39.1833 18.797 39.1111 18.7472 39.0312 18.7131C38.9513 18.6791 38.8653 18.6616 38.7785 18.6616C38.6917 18.6616 38.6057 18.6791 38.5258 18.7131C38.4459 18.7472 38.3737 18.797 38.3135 18.8596C38.2533 18.9222 38.2064 18.9963 38.1756 19.0775C38.1447 19.1586 38.1306 19.2452 38.134 19.332C38.1367 19.5059 38.0703 19.6738 37.9494 19.7988C37.8285 19.9238 37.6629 19.9958 37.489 19.999H35.556C35.5453 19.3036 35.8108 18.6323 36.2942 18.1324C36.7777 17.6324 37.4397 17.3446 38.135 17.332C38.83 17.3451 39.4915 17.6332 39.9745 18.1331C40.4575 18.633 40.7227 19.3039 40.712 19.999ZM38.779 14.664C39.6476 14.6482 40.4746 14.2887 41.0787 13.6644C41.6828 13.04 42.0148 12.2017 42.002 11.333C42.0035 11.2466 41.9879 11.1608 41.9561 11.0805C41.9244 11.0001 41.8771 10.9269 41.817 10.8648C41.7569 10.8028 41.6852 10.7532 41.6059 10.7189C41.5266 10.6846 41.4414 10.6663 41.355 10.665H38.527L34.391 13.207C33.852 13.5326 33.2826 13.8052 32.691 14.021C33.5193 14.4778 34.2139 15.1431 34.706 15.951C34.706 15.962 34.706 15.973 34.716 15.984C35.2653 15.4951 35.9099 15.1254 36.6092 14.8982C37.3085 14.671 38.0473 14.5913 38.779 14.664ZM33.73 12.064L34.759 11.423C34.3582 10.7875 33.804 10.263 33.1475 9.89767C32.4911 9.5323 31.7533 9.33778 31.002 9.33198C30.1495 9.33894 29.3178 9.59589 28.61 10.071C29.1451 10.4193 29.602 10.8749 29.952 11.409L31.052 13.124C31.9987 12.9258 32.9045 12.567 33.73 12.063V12.064Z" />
    </svg>
);

export default MotoIcon;