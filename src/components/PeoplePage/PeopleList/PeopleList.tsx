import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { useTheme } from '../../../context/ThemeContext';

import styles from './PeopleList.module.css';

interface Person {
  id: string;
  name: string;
  img: string;
}

interface PeopleListProps {
  people: Person[];
}

const PeopleList: React.FC<PeopleListProps> = ({ people }) => {
  const { theme } = useTheme();

  return (
    <section>
      <ul className={styles.people_list}>
        {people.map(({ id, name, img }) => (
          <li className={styles.people_item} key={id}>
            <Link to={`/people/${id}`}>
              <img className={styles.person_photo} src={img} alt={name} />
              <div
                className={classNames(styles.person_name, {
                  [styles.person_name_lightTheme]: theme === 'light',
                  [styles.person_name_darkTheme]: theme === 'dark',
                })}
              >
                {name}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PeopleList;
