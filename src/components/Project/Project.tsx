import React from "react";
import { IProject } from "../Projects/Projects";
import "./Project.scss";

export default function Project(props: { project: IProject }) {
  return (
    <div className="project">
      <div>
        <h2>{props.project.name}</h2>
        <p>{props.project.description}</p>
      </div>
      <div>
        <p>stuff</p>
      </div>
    </div>
  );
}
