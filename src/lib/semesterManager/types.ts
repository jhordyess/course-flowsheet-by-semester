export type Semester = {
  name: string
  courses: Course[]
}

type Course = {
  id: string
  name: string
  requires?: string[]
}

export type rowSemester = Array<
  Array<{
    id?: string
    name?: string
  }>
>
