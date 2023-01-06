import styles from "./input.module.css";

const Input = ({ type, name, label, selectOptions, register, error }) => {
  return (
    <div
      className={`${styles.inputContainer} ${
        error?.name && styles.inputWithError
      }`}
    >
      <label htmlFor={name} className={styles.label}>
        {label || "Pregunta..."}
        <span>*</span>
      </label>
      {type === "select" ? (
        <select id={name} {...register(name || "")} className={styles.input}>
          <option hidden>Selecciona tu pais de residencia</option>
          {selectOptions?.map((option, index) => {
            return (
              <option key={index * 100} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
      ) : (
        <input
          type={type || "text"}
          id={name}
          className={styles.input}
          placeholder={label}
          {...register(name || "")}
        />
      )}
      {type !== "checkbox" && (
        <span
          className={`${styles.underline} ${
            error?.name && styles.borderWithError
          }`}
        ></span>
      )}
      {error && (
        <div className={styles.error}>
          <span className={styles.errorIcon}></span>
          <p className={styles.errorMessage}></p>
        </div>
      )}
    </div>
  );
};

export default Input;
