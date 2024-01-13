//styles
import styles from './Button.module.scss';

export const Button = ({ onClick, type, disabled, children }) => {
  return (
    <button
      className={styles.Button}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
