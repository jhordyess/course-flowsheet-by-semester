import type { Semester, rowSemester } from './types'

export const forEachDependencies = (
  allSemesters: Semester[],
  targetCourseId: string,
  forEachRequiredFor: (courseId: string) => void,
  forEachRequires: (courseId: string) => void
): void => {
  allSemesters
    .flatMap(semester => semester.courses)
    .forEach(course => {
      if (course.requires?.includes(targetCourseId)) forEachRequiredFor(course.id)
      if (course.id === targetCourseId)
        course.requires?.forEach(courseId => forEachRequires(courseId))
    })
}

/**
 * Gets all course IDs from an array of semesters.
 * @param allSemesters - An array of all semesters.
 * @returns An object with all course IDs as keys and empty strings as values.
 */
export const getAllCourseIds = (allSemesters: Semester[]): Record<string, string> => {
  const courseIdsArr = allSemesters.flatMap(semester => semester.courses).map(({ id }) => [id, ''])
  return Object.fromEntries(courseIdsArr)
}

/**
 * Gets the names of all semesters.
 * @param allSemesters - An array of all semesters.
 * @returns An array of semester names.
 */
export const getAllSemesterNames = (allSemesters: Semester[]): string[] =>
  allSemesters.map(semester => semester.name)

/**
 * Gets the maximum number of courses in any semester.
 * @param allSemesters - An array of all semesters.
 * @returns The maximum number of courses in any semester.
 */
const getMaxCoursesInAnySemester = (allSemesters: Semester[]): number =>
  allSemesters.reduce((max, semester) => Math.max(max, semester.courses.length), 0)

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
        id: targetCourse?.id ?? undefined,
        name: targetCourse?.name ?? undefined
      }
    })
    courseRows.push(semesterCourses)
  }
  return courseRows
}
