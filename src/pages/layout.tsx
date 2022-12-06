import Header from "../components/header/header";
import styles from "./layout.module.css";

interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Header />
      <main className={styles.container}>{children}</main>
    </>
  );
}
