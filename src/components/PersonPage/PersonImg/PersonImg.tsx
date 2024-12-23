import { useDispatch, useSelector } from 'react-redux';

import { PersonImgProps } from '../../../containers/PersonPage/PersonPage';
import { addPerson, removePerson } from '../../../store/slice';

import iconFavoriteFill from './img/favorite-fill.svg';
import iconFavorite from './img/favorite.svg';
import styles from './PersonImg.module.css';

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

  const isFavourite = favourites.includes(personId);

  const handleToggleFavourite = () => {
    if (isFavourite) {
      dispatch(removePerson(personId));
    } else {
      dispatch(addPerson(personId));
    }
  };

  return (
    <section className={styles.img_container}>
      <img className={styles.personImage} src={personImg} alt={personName} />
      <img
        src={isFavourite ? iconFavoriteFill : iconFavorite}
        onClick={handleToggleFavourite}
        className={styles.iconFavorite}
        alt={isFavourite ? 'iconFavoriteFill' : 'iconFavorite'}
      />
    </section>
  );
};

export default PersonImg;
