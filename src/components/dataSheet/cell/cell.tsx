import { IPos, ISelectedZone } from "../../../types/ISelectedZone";
import styles from "./cell.module.css";

interface ICellProps {
  sticky?: boolean;
  onCellDown: (pos: IPos) => void;
  onCellMouseOver: (pos: IPos) => void;
  onCellEdit: (pos: IPos, value: string) => void;
  pos: { row: number; col: number };
  selectedZone: ISelectedZone;
  value: string;
}

export default function Cell({
  value,
  sticky,
  onCellDown,
  onCellMouseOver,
  pos,
  selectedZone,
  onCellEdit,
}: ICellProps) {
  const handleCellClick = () => {
    onCellDown(pos);
  };

  const handleMouseOver = () => {
    onCellMouseOver(pos);
  };

  const handleCellEdit = (evt: React.ChangeEvent<HTMLInputElement>) => {
    onCellEdit(pos, evt.target.value);
  };

  const isHighlighted = (row: number, col: number) => {
    const posX = row >= selectedZone.start.row && row <= selectedZone.end.row;
    const negX = row <= selectedZone.start.row && row >= selectedZone.end.row;
    const posY = col >= selectedZone.start.col && col <= selectedZone.end.col;
    const negY = col <= selectedZone.start.col && col >= selectedZone.end.col;

    return (posX && posY) || (negX && posY) || (negX && negY) || (posX && negY);
  };

  const isHighlight = isHighlighted(pos.row, pos.col);
  return (
    <td
      onMouseDown={handleCellClick}
      onMouseOver={handleMouseOver}
      className={`${sticky ? styles.stickyCell : styles.cell} ${isHighlight ? styles.highlight : ""}`}
    >
      <input className={styles.edit} value={value} onChange={handleCellEdit} />
    </td>
  );
}
