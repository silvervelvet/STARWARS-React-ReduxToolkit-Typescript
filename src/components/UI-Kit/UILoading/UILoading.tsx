import { useEffect, useState } from 'react';

import styles from './UILoading.module.css';
import loaderDark from './img/loading_Dark.svg';
import loaderLight from './img/loading_Light.svg';
import { useTheme } from '../../../context/ThemeContext'

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
    <img src={loaderIcon} alt="Loading..." />
  );
};

export default UILoading;
