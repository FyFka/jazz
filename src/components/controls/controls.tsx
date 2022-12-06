import styles from "./controls.module.css";
import Search from "./search/search";

export default function Controls() {
  return (
    <div className={styles.controls}>
      <button>Add</button>
      <button>Refresh</button>
      <Search />
    </div>
  );
}
