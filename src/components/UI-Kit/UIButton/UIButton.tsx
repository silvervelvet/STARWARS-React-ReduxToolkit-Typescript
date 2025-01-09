import cn from 'classnames';

import styles from './UIButton.module.css';

interface UIButtonProps {
  text: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
  theme?: 'light' | 'dark';
  classes?: string;
  type?: 'button' | 'submit' | 'reset';
}

const UIButton: React.FC<UIButtonProps> = ({
  text,
  onClick,
  disabled,
  theme = 'light',
  classes,
  type = 'button',
}) => {
  return (
      <button
        type={type}
        className={cn(styles.btn, styles[theme], classes)}
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
  );
};

export default UIButton;
