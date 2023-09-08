import type { rowSemester } from '@/lib/semesterManager/types'
import TableCell from './TableCell'
import { useState } from 'react'

export default function TBody({
  coursesIds,
  coursesAsRows
}: {
  coursesIds: Record<string, string>
  coursesAsRows: rowSemester
}) {
  const [cellClassMap, setCellClassMap] = useState<Record<string, string>>(coursesIds)

  return (
    <tbody>
      {coursesAsRows.map((items, index) => (
        <tr key={index}>
          {items.map((item, index) =>
            item.empty ? (
              <td className="td_empty" key={index}></td>
            ) : (
              <TableCell
                courseId={item.id}
                cellClass={cellClassMap[item.id]}
                key={index}
                text={item.name}
                cellClassMap={cellClassMap}
                setCellClassMap={setCellClassMap}
              />
            )
          )}
        </tr>
      ))}
    </tbody>
  )
}
