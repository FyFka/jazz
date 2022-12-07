import Body from "./body/body";
import Head from "./head/head";
import { useEffect, useState } from "react";
import Island from "../island/island";
import { IPos, ISelectedZone } from "../../types/ISelectedZone";
import { IAnyData } from "../../types/IAnyData";
import styles from "./dataSheet.module.css";

interface IDataSheetProps {
  data: IAnyData[][];
}

export default function DataSheet({ data }: IDataSheetProps) {
  const [anyData, setAnyData] = useState(data);
  const [selecting, setSelecting] = useState(false);
  const [selectedZone, setSelectedZone] = useState<ISelectedZone>({
    start: { row: 0, col: 0 },
    end: { row: 0, col: 0 },
  });

  useEffect(() => {
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const handleEdit = (pos: IPos, value: string) => {
    const newData = [...anyData];
    newData[pos.row + 1][pos.col].value = value;
    setAnyData(newData);
  };

  const handleMouseUp = () => {
    setSelecting(false);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const handleCellDown = (pos: IPos) => {
    setSelecting(true);
    setSelectedZone({ end: pos, start: pos });
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleCellMouseOver = (pos: IPos) => {
    if (selecting) {
      setSelectedZone((prev) => ({ ...prev, end: pos }));
    }
  };

  const head = anyData[0];
  const body = anyData.slice(1);
  const totalRows = Math.abs(selectedZone.end.row - selectedZone.start.row) + 1;
  return (
    <div className={styles.dataSheet}>
      <Island>
        <h3 className={styles.info}>Selected rows: {totalRows}</h3>
        <h3 className={styles.info}>
          Total selected: {(Math.abs(selectedZone.end.col - selectedZone.start.col) + 1) * totalRows}
        </h3>
      </Island>
      <div className={styles.sheet}>
        <table className={styles.sheetInner}>
          <Head head={head} />
          <Body
            body={body}
            onCellDown={handleCellDown}
            onCellMouseOver={handleCellMouseOver}
            onCellEdit={handleEdit}
            selectedZone={selectedZone}
          />
        </table>
      </div>
    </div>
  );
}
