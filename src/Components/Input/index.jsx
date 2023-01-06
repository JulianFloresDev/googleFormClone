import styles from "./input.module.css";

const Input = ({
  type,
  name,
  label,
  selectOptions,
  required,
  register,
  error,
}) => {
  return (
    <div
      className={`${styles.inputContainer} ${error && styles.inputWithError}`}
    >
      <label htmlFor={name} className={styles.label}>
        {label || "Pregunta..."}
        {required && <span>*</span>}
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
          className={`${styles.underline} ${error && styles.borderWithError}`}
        ></span>
      )}
      {error && type !== "checkbox" && (
        <div className={styles.error}>
          <span className={styles.errorIcon}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/icons/alert-circle.svg`}
              alt="Alert red icon"
            />
          </span>
          <p className={styles.errorMessage}>{error?.message}</p>
        </div>
      )}
    </div>
  );
};

export default Input;
