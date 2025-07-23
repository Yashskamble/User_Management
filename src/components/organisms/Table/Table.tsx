import { useSelector } from "react-redux";
import styles from "./Table.module.css";
import { RootState } from "../../../store/store";

const TableHeaders = [
  "Full Name",
  "Email Address",
  "Contact Number",
  "Address",
];

const Table = () => {
  const users = useSelector((state: RootState) => state.users.users);

  return (
    <div className={styles.tableWrapper}>
      {users.length === 0 ? (
        <p className={styles.noDataText}>No users found.</p>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              {TableHeaders.map((header, index) => (
                <th key={index} className={styles.TableHeader}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map(
              (
                { fullName, email, contact, address, city, state, pincode },
                index
              ) => {
                const fullAddress = [address, city, state, pincode].join(", ");
                const classes = `${styles.TableItem} ${
                  index % 2 !== 0 ? styles.oddRow : styles.evenRow
                }`;
                return (
                  <tr key={index}>
                    <td className={classes}>{fullName}</td>
                    <td className={classes}>{email}</td>
                    <td className={classes}>{contact}</td>
                    <td className={classes}>{fullAddress}</td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
