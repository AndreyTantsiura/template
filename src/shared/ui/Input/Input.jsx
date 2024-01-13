//styles
import styles from './Input.module.scss';

export const Input = ({ onChange, type, disabled, value, placeholder }) => {
  return (
    <input
      className={styles.Input}
      onChange={onChange}
      type={type}
      disabled={disabled}
      value={value}
      placeholder={placeholder}
    />
  );
};
