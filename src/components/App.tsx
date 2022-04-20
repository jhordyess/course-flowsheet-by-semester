import * as React from "react";
import "./App.css";

import { getIdsObjt, getCoursesAsRows, getSemesters } from "./../data/utils";

import TableCell from "./TableCell";

const THead = () => (
  <thead>
    <tr>
      {getSemesters().map((semester, index) => (
        <th key={index}>{semester}</th>
      ))}
    </tr>
  </thead>
);

const TBody = () => {
  const [tdsClass, setTdsClass] = React.useState<any>(getIdsObjt());

  return (
    <tbody>
      {getCoursesAsRows().map((items, index) => (
        <tr key={index}>
          {items.map((item, index) =>
            item.empty ? (
              <td className="td_empty" key={index}></td>
            ) : (
              <TableCell
                id={item.id}
                tdsClass={tdsClass}
                setTdsClass={setTdsClass}
                text={item.name}
                tdClass={tdsClass[item.id]}
                key={index}
              />
            )
          )}
        </tr>
      ))}
    </tbody>
  );
};

function App() {
  return (
    <div className="container">
      <header>CURRICULUM</header>
      <table>
        <THead />
        <TBody />
      </table>
      <footer>
        Made with 💪 by{" "}
        <a href="https://jhordyess.com" target="_blank" rel="noreferrer">
          Jhordyess
        </a>
      </footer>
    </div>
  );
}

export default App;
