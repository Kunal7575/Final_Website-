import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">

      <div className="about">
        <h2> Kunal Sharma</h2>
        <div className="prompt">
          <p>I am an inquisitive software developer, who constantly wants to learn.
I am passionate about coding and always keen to acquire new skills. I
believe that I have good time management skills and am consistent in
my work. </p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1>EXTRA-CURRICULAR EXPERIENCE</h1>
        <ol className="list">
          <li className="item">
            <h2>JEE MAINS</h2>
            <span className="item1">
            Cracked JEE mains by securing the top 5% rank out of 1.1 million students
            </span>
          </li>
          <li className="item">
          <h2>  MUN (MODEL UNITED NATIONS) </h2>
            <span className="item1">
            Debate competition, representing South Korea.
            </span>
          </li>
          <li className="item">
          <h2>SCIENCE OLYMPIAD</h2>
            <span className="item1">
            Secured 7th position in the Olympiad.
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;




