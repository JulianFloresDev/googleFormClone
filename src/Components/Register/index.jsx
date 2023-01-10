import styles from "./register.module.css";
import { Form } from "Components";

const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <div className={styles.infoImage}>
          <h1>Suamte a mi Newsletter!!</h1>
          <span></span>
          <h2>Estamos creciendo!</h2>
          <p>
            Invita a tus amig@s a formar parte de la nueva generación, para no
            perderse de ninguna novedad.
          </p>
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/register-left-img.jpg`}
          alt="Register"
        />
      </div>
      <div className={styles.formContainer}>
        <Form />
      </div>
    </div>
  );
};

export default Register;
