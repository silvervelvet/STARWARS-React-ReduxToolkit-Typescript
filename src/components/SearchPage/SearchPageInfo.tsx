import { useTheme } from '../../context/ThemeContext';
import styles from './SearchPageInfo.module.css';
import { Link } from 'react-router-dom';
import cn from 'classnames';

interface Person {
  id: string;
  name: string;
  img: string;
}

interface SearchPageInfoProps {
  peopleSearch: Person[];
}

const SearchPageInfo: React.FC<SearchPageInfoProps> = ({ peopleSearch }) => {
  const hasResults = peopleSearch.length > 0;

  const { theme } = useTheme();

  return (
    <>
      {hasResults ? (
        <ul className={styles.search_list}>
          {peopleSearch.map(({ id, name, img }) => (
            <li className={styles.search_item} key={id}>
              <Link to={`/people/${id}`}>
                <img
                  className={cn(styles.search_photo, {
                    [styles.search_photoLight]: theme === 'light',
                    [styles.search_photoDark]: theme === 'dark',
                  })}
                  src={img}
                  alt={name}
                />
                <div
                  className={cn(styles.searchName, {
                    [styles.searchNameLight]: theme === 'light',
                    [styles.searchNameDark]: theme === 'dark',
                  })}
                >
                  {name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.noResults} >No results</div>
      )}
    </>
  );
};

export default SearchPageInfo;
