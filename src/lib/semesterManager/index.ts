import type { Semester, rowSemester } from './types'

/**
 * Finds all courses that have the given course as a prerequisite.
 * @param allSemesters - An array of all semesters.
 * @param courseId - The ID of the course to find postrequisites for.
 * @returns An array of course IDs that have the given course as a prerequisite.
 */
export const findPostrequisites = (allSemesters: Semester[], courseId: string): string[] => {
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

/**
 * Finds the prerequisites for a given course.
 * @param allSemesters - An array of all semesters.
 * @param courseId - The ID of the course to find prerequisites for.
 * @returns An array of course IDs that are prerequisites for the given course.
 */
export const findPrerequisites = (allSemesters: Semester[], courseId: string): string[] => {
  const targetCourse = allSemesters
    .flatMap(semester => semester.courses)
    .find(course => course.id === courseId)
  return targetCourse?.prerequisites ?? []
}

/**
 * Gets all course IDs from an array of semesters.
 * @param allSemesters - An array of all semesters.
 * @returns An object with all course IDs as keys and empty strings as values.
 */
export const getAllCourseIds = (allSemesters: Semester[]): Record<string, string> => {
  const allCourseIds: Record<string, string> = {}
  allSemesters.forEach(semester => {
    semester.courses.forEach(course => {
      allCourseIds[course.id] = ''
    })
  })
  return allCourseIds
}

/**
 * Gets the maximum number of courses in any semester.
 * @param allSemesters - An array of all semesters.
 * @returns The maximum number of courses in any semester.
 */
export const getMaxCoursesInAnySemester = (allSemesters: Semester[]): number => {
  return allSemesters.reduce((max, semester) => {
    return Math.max(max, semester.courses.length)
  }, 0)
}

/**
 * Gets the names of all semesters.
 * @param allSemesters - An array of all semesters.
 * @returns An array of semester names.
 */
export const getAllSemesterNames = (allSemesters: Semester[]): string[] => {
  return allSemesters.map(semester => semester.name)
}

/**
 * Gets an array of semesters, where each semester is represented as an array of course rows.
 * @param allSemesters - An array of all semesters.
 * @returns An array of semesters, where each semester is represented as an array of course rows.
 */
export const getCoursesAsRows = (allSemesters: Semester[]): rowSemester => {
  const maxCoursesInAnySemester = getMaxCoursesInAnySemester(allSemesters)
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
