import type { Tsemesters, rowSemester } from "./types";

const fetchSemesters = async (): Promise<Tsemesters[]> => {
  try {
    const response = await fetch("/semesters.json");
    const json: Tsemesters[] = await response.json();
    return json;
  } catch {
    return [];
  }
};

const semesters: Tsemesters[] = await fetchSemesters();

// Find postrequisites courses
export const findPostrequisites = (id: string) => {
  const out: string[] = Array();
  semesters.forEach((semester) => {
    semester.courses.forEach((course) => {
      if (typeof course.prerequisites != "undefined")
        course.prerequisites.find((prerequisite) => {
          if (prerequisite === id) out.push(course.id);
        });
    });
  });
  return out;
};

// Find prerequisites courses
export const findPrerequisites = (id: string) => {
  let out: string[] = Array();
  semesters.forEach((semester) => {
    semester.courses.forEach((course) => {
      if (course.id === id && typeof course.prerequisites != "undefined") {
        out = course.prerequisites;
      }
    });
  });
  return out;
};

export const getIdsObjt = (): Record<string, string> => {
  let out: Record<string, string> = {};
  semesters.forEach((semester) => {
    semester.courses.forEach((course) => {
      out[course.id] = "";
    });
  });
  return out;
};

// The maximum number of courses per semester is required
const getMaxCourses = (): number => {
  let max = 0;
  semesters.forEach((semester) => {
    let len = semester.courses.length;
    max = max > len ? max : len;
  });
  return max;
};

// Get semesters
export const getSemesters = (): string[] =>
  semesters.map((semester) => semester.name);

export const getCoursesAsRows = () => {
  let row: rowSemester = [[]];
  for (let i = 0; i < getMaxCourses(); i++) {
    let obj = [];
    for (let j = 0; j < semesters.length; j++) {
      const course = semesters[j].courses[i];
      obj.push(
        typeof course != "undefined"
          ? { id: course.id, name: course.name, empty: false }
          : { id: "", name: "", empty: true }
      );
    }
    row.push(obj);
  }
  return row;
};
