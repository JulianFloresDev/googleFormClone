import styles from './input.module.css';

const Input = ({ name, error }) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name} className={styles.label}>Label</label>
      <input id={name} className={styles.input} placeholder={'placeholder . . .'} />
      <span className={styles.underline}></span>
      {error && <span></span>}
    </div>
  );
};

export default Input;
