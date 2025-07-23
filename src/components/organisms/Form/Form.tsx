import Button from "../../atoms/Button/Button";
import Header from "../../atoms/Header/Header";
import InputFields from "../../molecules/InputFields/InputFields";
import styles from "./Form.module.css";

const Form = () => {
  return (
    <div className={styles.formPage}>
      <Header label="Add User" />
      <form className={styles.form}>
        <InputFields label="Full Name" />
        <InputFields label="Email Address" />
        <InputFields label="Contact Number" />
        <InputFields label="Address Line" textarea />
        <InputFields label="City" />
        <InputFields label="State" select options={["maharashtra", "delhi"]} />
        <InputFields label="Pincode" />
        <div className={styles.submitBtn}>
          <Button label="Submit" onClick={() => {}} />
        </div>
      </form>
    </div>
  );
};

export default Form;
