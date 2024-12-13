import { useDispatch, useSelector } from 'react-redux';
import styles from './PersonImg.module.css';
import { addPerson, removePerson } from '../../../store/slice';
import { PersonImgProps } from '../../../containers/PersonPage/PersonPage';
import UIButton from '../../UI-Kit/UIButton/UIButton';
import { useTheme } from '../../../context/ThemeContext';

const PersonImg: React.FC<PersonImgProps> = ({
  personId,
  personImg,
  personName,
}) => {
  const dispatch = useDispatch();
  const favourites = useSelector(
    (state: { favourites: { favoriteIds: string[] } }) =>
      state.favourites.favoriteIds
  );
  const { theme } = useTheme();

  const isFavourite = favourites.includes(personId);

  const handleToggleFavourite = () => {
    if (isFavourite) {
      dispatch(removePerson(personId));
    } else {
      dispatch(addPerson(personId));
    }
  };

  return (
    <>
      <img src={personImg} alt={personName} />
      <UIButton
        text={isFavourite ? 'Remove from Favourite' : 'Add to Favourite'}
        onClick={handleToggleFavourite}
        disabled={false}
        theme={theme}
        classes={
          theme === 'light'
            ? styles.linkBackLightButton
            : styles.linkBackDarkButton
        }
      />
    </>
  );
};

export default PersonImg;
