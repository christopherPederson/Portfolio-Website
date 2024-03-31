import { useState, useEffect } from "react";
import Project from "./Project";
import "./Slice.css";
import { v4 as uuidv4 } from "uuid";

export default function Slice(props) {
    let data = props.sliceData.projects;

    const generateProjects = () => {
        return data.map((element, index) => {
            return <Project key={uuidv4()} uid={uuidv4()} projectData={data[index]} />;
        });
    };

    return <div className="slice">{generateProjects()}</div>;
}
