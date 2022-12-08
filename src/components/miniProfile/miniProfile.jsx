import { Link } from "react-router-dom";
import styles from "./miniProfile.module.css";

export default function MiniProfile({ user }) {
  return (
    <Link className={styles.miniProfile} title={user.username} to="/profile">
      <div className={styles.avatar}>
        <img className={styles.avatarInner} src={user.avatar} alt={`${user.username}'s avatar`} />
      </div>
      <h5 className={styles.username}>{user.username}</h5>
    </Link>
  );
}
