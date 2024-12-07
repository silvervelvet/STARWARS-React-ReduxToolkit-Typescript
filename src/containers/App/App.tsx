import styles from './App.module.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '../../components/Header';
import HomePage from '../HomePage';
import PeoplePage from '../PeoplePage';
import PersonPage from '../PersonPage';
import ErrorNotFound from '../ErrorNotFound';
import FavouritePage from '../FavouritePage';
import ThemeToggleButton from '../../context/ThemeToggleButton';
import SearchPage from '../SearchPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeToggleButton />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/people/:id" element={<PersonPage />} />
        <Route path="/favourite" element={<FavouritePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<ErrorNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
