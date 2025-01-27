const ImageLoadIcon = () => (
  <svg
    className="animate-spin h-10 w-10 text-gray-500"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.373A8 8 0 0112 4v4a4 4 0 00-4 4H6zm2 2a8 8 0 01-2-5.373H0a12 12 0 008 10.986V18z"
    ></path>
  </svg>
)

export default ImageLoadIcon
