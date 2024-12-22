import { useEffect, useState, useCallback } from 'react';
import styles from './SearchPage.module.css';
import { getApiRequest } from '../../utils/networkRequest';
import { API_SEARCH } from '../../constants/constants';
import { getPeopleId, getPeopleImage } from '../../services/getPeopleData';
import SearchPageInfo from '../../components/SearchPage/SearchPageInfo';
import cn from 'classnames';
import { debounce } from 'lodash';
import classNames from 'classnames';
import { useTheme } from '../../context/ThemeContext';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const SearchPage = () => {
  const [inputSearchValue, setInputSearchValue] = useState('');
  const [peopleSearch, setPeopleSearch] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const { theme } = useTheme();

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

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    if (!inputSearchValue) setIsFocused(false);
  };

  return (
    <section className={styles.search_container}>
      <div
        className={classNames(styles.search_title, {
          [styles.search_title_LightTheme]: theme === 'light',
          [styles.search_title_DarkTheme]: theme === 'dark',
        })}
      >
        Search
      </div>
      <div className={styles.form_wrapper}>
        <input
          className={cn(styles.input_wrapper, {
            [styles.input_wrapper_LightTheme]: theme === 'light',
            [styles.input_wrapper_DarkTheme]: theme === 'dark',
          })}
          type="text"
          value={inputSearchValue}
          onChange={handleInputChange}
          placeholder={isFocused ? "Input character's name" : ''}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <CloseOutlinedIcon
          sx={{
            color:
              theme === 'light'
                ? 'var(--color-green-lightTheme)'
                : 'var(--color-red-darkTheme)',
            cursor: 'pointer',
            opacity: inputSearchValue ? 1 : 0.2,
            marginLeft: '1rem',
          }}
          fontSize="medium"
          onClick={clearInput}
        />
      </div>
      <SearchPageInfo peopleSearch={peopleSearch} />
    </section>
  );
};

export default SearchPage;
