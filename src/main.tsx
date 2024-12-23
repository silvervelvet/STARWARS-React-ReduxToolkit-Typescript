import './main.css';

import LogRocket from 'logrocket';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './containers/App';
import { ThemeProvider } from './context/ThemeContext';
import store from './store/store';

LogRocket.init('zwfqc7/server_starwars');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
