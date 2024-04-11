import { useState, useEffect } from "react";
import Project from "./Project";
import "./Slice.css";
import { v4 as uuidv4 } from "uuid";

export default function Slice(props) {
    const data = props.sliceData.projects;
    const projectUIDs = [uuidv4(), uuidv4()];
    const [formatClassString,setFormatClassString] = useState(["",""])

    // if (formatClassString[index] === "maximized" || formatClassString[index] === "minimized") return;
    // let tempFormatClassString = [...formatClassString];
    // tempFormatClassString[index] = "maximized";
    // tempFormatClassString[index ^ 1] = "minimized";
    // setFormatClassString(tempFormatClassString);

    const handleClickOpen = () => {
        
    };
    const handleClickClose = () => {
        
    };

    const generateProjects = () => {
        return data.map((project, index) => (
            <Project
                key={uuidv4()}
                uid={projectUIDs[index]}
                projectData={project}
                formatClassString={formatClassString[index]}
                handleClickOpen={() => {handleClickOpen(index)}}
                handleClickClose={() => {handleClickClose(index)}}
            />
        ));
    };

    return <div className="slice">{generateProjects()}</div>;
}
