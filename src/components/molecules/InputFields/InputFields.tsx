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
  value,
  onChange,
  onBlur,
  error,
  textarea,
  select,
  options,
}: InputFieldsProps) => {
  const id = label.toLowerCase().replace(/\s+/g, "-");

  const inputClass = `${styles.input} ${error ? styles.errorInput : ""}`;

  const renderInput = () => {
    if (textarea) {
      return (
        <textarea
          id={id}
          placeholder={label}
          className={inputClass}
          rows={4}
          value={value}
          onBlur={onBlur}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      );
    }

    if (select) {
      return (
        <select
          id={id}
          className={inputClass}
          value={value}
          onBlur={onBlur}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
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
    }

    return (
      <input
        id={id}
        type="text"
        placeholder={label}
        className={inputClass}
        value={value}
        onBlur={onBlur}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />
    );
  };

  return (
    <div className={styles.InputFields}>
      <label htmlFor={id} className={styles.label}>
        {label}:
      </label>
      <div>
        {renderInput()}
        {error && (
          <p id={`${id}-error`} className={styles.error}>
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default InputFields;
