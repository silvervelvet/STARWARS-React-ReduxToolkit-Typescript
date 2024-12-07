import { useEffect, useState, useCallback } from 'react';
import styles from './SearchPage.module.css';
import { getApiRequest } from '../../utils/networkRequest';
import { API_SEARCH } from '../../constants/constants';
import { getPeopleId, getPeopleImage } from '../../services/getPeopleData';
import SearchPageInfo from '../../components/SearchPage/SearchPageInfo';
import icon from './img/cancel.svg';
import cn from 'classnames';
import { debounce } from 'lodash';

const SearchPage = () => {
  const [inputSearchValue, setInputSearchValue] = useState('');
  const [peopleSearch, setPeopleSearch] = useState([]);

  const getResponse = async (param: string) => {
    const res = await getApiRequest(API_SEARCH + param);

    if ('results' in res) {
      const peopleList = res.results.map(
        ({ name, url }: { name: string; url: string }) => {
          const id = getPeopleId(url);
          const img = getPeopleImage(id);

          return {
            id,
            name,
            img,
          };
        }
      );

      setPeopleSearch(peopleList);
    } else {
      console.error('No results found or invalid response format');
    }
  };

  const debouncedGetResponse = useCallback(
    debounce((value: string) => {
      getResponse(value);
    }, 1000),
    []
  );

  useEffect(() => {
    if (inputSearchValue) {
      debouncedGetResponse(inputSearchValue);
    } else {
      setPeopleSearch([]);
    }
  }, [inputSearchValue, debouncedGetResponse]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearchValue(event.target.value);
  };

  const clearInput = () => {
    setInputSearchValue('');
  };

  return (
    <>
      <h1>Search</h1>
      <div className="wrapper__input">
        <input
          type="text"
          value={inputSearchValue}
          onChange={handleInputChange}
          placeholder="input character's name"
        />
        <img
          onClick={clearInput}
          src={icon}
          className={cn(
            styles.clear,
            !inputSearchValue && styles.clear__disabled
          )}
          alt="Clear"
        />
      </div>
      <SearchPageInfo peopleSearch={peopleSearch} />
    </>
  );
};

export default SearchPage;
