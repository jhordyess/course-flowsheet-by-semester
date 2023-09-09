import './style.css'

import { getAllCourseIds, getCoursesAsRows, getAllSemesterNames } from '@/lib/semesterManager'

import THead from './THead'
import TBody from './TBody'

export default function FlowSheet() {
  const semesterNames = getAllSemesterNames()
  const coursesIds = getAllCourseIds()
  const coursesAsRows = getCoursesAsRows()

  return (
    <table>
      <THead semesterNames={semesterNames} />
      <TBody coursesAsRows={coursesAsRows} coursesIds={coursesIds} />
    </table>
  )
}
