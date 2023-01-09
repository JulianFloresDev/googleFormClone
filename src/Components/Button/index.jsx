import styles from "./button.module.css";

const Button = ({ children, type, action, variant }) => {
  return (
    <div className={styles.btnContainer}>
      <button
        type={type}
        className={styles[variant || "basic"]}
        onClick={() => action()}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
