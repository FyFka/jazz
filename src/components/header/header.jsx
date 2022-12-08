import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authRoutes, publicRoutes } from "../../constants/routes";
import MiniProfile from "../miniProfile/miniProfile";
import styles from "./header.module.css";

export default function Header() {
  const user = useSelector((state) => state.user.value);

  const routes = user ? authRoutes : publicRoutes;
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.routes}>
          {routes.map((route) => (
            <li key={route.path}>
              <Link className={styles.route} to={route.path}>
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className={styles.routes}>
          {user && <MiniProfile user={user} />}
          {!user && (
            <li>
              <Link className={styles.route} to="/login">
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
