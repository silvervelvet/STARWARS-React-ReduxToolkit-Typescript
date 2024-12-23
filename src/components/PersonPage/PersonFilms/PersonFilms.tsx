import { useState, useEffect } from 'react';

import { makeConcurrentRequest } from '../../../utils/networkRequest';

import styles from './PersonFilms.module.css';

interface Film {
  title: string;
  episode_id: number;
}

interface PersonFilmsProps {
  personFilms: string[];
}

const PersonFilms: React.FC<PersonFilmsProps> = ({ personFilms }) => {
  const [films, setFilms] = useState<Film[]>([]);

  useEffect(() => {
    (async () => {
      const response = await makeConcurrentRequest(personFilms);

      setFilms(response);
    })();
  }, []);

  return (
    <>
      <ul>
        {films
          .sort((a, b) => a.episode_id - b.episode_id)
          .map(({ title, episode_id }) => (
            <li className={styles.list__item} key={episode_id}>
              <span className={styles.item__episide}>
                Episode {episode_id}{' '}
              </span>
              <span> : </span>
              <span className={styles.item__title}>{title}</span>
            </li>
          ))}
      </ul>
    </>
  );
};

export default PersonFilms;
