import React, { Component } from "react";

import ProjectForm from "./ProjectForm/ProjectForm";

class Project extends Component {
  render() {
    return (
      <div>
        <h1>Available Projects</h1>
        <ProjectForm />
        <ul>
          <li>
            <h3>Project name</h3>
            <h4>Goals:</h4>
            <ul>
              <li>Goal 1</li>
              <li>Goal 2</li>
              <li>Goal 3</li>
            </ul>
            <h4>Countries</h4>
            <ul>
              <li>Macedonia</li>
              <li>Slovenia</li>
              <li>Serbia</li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default Project;
