import styles from "./Header.module.css";

interface HeaderProps {
  label: string;
}

const Header = ({ label }: HeaderProps) => {
  return <h1 className={styles.header}>{label}</h1>;
};

export default Header;
