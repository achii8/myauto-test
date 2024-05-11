import ArrowRightIcon from '../../assets/icons/ArrowRightIcon';
import { breadCrumbsList } from '../../dummy/constants';
import { BreadcrumbsArea, BreadcrumbsList } from './style';

const Breadcrumbs = () => {
  return (
    <nav className="w-full pt-8 pb-5 flex justify-center">
      <BreadcrumbsArea>
        {breadCrumbsList?.map((listItem, index) => {
          const isLastItem = index === breadCrumbsList.length - 1;
          return (
            <BreadcrumbsList key={index} last={isLastItem.toString()}>
              {listItem}
              {!isLastItem && <ArrowRightIcon />}
            </BreadcrumbsList>
          );
        })}
      </BreadcrumbsArea>
    </nav>
  );
};

export default Breadcrumbs;
