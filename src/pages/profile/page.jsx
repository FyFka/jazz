import withAccess from "../../hoc/withAccess";
import styles from "./profile.module.css";

function ProfilePage({ user }) {
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
