import styles from "./register.module.css";
import { useSelector } from "react-redux";
import { Form, Spinner } from "Components";

const Register = () => {
  const { hasAwnser, userAwnser } = useSelector((store) => store.global);
  return (
    <div className={styles.container}>
      <div
        className={`${styles.imgContainer} ${
          hasAwnser && styles.imgWithAwnser
        }`}
      >
        <div className={styles.infoImage}>
          <h1>
            {!hasAwnser
              ? "Sumante a nuestra Newsletter!"
              : `Gracias! ${userAwnser?.full_name}`}
          </h1>
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
            {!hasAwnser ? (
              <Spinner />
            ) : (
              <>
                <div>
                  <h4>Nombre Completo:</h4>
                  <p>{userAwnser?.full_name}</p>
                </div>
                <div>
                  <h4>Email:</h4>
                  <p>{userAwnser?.email}</p>
                </div>
                <div>
                  <h4>Fecha de Nacimiento:</h4>
                  <p>{userAwnser?.birth_date.toString().slice(0, 25)}</p>
                </div>
                <div>
                  <h4>Nacionalidad:</h4>
                  <p>{userAwnser?.country_of_origin}</p>
                </div>
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
