import styles from "./register.module.css";
import { useSelector } from "react-redux";
import { Form, Spinner } from "Components";

const Register = () => {
  const { hasAwnser, userAwnser } = useSelector((store) => store.global);
  return (
    <div className={styles.container}>
      <div className={`${styles.imgContainer} ${hasAwnser && styles.imgWithAwnser}`}>
        <div className={styles.infoImage}>
          <h1>{!hasAwnser ? "Sumante a nuestra Newsletter!" : "Gracias!"}</h1>
          <span></span>
          <h2>{!hasAwnser ? "Estamos Creciendo" : "Ya sos parte!"}</h2>
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
      {hasAwnser && (
        <div className={styles.userAwnser}>
          <div className={styles.awnserContainer}>
            {!hasAwnser ? <Spinner /> : (
              <>
                <p>{userAwnser?.full_name}</p>
                <p>{userAwnser?.email}</p>
                <p>{userAwnser?.birth_date.toString()}</p>
                <p>{userAwnser?.country_of_origin}</p>
              </>
            )}
          </div>
        </div>
      )}
      <div className={styles.formContainer}>
        <Form />
      </div>
    </div>
  );
};

export default Register;
