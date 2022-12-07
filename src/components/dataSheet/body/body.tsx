import { IAnyData } from "../../../types/IAnyData";
import { IPos, ISelectedZone } from "../../../types/ISelectedZone";
import Cell from "../cell/cell";

interface IBodyProps {
  body: IAnyData[][];
  onCellDown: (pos: IPos) => void;
  onCellMouseOver: (pos: IPos) => void;
  onCellEdit: (pos: IPos, value: string) => void;
  selectedZone: ISelectedZone;
}

export default function Body({ body, onCellDown, onCellMouseOver, selectedZone, onCellEdit }: IBodyProps) {
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
