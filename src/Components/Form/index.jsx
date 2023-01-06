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
              register={register}
            />
          );
        })}
      <div className={styles.buttonsContainer}>
        <button type="submit">Enviar</button>
        <button type="button" onClick={() => reset()}>
          Borrar formulario
        </button>
      </div>
    </form>
  );
};

export default Form;
