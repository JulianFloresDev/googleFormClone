import styles from "./form.module.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "Components";

const Form = () => {
  const [itemsFromData, setItems] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const fetchData = async () => {
    try {
      const request = await fetch(`${process.env.PUBLIC_URL}/db.json`);
      const response = await request.json();

      setItems(response.items);
      setIsFetching(false);
    } catch (err) {
      console.error(err);
      return [];
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { handleSubmit, register, reset } = useForm();

  const sendData = (data) => {
    console.log({ data });
  };

  return (
    <form className={styles.formContent} onSubmit={handleSubmit(sendData)}>
      <div>
        <h1>Confidential contrat.</h1>
        <p>
          This Confidentiality Agreement may be used to keep under reserve
          certain private information that one or more person/s and/or entity/s
          decide to share with other person/s and/or entity/s for use in a
          project or activity. This document complies with the requirements of
          the National Civil and Commercial Code only.
        </p>
      </div>
      {!isFetching &&
        itemsFromData.map((input, index) => {
          if (input.type === "submit") {
            return null;
          }
          return (
            <Input
              key={index}
              name={input.name}
              label={input.label}
              type={input.type}
              selectOptions={input.options || []}
              required={input.required || false}
              register={register}
            />
          );
        })}
      <div className={styles.buttonsContainer}>
        <button name="submitBtn" type="submit">
          Enviar
        </button>
        <button name="resetBtn" type="button" onClick={() => reset()}>
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
