import cn from 'classnames';
import { Link } from 'react-router-dom';

import { useTheme } from '../../context/ThemeContext';

import styles from './SearchPageInfo.module.css';

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
    <section>
      {hasResults ? (
        <ul className={styles.search_list}>
          {peopleSearch.map(({ id, name, img }) => (
            <li className={styles.search_item} key={id}>
              <Link to={`/people/${id}`}>
                <img
                  className={cn(styles.search_img, {
                    [styles.search_img_lightTheme]: theme === 'light',
                    [styles.search_img_darkTheme]: theme === 'dark',
                  })}
                  src={img}
                  alt={name}
                />
                <div
                  className={cn(styles.search_name, {
                    [styles.search_name_lightTheme]: theme === 'light',
                    [styles.search_name_darkTheme]: theme === 'dark',
                  })}
                >
                  {name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.no_results} >No results</div>
      )}
    </section>
  );
};

export default SearchPageInfo;
