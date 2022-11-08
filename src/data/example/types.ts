type Tsemesters = {
  name: string;
  courses: semester[];
};

type semester = {
  id: string;
  name: string;
  prerequisites: string[] | undefined;
};

type rowSemester = [semesterB[]];

type semesterB = {
  id: string | undefined;
  name: string | undefined;
  empty: boolean;
};

export { Tsemesters, semester, rowSemester, semesterB };
