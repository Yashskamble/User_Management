import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Form from "../../organisms/Form/Form";
import { LOCAL_STORAGE_KEYS } from "../../../constants/storageKeys";
import { clearSelectedUser } from "../../../store/usersSlice";
import { RootState } from "../../../store/store";

import styles from "./AddUser.module.css";

const AddUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedUser = useSelector((state: RootState) => state.users.selectedUser);

  const handleBackClick = () => {
    navigate("/");
    localStorage.removeItem(LOCAL_STORAGE_KEYS.FORM_DATA);
    if (selectedUser) {
      dispatch(clearSelectedUser());
    }
  };

  return (
    <>
      <div className={styles.back} onClick={handleBackClick}>
        {selectedUser ? "< Cancel" : "< Back"}
      </div>
      <Form />
    </>
  );
};

export default AddUser;
