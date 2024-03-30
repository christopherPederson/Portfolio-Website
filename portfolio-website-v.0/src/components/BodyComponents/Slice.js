import { useState, useEffect } from "react";
import Project from "./Project";
import "./Slice.css";

export default function Slice(props) {
    let data = props.sliceData.projects;

    const generateProjects = () => {
        return data.map((element, index) => {
            return <Project key={index} projectData={data[index]} />;
        });
    };

    return <div className="slice">{generateProjects()}</div>;
}
