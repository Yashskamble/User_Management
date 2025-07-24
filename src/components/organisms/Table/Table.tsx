import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

import styles from "./Table.module.css";
import { formatAddress } from "../../../utils/formatAddress";
import { TABLE_HEADERS } from "../../../constants/tableConstant";

const Table = () => {
  const users = useSelector((state: RootState) => state.users.users);

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
            </tr>
          </thead>
          <tbody>
            {users.map(
              ({ fullName, email, contact, address, city, state, pincode }, index) => {
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
