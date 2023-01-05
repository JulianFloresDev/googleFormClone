import styles from "./form.module.css";
import { Input } from "Components";

const Form = () => {
  return (
    <form className={styles.formContent}>
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
      <Input name={'nombre'} />
      <Input name={'nombre'} />
      <Input name={'nombre'} />
      <Input name={'nombre'} />
    </form>
  );
};

export default Form;
