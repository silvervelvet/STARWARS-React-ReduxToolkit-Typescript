import './main.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { ThemeProvider } from './context/ThemeContext';
import App from './containers/App';
import store from './store/store';
import LogRocket from 'logrocket';

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
