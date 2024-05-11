import tw from 'tailwind-styled-components'

export const Tab = tw.div`
    cursor-pointer
    w-full
    flex
    items-center
    justify-center
    border-gray-100
    border-b
    border-r
    border-solid
    py-2
    last:border-r-none
    bg-gray-50
    first:rounded-tl-md
    last:rounded-tr-md
`
