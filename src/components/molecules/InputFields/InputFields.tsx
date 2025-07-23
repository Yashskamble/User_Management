import styles from "./InputFields.module.css";

type InputFieldsProps = {
  label: string;
  value: string;
  onChange: (val: string) => void;
  onBlur?: () => void;
  error?: string;
  textarea?: boolean;
  select?: boolean;
  options?: string[];
};

const InputFields = ({
  label,
  textarea,
  select,
  options,
  value,
  onChange,
  onBlur,
  error,
}: InputFieldsProps) => {
  const renderInput = () => {
    if (textarea) {
      return (
        <textarea
          placeholder={label}
          className={`${styles.input} ${error ? styles.errorInput : ""}`}
          rows={4}
          onBlur={onBlur}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      );
    } else if (select) {
      return (
        <select
          className={`${styles.input} ${error ? styles.errorInput : ""}`}
          onBlur={onBlur}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="" disabled>
            Select
          </option>
          {options?.map((opt, i) => (
            <option key={i} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      );
    } else {
      return (
        <input
          type="text"
          placeholder={label}
          className={`${styles.input} ${error ? styles.errorInput : ""}`}
          onBlur={onBlur}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      );
    }
  };

  return (
    <div className={styles.InputFields}>
      <label className={styles.label} htmlFor={label}>
        {label}:
      </label>
      <div>
        {renderInput()}
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  );
};

export default InputFields;
