import { useNavigate } from "react-router-dom";
import Form from "../../organisms/Form/Form";
import styles from "./AddUser.module.css";

const AddUser = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.back} onClick={() => navigate("/")}>
        {"< Back"}
      </div>
      <Form />;
    </>
  );
};

export default AddUser;
