import semesters from "./semesters.js";
// Toggle class name on mouseover
const config_hover = (curr_id, prereq_ids = [], postreq_ids = []) => {
  $(`#${curr_id}`).hover(
    () => {
      $(`#${curr_id}`).toggleClass("td_hover");
      prereq_ids.forEach((prereq_id) => {
        $(`#${prereq_id}`).toggleClass("td_prereq");
      });
      postreq_ids.forEach((postreq_id) => {
        $(`#${postreq_id}`).toggleClass("td_postreq");
      });
    },
    () => {
      $(`#${curr_id}`).toggleClass("td_hover");
      prereq_ids.forEach((prereq_id) => {
        $(`#${prereq_id}`).toggleClass("td_prereq");
      });
      postreq_ids.forEach((postreq_id) => {
        $(`#${postreq_id}`).toggleClass("td_postreq");
      });
    }
  );
};
// Find postrequisites courses
const find_postrequisites = (id) => {
  let out = [];
  semesters.forEach((semester) => {
    semester.courses.forEach((course) => {
      try {
        course.prerequisites.find((prerequisite) => {
          if (prerequisite === id) {
            out.push(course.id);
          }
        });
      } catch (error) {}
    });
  });
  return out;
};
// The maximum number of courses per semester is required
const get_max_courses = () => {
  let max = 0;
  semesters.forEach((semester) => {
    let len = semester.courses.length;
    max = max > len ? max : len;
  });
  return max;
};
let tbody = "",
  thead = "";
// Composing tbody, like a transposed matrix
for (let i = 0; i < get_max_courses(); i++) {
  tbody += `<tr>`;
  for (let j = 0; j < semesters.length; j++) {
    try {
      let course = semesters[j].courses[i];
      tbody += `<td id='${course.id}'> ${course.name}</td>`;
    } catch (error) {
      tbody += `<td class='td_empty'></td>`;
    }
  }
  tbody += `</tr>`;
}
// Composing thead
semesters.forEach((semester) => {
  thead += `<th>${semester.name}</th>;`;
});
// Showing
$("#iTable").append(`<thead><tr>${thead}</tr></thead><tbody>${tbody}</tbody>`);
// Add the hover effect
semesters.forEach((semester) => {
  semester.courses.forEach((course) => {
    config_hover(
      course.id,
      course.prerequisites,
      find_postrequisites(course.id)
    );
  });
});
