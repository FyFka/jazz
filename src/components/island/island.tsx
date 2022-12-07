import styles from "./island.module.css";

interface IIslandProps {
  children: React.ReactNode;
}

export default function Island({ children }: IIslandProps) {
  return <div className={styles.island}>{children}</div>;
}
