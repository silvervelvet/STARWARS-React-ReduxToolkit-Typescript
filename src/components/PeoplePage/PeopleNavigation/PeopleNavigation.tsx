import styles from './PeopleNavigation.module.css';

import UIButton from '../../UI-Kit/UIButton';

const PeopleNavigation = ({ onPrevious, onNext, switchBack, switchNext }) => {
  return (
    <div>
      <UIButton text={'Previous'} onClick={onPrevious} disabled={!switchBack} />
      <UIButton text={'Next'} onClick={onNext} disabled={!switchNext} />
    </div>
  );
};

export default PeopleNavigation;
