import styles from "./Table.module.css";

const TableHeaders = [
  "Full Name",
  "Email Address",
  "Contact Number",
  "Address",
];

const Table = () => {
  return (
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
        <tr>
          <td
            className={`${styles.TableItem} ${
              false ? styles.oddRow : styles.evenRow
            }`}
          >
            {"Saloni Ghag"}
          </td>
          <td
            className={`${styles.TableItem} ${
              false ? styles.oddRow : styles.evenRow
            }`}
          >
            {"Saloni Ghag"}
          </td>
          <td
            className={`${styles.TableItem} ${
              false ? styles.oddRow : styles.evenRow
            }`}
          >
            {"Saloni Ghag"}
          </td>
          <td
            className={`${styles.TableItem} ${
              false ? styles.oddRow : styles.evenRow
            }`}
          >
            {"Saloni Ghag"}
          </td>
        </tr>
        <tr>
          <td
            className={`${styles.TableItem} ${
              true ? styles.oddRow : styles.evenRow
            }`}
          >
            {"Saloni Ghag"}
          </td>
          <td
            className={`${styles.TableItem} ${
              true ? styles.oddRow : styles.evenRow
            }`}
          >
            {"Saloni Ghag"}
          </td>
          <td
            className={`${styles.TableItem} ${
              true ? styles.oddRow : styles.evenRow
            }`}
          >
            {"Saloni Ghag"}
          </td>
          <td
            className={`${styles.TableItem} ${
              true ? styles.oddRow : styles.evenRow
            }`}
          >
            {"Saloni Ghag"}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
