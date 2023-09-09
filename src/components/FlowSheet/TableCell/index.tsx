import './style.css'

type TableCellProps = {
  courseId: string
  text: string
  cellClass: string
  cellClassMap: Record<string, string>
  setCellClassMap: (cellClassMap: Record<string, string>) => void
  findPostrequisites: (courseId: string) => string[]
  findPrerequisites: (courseId: string) => string[]
}

export default function TableCell({
  courseId,
  text,
  cellClass,
  cellClassMap,
  setCellClassMap,
  findPostrequisites,
  findPrerequisites
}: TableCellProps) {
  const handleMouseEnter = () => {
    highlightPostrequisites(courseId, cellClassMap, setCellClassMap, findPostrequisites)
    highlightCurrentCourse(courseId, cellClassMap, setCellClassMap)
    highlightPrerequisites(courseId, cellClassMap, setCellClassMap, findPrerequisites)
  }

  const handleMouseLeave = () => {
    clearPostrequisites(courseId, cellClassMap, setCellClassMap, findPostrequisites)
    clearCurrentCourse(courseId, cellClassMap, setCellClassMap)
    clearPrerequisites(courseId, cellClassMap, setCellClassMap, findPrerequisites)
  }

  return (
    <td className={cellClass} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {text}
    </td>
  )
}

/**
 * Highlights all postrequisite courses for a given course.
 * @param courseId - The ID of the course to find postrequisites for.
 * @param cellClassMap - The current map of cell classes.
 * @param setCellClassMap - The function to update the cell class map.
 * @param  findPostrequisites - The function to find postrequisite courses for a given course.
 */
function highlightPostrequisites(
  courseId: string,
  cellClassMap: Record<string, string>,
  setCellClassMap: (cellClassMap: Record<string, string>) => void,
  findPostrequisites: (courseId: string) => string[]
) {
  const postrequisiteCourses = findPostrequisites(courseId)
  postrequisiteCourses.forEach(postrequisiteCourseId => {
    cellClassMap[postrequisiteCourseId] = 'td_postreq'
  })
  setCellClassMap({ ...cellClassMap })
}

/**
 * Highlights the current course.
 * @param courseId - The ID of the current course.
 * @param cellClassMap - The current map of cell classes.
 * @param setCellClassMap - The function to update the cell class map.
 */
function highlightCurrentCourse(
  courseId: string,
  cellClassMap: Record<string, string>,
  setCellClassMap: (cellClassMap: Record<string, string>) => void
) {
  cellClassMap[courseId] = 'td_hover'
  setCellClassMap({ ...cellClassMap })
}

/**
 * Highlights all prerequisites for a given course.
 * @param courseId - The ID of the course to find prerequisites for.
 * @param cellClassMap - The current map of cell classes.
 * @param setCellClassMap - The function to update the cell class map.
 * @param findPrerequisites - The function to find prerequisites for a given course.
 */
function highlightPrerequisites(
  courseId: string,
  cellClassMap: Record<string, string>,
  setCellClassMap: (cellClassMap: Record<string, string>) => void,
  findPrerequisites: (courseId: string) => string[]
) {
  const prerequisites = findPrerequisites(courseId)
  prerequisites.forEach(prerequisiteCourseId => {
    cellClassMap[prerequisiteCourseId] = 'td_prereq'
  })
  setCellClassMap({ ...cellClassMap })
}

/**
 * Clears all postrequisite courses for a given course.
 * @param courseId - The ID of the course to clear postrequisites for.
 * @param cellClassMap - The current map of cell classes.
 * @param setCellClassMap - The function to update the cell class map.
 * @param findPostrequisites - The function to find postrequisite courses for a given course.
 */
function clearPostrequisites(
  courseId: string,
  cellClassMap: Record<string, string>,
  setCellClassMap: (cellClassMap: Record<string, string>) => void,
  findPostrequisites: (courseId: string) => string[]
) {
  const postrequisiteCourses = findPostrequisites(courseId)
  postrequisiteCourses.forEach(postrequisiteCourseId => {
    cellClassMap[postrequisiteCourseId] = ''
  })
  setCellClassMap({ ...cellClassMap })
}

/**
 * Clears the class for the current course.
 * @param courseId - The ID of the current course.
 * @param cellClassMap - The current map of cell classes.
 * @param setCellClassMap - The function to update the cell class map.
 */
function clearCurrentCourse(
  courseId: string,
  cellClassMap: Record<string, string>,
  setCellClassMap: (cellClassMap: Record<string, string>) => void
) {
  cellClassMap[courseId] = ''
  setCellClassMap({ ...cellClassMap })
}

/**
 * Clears all prerequisites for a given course.
 * @param courseId - The ID of the course to clear prerequisites for.
 * @param cellClassMap - The current map of cell classes.
 * @param setCellClassMap - The function to update the cell class map.
 * @param findPrerequisites - The function to find prerequisites for a given course.
 */
function clearPrerequisites(
  courseId: string,
  cellClassMap: Record<string, string>,
  setCellClassMap: (cellClassMap: Record<string, string>) => void,
  findPrerequisites: (courseId: string) => string[]
) {
  const prerequisites = findPrerequisites(courseId)
  prerequisites.forEach(prerequisiteCourseId => {
    cellClassMap[prerequisiteCourseId] = ''
  })
  setCellClassMap({ ...cellClassMap })
}
