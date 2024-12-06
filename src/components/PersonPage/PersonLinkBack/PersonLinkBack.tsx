import styles from './PersonLinkBack.module.css';

import { useNavigate } from 'react-router-dom';

const PersonLinkBack = () => {
  const navigate = useNavigate();

  const handleGoBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <>
      <a href="#" onClick={handleGoBack}>
        Go Back
      </a>
    </>
  );
};

export default PersonLinkBack;
