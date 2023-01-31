import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "../styles/TechnicalSkills.css";
function TechnicalSkills() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#5e3521">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="File handling, OOPs, GUI, Exception handling"
          iconStyle={{ background: "#5e3521", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Languages:
          </h3>
          <strong className="item">  C, C++, Java, JavaScript, HTML, CSS 

</strong>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="client
          satisfaction, error-free and clear
          code
          "
          iconStyle={{ background: "#5e3521", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Development:
          </h3>

          {/* <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4> */}

          <strong className="item" > Object Oriented Programming, 
Data Structures and Algorithms, Code Reviews, 
and Debuggers.</strong>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="provided ready-made components or solutions that are customized in order to speed up development"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Framework:
          </h3>
          {/* <h4 className="vertical-timeline-element-subtitle">
          React, Node.js, Bootstrap
          </h4> */}
          <strong className="item"> React, Node.js, Bootstrap</strong>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="allowed me to streamline and automate different software development tasks in order to improve efficiency and performance"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Dev Tools:
          </h3>
          {/* <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4> */}
          <strong className="item">
          VS Code, Visual Studio, GitHub,
NetBeans, Code Blocks.

          </strong>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Added value to my education"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Other Skills:
          </h3>
          {/* <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4> */}
          <strong className="item">
          VHDL, Solid-works, Microsoft Word, AutoCAD
Arduino,MARS

          </strong>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default TechnicalSkills;