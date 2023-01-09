function view() {
  html = /*HTML*/ `
        <table>
            ${model.mazeModel.rows
              .map(
                (row, rowIndex) => /*HTML*/ `
            <tr>
                ${row
                  .map(
                    (col, colIndex) => /*HTML*/ `
                <td onclick="change(${rowIndex}, ${colIndex})" class="${getClass(
                      col
                    )}">
                </td>
                `
                  )
                  .join("")}
            </tr>
            `
              )
              .join("")}
        </table>
    `;
  model.appdiv.innerHTML = html;
}

function getClass(index) {
  if (index.isHigh && index.isWide) return "room";
  const highWall = index.isHigh ? "high " : "low ";
  const lowWall = index.isWide ? "wide " : "small ";
  const wall = index.isOpen ? "noWall " : "wall ";
  return highWall + lowWall + wall;
}

function change(rowIndex, colIndex) {
  cell = model.mazeModel.rows[rowIndex][colIndex];
  if (cell.isOpen === undefined) return;
  cell.isOpen = !cell.isOpen;
  view();
}
