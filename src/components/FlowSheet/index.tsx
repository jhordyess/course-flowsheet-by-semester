import './style.css'

import {
  getAllCourseIds,
  getCoursesAsRows,
  getAllSemesterNames,
  findPostrequisites,
  findPrerequisites
} from '@/lib/semesterManager'

import THead from './THead'
import TBody from './TBody'
import type { Semester } from '@/lib/semesterManager/types'
import { useEffect, useState } from 'react'

export default function FlowSheet() {
  const [semesters, setSemesters] = useState<Semester[]>([])

  const semesterNames = getAllSemesterNames(semesters)

  const coursesIds = getAllCourseIds(semesters)

  const coursesAsRows = getCoursesAsRows(semesters)

  const findPostrequisitesHOF = (courseId: string) => findPostrequisites(semesters, courseId)

  const findPrerequisitesHOF = (courseId: string) => findPrerequisites(semesters, courseId)

  useEffect(() => {
    async function fetchSemesters() {
      try {
        const response = await fetch('semesters.json')
        const json: Semester[] = await response.json()
        setSemesters(json)
      } catch {
        console.error('Error fetching semesters')
      }
    }
    fetchSemesters()
  }, [])

  return (
    <table>
      <THead semesterNames={semesterNames} />
      <TBody
        coursesAsRows={coursesAsRows}
        coursesIds={coursesIds}
        findPostrequisites={findPostrequisitesHOF}
        findPrerequisites={findPrerequisitesHOF}
      />
    </table>
  )
}
