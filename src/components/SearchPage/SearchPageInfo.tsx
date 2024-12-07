import styles from './SearchPageInfo.module.css';
import { Link } from 'react-router-dom';

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

  return (
    <>
      {hasResults ? (
        <ul>
          {peopleSearch.map(({ id, name, img }) => (
            <li key={id}>
              <Link to={`/people/${id}`}>
                <img src={img} alt={name} />
                <p>{name}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results</p>
      )}
    </>
  );
};

export default SearchPageInfo;
