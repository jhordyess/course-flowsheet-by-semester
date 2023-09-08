import "./style.css";

import { getIdsObjt, getCoursesAsRows, getSemesters } from "@/data/example";

import TableCell from "./TableCell";
import { useState } from "react";

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
  const [tdsClass, setTdsClass] = useState<Record<string, string>>(
    getIdsObjt()
  );

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
