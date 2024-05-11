import tw from 'tailwind-styled-components';
import MyAutoLogo from '../../assets/icons/MyAutoIcon';

const HeaderContent = tw.header`
    flex
    items-center
    w-full
    h-[80px]
    bg-white
    justify-center
    
`;

const Header = () => {
  return (
    <HeaderContent>
      <div className="flex w-[65.625rem] pl-2 md:pl-0">
        <MyAutoLogo />
      </div>
    </HeaderContent>
  );
};

export default Header;
