import styles from './FavouritePage.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setPeople, setFavourites } from '../../store/slice';
import { API_PEOPLE } from '../../constants/constants';
import { getPeopleId, getPeopleImage } from '../../services/getPeopleData';
import { getApiRequest } from '../../utils/networkRequest';
import { getLocalStorage } from '../../utils/localStorage';

interface Person {
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

interface PeopleApiResponse {
  results: Person[];
  previous: string | null;
  next: string | null;
}

interface FavouritesState {
  favoriteIds: string[];
  people: Person[];
}

const FavouritePage: React.FC = () => {
  const dispatch = useDispatch();

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

  return (
    <>
      <h1>FavouritePage</h1>
      {favouritePeople.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        <ul>
          {favouritePeople.map((url) => {
            const person = allPeople.find((p) => p.url === url);
            if (person) {
              const personId = getPeopleId(person.url);
              const personImg = getPeopleImage(personId);
              return (
                <li key={url}>
                  <img
                    src={personImg}
                    alt={person.name}
                    className={styles.personImg}
                  />
                  <span>{person.name}</span>
                </li>
              );
            }
            return (
              <li key={url}>
                <span>Person not found</span>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default FavouritePage;
