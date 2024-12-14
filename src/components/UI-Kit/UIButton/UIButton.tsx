import styles from './UIButton.module.css';

import cn from 'classnames';

interface UIButtonProps {
  text: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;  disabled: boolean;
  theme?: 'light' | 'dark';
  classes?: string;
}

const UIButton: React.FC<UIButtonProps> = ({
  text,
  onClick,
  disabled,
  theme = 'light',
  classes,
}) => {
  return (
    <>
      <button
        className={cn(styles.button, styles[theme], classes)}
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    </>
  );
};

export default UIButton;
