import { useMediaQuery } from 'react-responsive';
import Breadcrumbs from '../components/Breadcrumbs';
import Header from '../components/Header';

interface ILayoutWrapperProps {
  children: JSX.Element | JSX.Element[];
}

const LayoutWrapper = ({ children }: ILayoutWrapperProps) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="bg-[#F2F3F6] min-h-[100vh]">
      <Header />
      {!isMobile && <Breadcrumbs />}
      {children}
    </div>
  );
};
export default LayoutWrapper;
