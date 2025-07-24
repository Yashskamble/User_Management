import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { RootState } from "../../../store/store";
import { setSelectedUser } from "../../../store/usersSlice";

import styles from "./Table.module.css";
import { formatAddress } from "../../../utils/formatAddress";
import { TABLE_HEADERS } from "../../../constants/tableConstant";

const Table = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state: RootState) => state.users.users);

  const handleEdit = (user: typeof users[number]) => {
    dispatch(setSelectedUser(user));
    navigate("/add-user");
  };

  return (
    <div className={styles.tableWrapper}>
      {users.length === 0 ? (
        <p className={styles.noDataText}>No users found.</p>
      ) : (
        <table className={styles.table} aria-label="User Data Table">
          <thead>
            <tr>
              {TABLE_HEADERS.map((header) => (
                <th key={header} className={styles.TableHeader}>
                  {header}
                </th>
              ))}
              <th className={styles.TableHeader}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              const {
                fullName,
                email,
                contact,
                address,
                city,
                state,
                pincode,
              } = user;

              const rowClass = `${styles.TableItem} ${
                index % 2 === 0 ? styles.evenRow : styles.oddRow
              }`;

              return (
                <tr key={email}>
                  <td className={rowClass}>{fullName}</td>
                  <td className={rowClass}>{email}</td>
                  <td className={rowClass}>{contact}</td>
                  <td className={rowClass}>
                    {formatAddress(address, city, state, pincode)}
                  </td>
                  <td className={rowClass}>
                    <button
                      type="button"
                      className={styles.editButton}
                      onClick={() => handleEdit(user)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
