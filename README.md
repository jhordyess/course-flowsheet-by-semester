# Course Flowsheet by Semester

This project represents one of my first steps in programming, approximately in  2017 🤓.

Create a dynamic course flowsheet by semester and identify all prerequisites or post requisite.

It's possible to create a dynamic course flowsheet by semester, defining the semester, courses names, and courses prerequisites(post requisites will be found automatically).

Using mouseover dynamically, the prerequisites and post requisites change of style.

To test your own course flowsheet, just modify the [semesters.json](/src/data/example/semesters.json) file.

This is the result using some example: <https://jhordyess.github.io/course-flowsheet-by-semester/>

## Dockerize

Run the `docker.sh` file, it will create a new container image with the tag `jhordyess/coflow` and run it; so you can visit [http://localhost](http://localhost).

```sh
bash docker.sh
```

Run for PowerShell `docker.ps1`.

```ps1
& docker.ps1
```

## Dev Info

- JavaScript library: [Meta - React](https://reactjs.org/)
- Font family: [Google fonts - Lato, designed by Łukasz Dziedzic](https://fonts.google.com/specimen/Lato)
- Module bundler: [OpenJS Foundation - Webpack](https://webpack.js.org/)
- Server Environment: [OpenJS Foundation - Node.js](https://nodejs.org/)
- Platform: [Docker](https://www.docker.com/)
- Web Server: [NGINX](https://www.nginx.com/)
- [VSCode](https://code.visualstudio.com/) with [remote containers](https://code.visualstudio.com/docs/remote/containers)

## Evolution from jQuery

The original idea was started with jQuery when I starting in programming 😌, see the code and example: <https://github.com/jhordyess/course-flowsheet-by-semester-jquery>

Now uses React with TypeScript, bundle with Webpack.

## License

© 2022 [Jhordyess](https://github.com/jhordyess). Under the [MIT](https://choosealicense.com/licenses/mit/) license.

---

Made with 💪 by [Jhordyess](https://www.jhordyess.com/)
