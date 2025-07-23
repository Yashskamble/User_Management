import { useNavigate } from "react-router-dom";
import Form from "../../organisms/Form/Form";
import styles from "./AddUser.module.css";

const AddUser = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
    localStorage.removeItem("formData");
  };

  return (
    <>
      <div className={styles.back} onClick={handleBackClick}>
        {"< Back"}
      </div>
      <Form />;
    </>
  );
};

export default AddUser;
