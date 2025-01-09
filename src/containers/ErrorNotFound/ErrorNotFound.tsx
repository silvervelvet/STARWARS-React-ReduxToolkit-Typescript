import { useLocation } from 'react-router-dom';

import styles from './ErrorNotFound.module.css';

const ErrorNotFound = () => {
  const location = useLocation();

  return (
    <section className={styles.error_container}>
      <div className={styles.title_error}>
        404 - Page Not Found. No match for {location.pathname}
      </div>
    </section>
  );
};

export default ErrorNotFound;
