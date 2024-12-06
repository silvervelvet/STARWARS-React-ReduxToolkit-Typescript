import styles from './UIButton.module.css';

import cn from 'classnames';

interface UIButtonProps {
  text: string;
  onClick: () => void;
  disabled: boolean;
  theme?: string;
  classes?: boolean;
}

const UIButton: React.FC<UIButtonProps> = ({
  text,
  onClick,
  disabled,
  theme = 'dark',
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
