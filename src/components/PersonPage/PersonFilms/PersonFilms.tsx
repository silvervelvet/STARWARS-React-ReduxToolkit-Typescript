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
    <section>
      <ul>
        {films
          .sort((a, b) => a.episode_id - b.episode_id)
          .map(({ title, episode_id }) => (
            <li key={episode_id}>
              <span className={styles.item_episide}>
                Episode {episode_id}{' '}
              </span>
              <span> : </span>
              <span>{title}</span>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default PersonFilms;
