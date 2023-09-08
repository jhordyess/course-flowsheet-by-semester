import type { Semester, rowSemester } from './types'

const fetchSemesters = async (): Promise<Semester[]> => {
  try {
    const response = await fetch('/semesters.json')
    const json: Semester[] = await response.json()
    return json
  } catch {
    return []
  }
}

const allSemesters: Semester[] = await fetchSemesters()

export const findPostrequisites = (courseId: string): string[] => {
  const postrequisiteCourses: string[] = []
  allSemesters.forEach(semester => {
    semester.courses.forEach(targetCourse => {
      if (targetCourse.prerequisites?.includes(courseId)) {
        postrequisiteCourses.push(targetCourse.id)
      }
    })
  })
  return postrequisiteCourses
}

export const findPrerequisites = (courseId: string): string[] => {
  const targetCourse = allSemesters
    .flatMap(semester => semester.courses)
    .find(course => course.id === courseId)
  return targetCourse?.prerequisites ?? []
}

export const getAllCourseIds = (): Record<string, string> => {
  const allCourseIds: Record<string, string> = {}
  allSemesters.forEach(semester => {
    semester.courses.forEach(course => {
      allCourseIds[course.id] = ''
    })
  })
  return allCourseIds
}

export const getMaxCoursesInAnySemester = (): number => {
  return allSemesters.reduce((max, semester) => {
    return Math.max(max, semester.courses.length)
  }, 0)
}

export const getAllSemesterNames = (): string[] => {
  return allSemesters.map(semester => semester.name)
}

export const getCoursesAsRows = (): rowSemester => {
  const maxCoursesInAnySemester = getMaxCoursesInAnySemester()
  const courseRows: rowSemester = [[]]
  for (let i = 0; i < maxCoursesInAnySemester; i++) {
    const semesterCourses = allSemesters.map(semester => {
      const targetCourse = semester.courses[i]
      return {
        id: targetCourse?.id ?? '',
        name: targetCourse?.name ?? '',
        empty: targetCourse === undefined
      }
    })
    courseRows.push(semesterCourses)
  }
  return courseRows
}
