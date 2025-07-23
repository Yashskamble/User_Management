import { useRef, useState } from "react";
import styles from "./InputFields.module.css";

interface InputFieldsProps {
  label: string;
  textarea?: boolean;
  select?: boolean;
  options?: string[];
}

const InputFields = ({
  label,
  textarea,
  select,
  options,
}: InputFieldsProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);
  const [error, setError] = useState("");

  const handleBlur = () => {
    if (inputRef) {
      if (inputRef.current?.textContent === "") {
        setError(`${label} is required`);
      }
    }
  };

  const renderInput = () => {
    if (textarea) {
      return (
        <textarea
          ref={textareaRef}
          placeholder={label}
          className={styles.input}
          rows={4}
          onBlur={handleBlur}
        />
      );
    } else if (select) {
      return (
        <select
          defaultValue=""
          className={styles.input}
          ref={selectRef}
          onBlur={handleBlur}
        >
          <option value="" disabled hidden>
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
          className={styles.input}
          placeholder={label}
          ref={inputRef}
          onBlur={handleBlur}
        />
      );
    }
  };

  return (
    <div className={styles.InputFields}>
      <label className={styles.label} htmlFor={label}>
        {label} :{" "}
      </label>
      <div>
        {renderInput()}
        <p>{error}</p>
      </div>
    </div>
  );
};

export default InputFields;
