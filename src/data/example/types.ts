export type Tsemesters = {
  name: string;
  courses: semester[];
};

export type semester = {
  id: string;
  name: string;
  prerequisites: string[] | undefined;
};

export type rowSemester = [semesterB[]];

export type semesterB = {
  id: string;
  name: string;
  empty: boolean;
};
