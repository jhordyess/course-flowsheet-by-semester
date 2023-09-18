# Course Flowsheet by Semester

This project represents one of my first steps in programming, approximately in  2017 🤓.

React app for visualizing your academic path by semester, identifying course dependencies ('requires' and 'required for').

## Description

This project was born from the need to visualize the courses of my career by semester, identifying the dependencies between them.

When you hover over a course, you can see the courses that require it and the courses that it requires. This is useful to know which courses you can take in the next semester.

The data is loaded from a [JSON file](./public/semesters.json), which contains the courses and their dependencies, feel free to modify it to test your own course flowsheet.

### Technologies Used

- JS Libraries: [ReactJS](https://reactjs.org/)
- Programming Language: [TypeScript](https://www.typescriptlang.org/)
- Font: [Lato, designed by Łukasz Dziedzic](https://fonts.google.com/specimen/Lato)
- Build tool: [Vite](https://vitejs.dev/)
- Hosting: [GitHub Pages](https://pages.github.com/)
- Dev Environment: [VSCode](https://code.visualstudio.com/) with [dev containers](https://code.visualstudio.com/docs/remote/containers) in [Zorin OS](https://zorinos.com/)

### Demo

You can see the demo for a frontend developer career here: <https://jhordyess.github.io/course-flowsheet-by-semester/>

### Screenshot

![Home](https://res.cloudinary.com/jhordyess/image/upload/v1675257618/course-flowsheet-by-semester/home.png_ulf0pr.png)

### Evolution from jQuery

The original idea was started with jQuery when I starting in programming 😌, see the code and example: <https://github.com/jhordyess/course-flowsheet-by-semester-jquery>

## How to use

1. Clone the repository:

```bash
git clone git@github.com:jhordyess/course-flowsheet-by-semester.git
```

2. Open the project folder:

```bash
cd course-flowsheet-by-semester
```

3. Install the dependencies:

```bash
yarn
```

4. Run the project:

```bash
yarn dev
```

5. Open the browser at <http://localhost:5173/course-flowsheet-by-semester/>

6. Modify the [semesters.json](./public/semesters.json) file to test your own course flowsheet.

## How to use with VSCode dev containers

You can use the VSCode dev containers to run the project in a containerized environment.

You need to have installed [Docker](https://www.docker.com/) and [VSCode](https://code.visualstudio.com/), and the [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension.

1. Clone the repository:

```bash
git clone git@github.com:jhordyess/course-flowsheet-by-semester.git
```

2. Open the project with VSCode:

```bash
code course-flowsheet-by-semester
```

3. Open the command palette and select the option `Dev Containers: Reopen in Container`.

4. Wait for the container to be built and the project to be started.

5. Open the terminal in VSCode and run the project:

```bash
yarn dev
```

6. Open the browser at <http://localhost:5173/course-flowsheet-by-semester/>

7. Modify the [semesters.json](./public/semesters.json) file to test your own course flowsheet.

## To-Do

- Change to developer roadmaps 🤔
- Make the design responsive.
- Add more features 🤔

## Contribution

If you would like to contribute to the project, open an issue or make a pull request on the repository.

## License

© 2021> [Jhordyess](https://github.com/jhordyess). Under the [MIT](https://choosealicense.com/licenses/mit/) license. See the [LICENSE](./LICENSE) file for more details.

---

Made with 💪 by [Jhordyess](https://www.jhordyess.com/)
