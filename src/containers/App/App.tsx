import styles from './App.module.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '../../components/Header';
import HomePage from '../HomePage';
import PeoplePage from '../PeoplePage';
import PersonPage from '../PersonPage';
import ErrorNotFound from '../ErrorNotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/people/:id" element={<PersonPage />} />
        <Route path="*" element={<ErrorNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
