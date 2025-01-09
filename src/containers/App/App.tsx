import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { useTheme } from '../../context/ThemeContext';
import ErrorNotFound from '../ErrorNotFound';
import FavouritePage from '../FavouritePage';
import HomePage from '../HomePage';
import LogInPage from '../LogInPage';
import PeoplePage from '../PeoplePage';
import PersonPage from '../PersonPage';
import SearchPage from '../SearchPage';
import SignUpPage from '../SignUpPage';

import styles from './App.module.css';

const App: React.FC = () => {
  const { theme } = useTheme();

  return (
    <BrowserRouter>
      <div className={styles.wrapper}>
        <Header />
        <hr
          className={
            theme === 'light'
              ? styles.border_bottom_lightTheme
              : styles.border_bottom_darkTheme
          }
        />
        <div className={styles.main_content}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/people" element={<PeoplePage />} />
            <Route path="/people/:id" element={<PersonPage />} />
            <Route path="/favourite" element={<FavouritePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="*" element={<ErrorNotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
