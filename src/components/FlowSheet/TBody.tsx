import type { rowSemester } from '@/lib/semesterManager/types'
import { useState } from 'react'

export default function TBody({
  coursesIds,
  coursesAsRows,
  forEachDependencies
}: {
  coursesIds: Record<string, string>
  coursesAsRows: rowSemester
  forEachDependencies: (
    targetCourseId: string,
    forEachRequiredFor: (courseId: string) => void,
    forEachRequires: (courseId: string) => void
  ) => void
}) {
  const [cellClassMap, setCellClassMap] = useState<Record<string, string>>(coursesIds)

  const updateCellClassMap = (
    targetCourseId: string,
    requiredForClassName: string,
    requiresClassName: string
  ) => {
    forEachDependencies(
      targetCourseId,
      (courseId: string) => {
        cellClassMap[courseId] = requiredForClassName
      },
      (courseId: string) => {
        cellClassMap[courseId] = requiresClassName
      }
    )
  }

  const handleMouseEnter = (courseId: string) => {
    // add all highlights
    updateCellClassMap(courseId, 'td_postreq', 'td_prereq')

    // highlight the current course
    cellClassMap[courseId] = 'td_hover'

    setCellClassMap({ ...cellClassMap })
  }

  const handleMouseLeave = (courseId: string) => {
    // remove all highlights
    updateCellClassMap(courseId, '', '')

    // highlight the current course
    cellClassMap[courseId] = ''

    setCellClassMap({ ...cellClassMap })
  }

  return (
    <tbody>
      {coursesAsRows.map((items, index) => (
        <tr key={index}>
          {items.map(({ id, name }, index) =>
            !(id && name) ? (
              <td className="td_empty" key={index}></td>
            ) : (
              <td
                className={cellClassMap[id]}
                key={index}
                onMouseEnter={() => handleMouseEnter(id)}
                onMouseLeave={() => handleMouseLeave(id)}
              >
                {name}
              </td>
            )
          )}
        </tr>
      ))}
    </tbody>
  )
}
