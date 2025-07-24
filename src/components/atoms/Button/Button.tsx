import styles from "./Button.module.css";

interface ButtonProps {
  label: string;
  type: "button" | "submit";
  onClick?: () => void;
}

const Button = ({ label, type, onClick }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick} type={type}>
      {label}
    </button>
  );
};

export default Button;
