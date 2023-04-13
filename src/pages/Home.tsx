import Flowsheet from "@components/Flowsheet";
import * as React from "react";

export default function () {
  return (
    <div className="container">
      <main>
        <h1>Front-end developer curriculum</h1>
        <Flowsheet />
      </main>
      <footer>
        Made with 💪 by&nbsp;
        <a href="https://www.jhordyess.com" target="_blank">
          Jhordyess
        </a>
        <br />
        <a
          href="https://github.com/jhordyess/course-flowsheet-by-semester"
          target="_blank"
        >
          👉 View on GitHub
        </a>
      </footer>
    </div>
  );
}
