import { useLocation } from 'react-router-dom';

const ErrorNotFound = () => {
  const location = useLocation();

  return (
    <div>
      <h1>404 - Page Not Found. No match for {location.pathname}</h1>
    </div>
  );
};

export default ErrorNotFound;
