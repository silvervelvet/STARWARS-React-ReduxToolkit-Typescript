import { useEffect, useState } from 'react';

import { useTheme } from '../../../context/ThemeContext';

import loaderDark from './img/loading_Dark.svg';
import loaderLight from './img/loading_Light.svg';
import styles from './UILoading.module.css';


const UILoading = () => {
  const [loaderIcon, setLoaderIcon] = useState<string | null>(null);

  const { theme } = useTheme();

  useEffect(() => {
    switch (theme) {
      case 'dark':
        setLoaderIcon(loaderDark);
        break;
      case 'light':
        setLoaderIcon(loaderLight);
        break;
      default:
        setLoaderIcon(loaderLight);
    }
  }, [theme]);

  return (
    <div className={styles.loader_container}>
      <img src={loaderIcon} className={styles.loader} alt="Loading..." />
    </div>
  );
};

export default UILoading;
