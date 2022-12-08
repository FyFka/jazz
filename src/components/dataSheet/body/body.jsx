import Cell from "../cell/cell";

export default function Body({ body, onCellDown, onCellMouseOver, selectedZone, onCellEdit }) {
  return (
    <tbody>
      {body.map((row, rowIdx) => (
        <tr key={row[0].key}>
          {row.map(({ key, value }, idx) => (
            <Cell
              key={key}
              sticky={idx === 0}
              onCellDown={onCellDown}
              onCellMouseOver={onCellMouseOver}
              onCellEdit={onCellEdit}
              pos={{ row: rowIdx, col: idx }}
              selectedZone={selectedZone}
              value={value}
            ></Cell>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
