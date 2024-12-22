import styles from './App.module.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '../../components/Header';
import HomePage from '../HomePage';
import PeoplePage from '../PeoplePage';
import PersonPage from '../PersonPage';
import ErrorNotFound from '../ErrorNotFound';
import FavouritePage from '../FavouritePage';
import SearchPage from '../SearchPage';
import Footer from '../../components/Footer';
import LogInPage from '../LogInPage';
import SignUpPage from '../SignUpPage';
        
import { useTheme } from '../../context/ThemeContext';

const App: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <BrowserRouter>
      <div className={styles.wrapper}>
        <Header />
        <hr
          className={
            theme === 'light'
              ? styles.border_bottomLight
              : styles.border_bottomDark
          }
        />
        <div className={styles.mainContent}>
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
