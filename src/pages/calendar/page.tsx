import Controls from "../../components/controls/controls";
import withAccess from "../../hoc/withAccess";
import styles from "./calendar.module.css";

function CalendarPage() {
  return (
    <section>
      <div className={styles.controlsContainer}>
        <Controls />
      </div>
    </section>
  );
}

export default withAccess(CalendarPage, true);
