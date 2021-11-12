import React from "react";
import image from "../images/undraw_social_friends_re_7uaa.svg";

function About() {
  return (
    <div id="about" className="about">
      <h1>About Me</h1>
      <img src={image} alt="About" width={400} height={400} className="im" />
      <p>
        Hi again, nice to see you here! I'm Vikas, currently a student pursuing
        my Bachelor's degree in Computer Science and Engineering from REVA
        University, Bangalore. I've always been around computers and electronic
        devices since childhood which led me down this path of pursuing the
        world of programming and computers. Now I try to build projects which
        are easy to use but also provide solutions which are accurate and
        effective.
      </p>

      <p>I am interested in:</p>
      <ul>
        <li>Web Development</li>
        <li>App Development</li>
        <li>ML/AI</li>
        <li>
          Collaborating and contributing to interesting projects in any domain
        </li>
        <li>Learning how things run under the hood in different softwares</li>
      </ul>

      <p>My toolbox includes</p>
      <table>
        <tr>
          <td>C</td>
          <td>C++</td>
          <td>Python</td>
        </tr>
        <tr>
          <td>HTML</td>
          <td>CSS</td>
          <td>JavaScript</td>
        </tr>
        <tr>
          <td>Gatsby</td>
          <td>React</td>
          <td>Figma</td>
        </tr>
        <tr>
          <td>GIT</td>
          <td>Android</td>
          <td>VSC</td>
        </tr>
      </table>
    </div>
  );
}

export default About;
