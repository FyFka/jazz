import DataSheet from "../../components/dataSheet/dataSheet";
import AnyData from "../../constants/anyData.json";
import withAccess from "../../hoc/withAccess";
import styles from "./any-data.module.css";

function AnyDataPage() {
  return (
    <div className={styles.anyDataPage}>
      <DataSheet data={AnyData} />
    </div>
  );
}

export default withAccess(AnyDataPage, true);
