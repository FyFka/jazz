import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReadme } from "../../api/readme";
import { setInfo } from "../../store/slices/info";
import styles from "./info.module.css";

export default function InfoPage() {
  const info = useSelector((state) => state.info.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    (async () => {
      if (!info) {
        const readme = await getReadme(signal);
        dispatch(setInfo(readme));
      }
    })();

    return () => controller.abort();
  }, []);

  return (
    <section className={styles.infoPage}>
      <h2>Manifest</h2>
      <p className={styles.info}>{info}</p>
    </section>
  );
}
