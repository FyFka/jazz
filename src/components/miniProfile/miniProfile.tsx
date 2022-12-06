import { Link } from "react-router-dom";
import { IUser } from "../../types/IUser";
import styles from "./miniProfile.module.css";

interface IMiniProfileProps {
  user: IUser;
}

export default function MiniProfile({ user }: IMiniProfileProps) {
  return (
    <Link className={styles.miniProfile} title={user.username} to="/profile">
      <div className={styles.avatar}>
        <img className={styles.avatarInner} src={user.avatar} alt={`${user.username}'s avatar`} />
      </div>
      <h5 className={styles.username}>{user.username}</h5>
    </Link>
  );
}
