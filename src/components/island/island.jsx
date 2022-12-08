import styles from "./island.module.css";

export default function Island({ children }) {
  return <div className={styles.island}>{children}</div>;
}
