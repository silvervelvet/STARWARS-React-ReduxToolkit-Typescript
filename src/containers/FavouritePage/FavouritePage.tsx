import classNames from 'classnames';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PeopleList from '../../components/PeoplePage/PeopleList/PeopleList';
import { API_PEOPLE } from '../../constants/constants';
import { useTheme } from '../../context/ThemeContext';
import { getPeopleId, getPeopleImage } from '../../services/getPeopleData';
import { setPeople, setFavourites } from '../../store/slice';
import { getLocalStorage } from '../../utils/localStorage';
import { getApiRequest } from '../../utils/networkRequest';

import styles from './FavouritePage.module.css';

interface ApiPerson {
  url: string;
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  films: string[];
}

interface ListPerson {
  id: string;
  name: string;
  img: string;
}

interface PeopleApiResponse {
  results: ApiPerson[];
  previous: string | null;
  next: string | null;
}

interface FavouritesState {
  favoriteIds: string[];
  people: ApiPerson[];
}

const FavouritePage: React.FC = () => {
  const dispatch = useDispatch();
  const { theme } = useTheme();

  const favouritePeople = useSelector(
    (state: { favourites: FavouritesState }) => state.favourites.favoriteIds
  );
  const allPeople = useSelector(
    (state: { favourites: FavouritesState }) => state.favourites.people
  );

  useEffect(() => {
    (async () => {
      const data = await getApiRequest(API_PEOPLE);

      if ('results' in data && 'previous' in data && 'next' in data) {
        const peopleData = data as PeopleApiResponse;
        dispatch(setPeople(peopleData.results));
      }
    })();
  }, [dispatch]);

  useEffect(() => {
    const savedFavourites = getLocalStorage('favouritePeople');
    if (Array.isArray(savedFavourites)) {
      dispatch(setFavourites(savedFavourites));
    }
  }, [dispatch]);

  const peopleToShow: ListPerson[] = favouritePeople
    .map((url) => allPeople.find((p) => p.url === url))
    .filter((person): person is ApiPerson => person !== undefined)
    .map((person) => ({
      id: getPeopleId(person.url),
      name: person.name,
      img: getPeopleImage(getPeopleId(person.url)),
    }));

  return (
    <section className={styles.wrapper}>
      <div
        className={classNames(styles.title, {
          [styles.title_LightTheme]: theme === 'light',
          [styles.title_DarkTheme]: theme === 'dark',
        })}
      >
        Favourites
      </div>
      {favouritePeople.length === 0 ? (
        <div className={styles.no_favorites_title}>
          No favorites added yet :(
        </div>
      ) : (
        <PeopleList people={peopleToShow} />
      )}
    </section>
  );
};

export default FavouritePage;
