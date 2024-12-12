import classNames from 'classnames';
import styles from './PeopleList.module.css';

import { Link } from 'react-router-dom';
import { useTheme } from '../../../context/ThemeContext';

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
    <ul className={styles.list_container}>
      {people.map(({ id, name, img }) => (
        <li className={styles.list_item} key={id}>
          <Link to={`/people/${id}`}>
            <img className={styles.person_photo} src={img} alt={name} />
            <div
              className={classNames(styles.personName, {
                [styles.personNameLight]: theme === 'light',
                [styles.personNameDark]: theme === 'dark',
              })}
            >
              {name}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PeopleList;
