import { useNavigate } from "react-router-dom";
import Form from "../../organisms/Form/Form";
import { LOCAL_STORAGE_KEYS } from "../../../constants/storageKeys";
import styles from "./AddUser.module.css";

const AddUser = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
    localStorage.removeItem(LOCAL_STORAGE_KEYS.FORM_DATA);
  };

  return (
    <>
      <div className={styles.back} onClick={handleBackClick}>
        {"< Back"}
      </div>
      <Form />
    </>
  );
};

export default AddUser;
