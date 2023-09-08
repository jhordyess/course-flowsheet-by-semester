export type Semester = {
  name: string
  courses: Course[]
}

type Course = {
  id: string
  name: string
  prerequisites: string[] | undefined
}

export type rowSemester = [
  {
    id: string
    name: string
    empty: boolean
  }[]
]
