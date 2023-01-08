import styles from "./modal.module.css";
import { useSelector } from "react-redux";

const Modal = ({ children }) => {
  const { isModalActive, modalContent } = useSelector((store) => store.global);

  return !isModalActive ? null : (
    <div className={styles.fullCover}>
      <div className={styles.modalContent}>
        <div className={styles.infoContainer}>{modalContent}</div>
        <div className={styles.buttonsContainer}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
