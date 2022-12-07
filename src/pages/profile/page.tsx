import withAccess from "../../hoc/withAccess";
import { IUser } from "../../types/IUser";
import styles from "./profile.module.css";

interface IProfilePageProps {
  user: IUser;
}

function ProfilePage({ user }: IProfilePageProps) {
  return (
    <section className={styles.profile}>
      <div className={styles.avatar}>
        <img src={user.avatar} alt={`${user.username}'s avatar`} />
      </div>
      <h3 className={styles.username}>{user.username}</h3>
    </section>
  );
}

export default withAccess(ProfilePage, true);
