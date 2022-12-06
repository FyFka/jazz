import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/login";
import withAccess from "../../hoc/withAccess";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { setUser } from "../../store/slices/user";
import styles from "./login.module.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [meta, setMeta] = useState<{ error: string; fetching: boolean }>({ error: "", fetching: false });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleUsernameChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(evt.target.value);
  };

  const handlePasswordChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(evt.target.value);
  };

  const handleAuth = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setMeta((prev) => ({ ...prev, fetching: true }));

    const result = await login(username, password);
    if (result.message) {
      setMeta((prev) => ({ ...prev, error: result.message! }));
    } else if (result.data) {
      dispatch(setUser(result.data));
      navigate("/profile");
    }

    setMeta((prev) => ({ ...prev, fetching: false }));
  };

  return (
    <section className={styles.login}>
      <form className={styles.loginForm} onSubmit={handleAuth}>
        <div>
          <label className={styles.label} htmlFor="login[username]">
            Username
          </label>
          <input value={username} onChange={handleUsernameChange} name="username" id="login[username]" />
        </div>
        <div>
          <label className={styles.label} htmlFor="login[password]">
            Password{" "}
          </label>
          <input value={password} onChange={handlePasswordChange} name="password" id="login[password]" />
        </div>
        {meta.error && <p className={styles.error}>{meta.error}</p>}
        <button className={styles.submit} type="submit">
          {meta.fetching ? "Logging in..." : "Login"}
        </button>
      </form>
    </section>
  );
}

export default withAccess(LoginPage, false, "/profile");
