import styles from "./form.module.css";
import modalStyles from "Components/Modal/modal.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { manageModalLoading, setData } from "Redux/Global/actions";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { Schema } from "./schema";
import { Input, Button } from "Components";
import {
  checkEmail,
  saveAwnser,
  updateUserAwnser,
} from "Helpers/firebaseConfig";
import { manageModalContent, manageModalActive } from "Redux/Global/actions";

const Form = () => {
  const dispatch = useDispatch();
  const { itemsFromData } = useSelector((store) => store.global);

  const fetchData = async () => {
    try {
      const request = await fetch(`${process.env.PUBLIC_URL}/db.json`);
      const response = await request.json();

      dispatch(setData(response.items));
    } catch (err) {
      console.error("Something was wrong: ", err);
      return [];
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    node: "onBlur",
    resolver: joiResolver(Schema),
  });

  const confirmReset = () => {
    dispatch(
      manageModalContent(
        <>
          <h2 className={modalStyles.infoTitle}>
            Seguro que quieres borrar los datos ingresados?
          </h2>
          <p className={modalStyles.infoDescription}>
            De igual manera, puedes volver a completarlos y no quedarte fuera de
            esta super oferta !!
          </p>
          <div className={modalStyles.buttonsContainer}>
            <Button
              type="button"
              variant="bg-transparent"
              action={() => dispatch(manageModalActive(false))}
            >
              Atrás
            </Button>
            <Button
              type="button"
              variant="red-alert"
              action={() => {
                reset();
                dispatch(manageModalActive(false));
              }}
            >
              Borrar
            </Button>
          </div>
        </>
      )
    );
    dispatch(manageModalActive(true));
  };

  const confirmSendInfo = (data) => {
    dispatch(
      manageModalContent(
        <>
          <h2 className={modalStyles.infoTitle}>
            Confirma que quiere pertenecer a nuestra newsletter?
          </h2>
          <p className={modalStyles.infoDescription}>
            Podrás consultar tu información siempre que quieras en el apartado
            de "info"
          </p>
          <div className={modalStyles.buttonsContainer}>
            <Button
              type="button"
              variant="bg-transparent"
              action={() => dispatch(manageModalActive(false))}
            >
              Atrás
            </Button>
            <Button
              type="button"
              variant="red-alert"
              action={() => saveInDB(data)}
            >
              Registrarse
            </Button>
          </div>
        </>
      )
    );
    dispatch(manageModalActive(true));
  };

  const saveInDB = async (data) => {
    dispatch(manageModalLoading(true));
    const users = await checkEmail();
    if (users.some((user) => user.email === data.email)) {
      dispatch(manageModalLoading(false));
      dispatch(
        manageModalContent(
          <>
            <h2 className={modalStyles.infoTitle}>Email existente!</h2>
            <p className={modalStyles.infoDescription}>
              El email con el que pretende registrarse ya existe en nuestra base
              de datos. Desea actualizar los datos?
            </p>
            <div className={modalStyles.buttonsContainer}>
              <Button
                type="button"
                variant="bg-transparent"
                action={() => dispatch(manageModalActive(false))}
              >
                Atrás
              </Button>
              <Button
                type="button"
                variant="red-alert"
                action={() => {
                  try {
                    dispatch(manageModalLoading(true));
                    updateUserAwnser(data);
                    dispatch(manageModalActive(false));
                    dispatch(manageModalLoading(false));
                  } catch (err) {
                    dispatch(
                      manageModalContent(
                        <>
                          <h2>{err.toString()}</h2>
                          <div className={modalStyles.buttonsContainer}>
                            <Button
                              type="button"
                              variant="bg-transparent"
                              action={() => dispatch(manageModalActive(false))}
                            >
                              Atrás
                            </Button>
                          </div>
                        </>
                      )
                    );
                  }
                }}
              >
                Actualizar
              </Button>
            </div>
          </>
        )
      );
      dispatch(manageModalLoading(false));
      return;
    }
    try {
      dispatch(manageModalLoading(true));
      saveAwnser(data);
      reset();
      dispatch(manageModalActive(false));
      dispatch(manageModalLoading(false));
    } catch (err) {
      dispatch(
        manageModalContent(
          <>
            <h2>{err.toString()}</h2>
            <div className={modalStyles.buttonsContainer}>
              <Button
                type="button"
                variant="bg-transparent"
                action={() => dispatch(manageModalActive(false))}
              >
                Atrás
              </Button>
            </div>
          </>
        )
      );
    }
  };

  return (
    <form
      className={styles.formContent}
      onSubmit={handleSubmit(confirmSendInfo)}
    >
      <div>
        <h1>Contrato de confidencialidad.</h1>
        <p>
          El presente Acuerdo de Confidencialidad podrá ser utilizado para
          mantener bajo reserva determinada información privada que una o más
          persona/s y/o entidad/es decidan compartir con otra/s persona/s y/o
          entidad/es para su utilización en un proyecto o actividad. Este
          documento cumple únicamente con los requisitos del Código Civil y
          Comercial de la Nación.
        </p>
      </div>
      {itemsFromData.map((input) => {
        if (input.type === "submit") {
          return null;
        }
        return (
          <Input
            name={input.name}
            label={input.label}
            type={input.type}
            selectOptions={input.options || []}
            required={input.required || false}
            register={register}
            error={errors[input.name]}
          />
        );
      })}
      <div className={styles.buttonsContainer}>
        <button name="submitBtn" type="submit">
          Enviar
        </button>
        <button name="resetBtn" type="button" onClick={() => confirmReset()}>
          Borrar formulario
        </button>
      </div>
      <p>Nunca envíes contraseñas a través de Formularios de Google.</p>
      <div className={styles.privPolicity}>
        Este contenido no ha sido creado ni aprobado por Google.{" "}
        <a
          target="_blank"
          href="https://docs.google.com/forms/u/0/d/e/1FAIpQLSf0V_fueitHVvb60CYF4cCC_eB_GZ2JlpMDEMVjR-PyWFyoWA/reportabuse?source=https://docs.google.com/forms/d/e/1FAIpQLSf0V_fueitHVvb60CYF4cCC_eB_GZ2JlpMDEMVjR-PyWFyoWA/viewform"
          rel="noreferrer"
        >
          Notificar uso inadecuado
        </a>{" "}
        -{" "}
        <a
          target="_blank"
          href="https://policies.google.com/terms"
          rel="noreferrer"
        >
          Términos del Servicio
        </a>{" "}
        -{" "}
        <a
          target="_blank"
          href="https://policies.google.com/privacy"
          rel="noreferrer"
        >
          Política de Privacidad
        </a>
      </div>
      <span>
        <a
          href="https://www.google.com/forms/about/?utm_source=product&utm_medium=forms_logo&utm_campaign=forms"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_dark_clr_74x24px.svg"
            alt="Google"
          />
          <span>Formularios</span>
        </a>
      </span>
    </form>
  );
};

export default Form;
