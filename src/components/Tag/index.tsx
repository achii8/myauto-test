interface ITagProps {
  icon: JSX.Element
  name: string
}

const Tag = ({ icon, name }: ITagProps) => {
  return (
    <div className="flex flex-row items-center gap-1 rounded-full bg-green-100 pl-[6px] pr-2 py-[5px]">
      {icon}
      <span className="text-gray-450 rounded-full text-xs">{name}</span>
    </div>
  )
}

export default Tag
