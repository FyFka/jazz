import Header from "../components/header/header";
import styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.container}>{children}</main>
    </>
  );
}
