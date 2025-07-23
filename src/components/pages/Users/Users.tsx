import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button/Button";
import Header from "../../atoms/Header/Header";
import Table from "../../organisms/Table/Table";
import styles from "./Users.module.css";

const Users = () => {
  const navigate = useNavigate();

  const handleAddUserClick = () => {
    navigate("/add-user");
  };

  return (
    <>
      <Header label="All Users" />
      <div className={styles.addUser}>
        <Button label="Add User" onClick={handleAddUserClick} />
      </div>
      <Table />
    </>
  );
};

export default Users;
