import { useEffect } from "react";
import { getReadme } from "../../api/readme";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { setInfo } from "../../store/slices/info";
import styles from "./info.module.css";

export default function InfoPage() {
  const info = useAppSelector((state) => state.info.value);
  const dispatch = useAppDispatch();

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
