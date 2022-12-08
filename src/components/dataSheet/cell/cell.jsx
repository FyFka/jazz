import styles from "./cell.module.css";

export default function Cell({ value, sticky, onCellDown, onCellMouseOver, pos, selectedZone, onCellEdit }) {
  const handleCellClick = () => {
    onCellDown(pos);
  };

  const handleMouseOver = () => {
    onCellMouseOver(pos);
  };

  const handleCellEdit = (evt) => {
    onCellEdit(pos, evt.target.value);
  };

  const isHighlighted = (row, col) => {
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
