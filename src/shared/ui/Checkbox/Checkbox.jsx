export const Checkbox = ({ isChecked, onChange, className }) => {
  return (
    <input
      type='checkbox'
      checked={isChecked}
      onChange={onChange}
      className={className}
    />
  );
};
