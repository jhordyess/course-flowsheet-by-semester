import { findPostrequisites, findPrerequisites } from '@/lib/semesterManager'
import './style.css'

type TableCellProps = {
  courseId: string
  text: string
  cellClass: string
  cellClassMap: Record<string, string>
  setCellClassMap: (tdsClass: Record<string, string>) => void
}

export default function TableCell({
  courseId,
  text,
  cellClass,
  cellClassMap,
  setCellClassMap
}: TableCellProps) {
  const handleMouseEnter = () => {
    highlightPostrequisites(courseId, cellClassMap, setCellClassMap)
    highlightCurrentCourse(courseId, cellClassMap, setCellClassMap)
    highlightPrerequisites(courseId, cellClassMap, setCellClassMap)
  }

  const handleMouseLeave = () => {
    clearPostrequisites(courseId, cellClassMap, setCellClassMap)
    clearCurrentCourse(courseId, cellClassMap, setCellClassMap)
    clearPrerequisites(courseId, cellClassMap, setCellClassMap)
  }

  return (
    <td className={cellClass} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {text}
    </td>
  )
}

function highlightPostrequisites(
  courseId: string,
  cellClassMap: Record<string, string>,
  setCellClassMap: (tdsClass: Record<string, string>) => void
) {
  const postrequisiteCourses = findPostrequisites(courseId)
  postrequisiteCourses.forEach(postrequisiteCourseId => {
    cellClassMap[postrequisiteCourseId] = 'td_postreq'
  })
  setCellClassMap({ ...cellClassMap })
}

function highlightCurrentCourse(
  courseId: string,
  cellClassMap: Record<string, string>,
  setCellClassMap: (tdsClass: Record<string, string>) => void
) {
  cellClassMap[courseId] = 'td_hover'
  setCellClassMap({ ...cellClassMap })
}

function highlightPrerequisites(
  courseId: string,
  cellClassMap: Record<string, string>,
  setCellClassMap: (tdsClass: Record<string, string>) => void
) {
  const prerequisites = findPrerequisites(courseId)
  prerequisites.forEach(prerequisiteCourseId => {
    cellClassMap[prerequisiteCourseId] = 'td_prereq'
  })
  setCellClassMap({ ...cellClassMap })
}

function clearPostrequisites(
  courseId: string,
  cellClassMap: Record<string, string>,
  setCellClassMap: (tdsClass: Record<string, string>) => void
) {
  const postrequisiteCourses = findPostrequisites(courseId)
  postrequisiteCourses.forEach(postrequisiteCourseId => {
    cellClassMap[postrequisiteCourseId] = ''
  })
  setCellClassMap({ ...cellClassMap })
}

function clearCurrentCourse(
  courseId: string,
  cellClassMap: Record<string, string>,
  setCellClassMap: (tdsClass: Record<string, string>) => void
) {
  cellClassMap[courseId] = ''
  setCellClassMap({ ...cellClassMap })
}

function clearPrerequisites(
  courseId: string,
  cellClassMap: Record<string, string>,
  setCellClassMap: (tdsClass: Record<string, string>) => void
) {
  const prerequisites = findPrerequisites(courseId)
  prerequisites.forEach(prerequisiteCourseId => {
    cellClassMap[prerequisiteCourseId] = ''
  })
  setCellClassMap({ ...cellClassMap })
}
