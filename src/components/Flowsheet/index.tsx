import * as React from "react";
import "./style.css";

import { getIdsObjt, getCoursesAsRows, getSemesters } from "@data/example";

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

export default function () {
  return (
    <table>
      <THead />
      <TBody />
    </table>
  );
}
