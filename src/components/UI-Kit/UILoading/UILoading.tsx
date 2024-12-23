import { useEffect, useState } from 'react';

import styles from './UILoading.module.css';

const UILoading = ({ theme = 'white' }) => {
  const [colorFont, setColorFont] = useState<string | null>(null);

  useEffect(() => {
    switch (theme) {
      case 'black':
        setColorFont('black');
        break;
      case 'white':
        setColorFont('white');
        break;
      case 'blue':
        setColorFont('blue');
        break;
      default:
        setColorFont('white');
    }
  }, []);

  return (
    <>
      <span>Loading..</span>
    </>
  );
};

export default UILoading;
