import styles from "./spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.full}>
      <div className={styles["dot-spinner"]}>
        <div className={styles["dot-spinner__dot"]}></div>
        <div className={styles["dot-spinner__dot"]}></div>
        <div className={styles["dot-spinner__dot"]}></div>
        <div className={styles["dot-spinner__dot"]}></div>
        <div className={styles["dot-spinner__dot"]}></div>
        <div className={styles["dot-spinner__dot"]}></div>
        <div className={styles["dot-spinner__dot"]}></div>
        <div className={styles["dot-spinner__dot"]}></div>
      </div>
    </div>
  );
};

export default Spinner;
