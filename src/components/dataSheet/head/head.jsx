import styles from "./head.module.css";

export default function Head({ head }) {
  return (
    <thead className={styles.head}>
      <tr>
        {head.map(({ key, value }) => (
          <th key={key} className={styles.stickyCell} scope="col">
            {value}
          </th>
        ))}
      </tr>
    </thead>
  );
}
