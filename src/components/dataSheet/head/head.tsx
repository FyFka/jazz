import { IAnyData } from "../../../types/IAnyData";
import styles from "./head.module.css";

interface IHeadProps {
  head: IAnyData[];
}

export default function Head({ head }: IHeadProps) {
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
