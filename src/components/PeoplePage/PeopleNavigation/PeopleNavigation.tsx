import styles from './PeopleNavigation.module.css';

import UIButton from '../../UI-Kit/UIButton';

interface PeopleNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  switchBack: boolean;
  switchNext: boolean;
}

const PeopleNavigation: React.FC<PeopleNavigationProps> = ({
  onPrevious,
  onNext,
  switchBack,
  switchNext,
}) => {
  return (
    <div>
      <UIButton text={'Previous'} onClick={onPrevious} disabled={!switchBack} />
      <UIButton text={'Next'} onClick={onNext} disabled={!switchNext} />
    </div>
  );
};

export default PeopleNavigation;
