import styles from './UIButton.module.css';

import cn from 'classnames';

const UIButton = ({ text, onClick, disabled, theme='dark', classes }) => {
  return (
    <>
      <button className={cn(styles.button, styles[theme], classes)} onClick={onClick} 
      disabled={disabled}>
        {text}
      </button>
    </>
  );
}

export default UIButton;