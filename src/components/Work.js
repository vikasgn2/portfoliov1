import React from "react";
import "../styles/work.css";

function Work() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-heading">Projects</h2>
        <div className="all-items">
          <div className="item">
            <div className="right">
              <h2 className="project-title">FCC Projects</h2>
              <h3 className="project-sub-title">Responsive Web Design</h3>
              <p className="project-desc">
                This project was built as a part of FreeCodeCamp Certification.
                It involves HTML, CSS and Bootstrap as tools. The project link
                and further details are given below.
              </p>
              <div className="buttons">
                <a
                  href="https://github.com/vikasgn2/FCC_Projects"
                  target="_blank"
                  className="primary-btn"
                >
                  Know More
                </a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="right">
              <h2 className="project-title">Face-Mask-Detection</h2>
              <h3 className="project-sub-title">ML/AI Project</h3>
              <p className="project-desc">
                Detect if user is wearing a face mask or not. Built using python
                and its libraries.
              </p>
              <div className="buttons">
                <a
                  href="https://github.com/vikasgn2/Face-mask-detection"
                  target="_blank"
                  className="primary-btn"
                >
                  Know More
                </a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="right">
              <h2 className="project-title">Calc</h2>
              <h3 className="project-sub-title">Android App</h3>
              <p className="project-desc">
                Android app with all basic calculation functionalities built in
                using JavaScript library. Styling done using xml. Built using
                java and android studio.
              </p>
              <div className="buttons">
                <a
                  href="https://github.com/vikasgn2/Calc"
                  target="_blank"
                  className="primary-btn"
                >
                  Know More
                </a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="right">
              <h2 className="project-title">TABFYE</h2>
              <h3 className="project-sub-title">Take A Break For Your Eyes</h3>
              <p className="project-desc">
                Done as a mini project as a part of a team. It aims to combat
                eyestrain. Built using python and added GUI.
              </p>
              <div className="buttons">
                <a
                  href="https://github.com/Karthikeshwar1/TABFYE"
                  target="_blank"
                  className="primary-btn"
                >
                  Know More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
