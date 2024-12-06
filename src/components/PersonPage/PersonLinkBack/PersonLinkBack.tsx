import styles from './PersonLinkBack.module.css';

import { useNavigate } from 'react-router-dom';

const PersonLinkBack: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = (e: React.MouseEvent<HTMLAnchorElement>) => {
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
