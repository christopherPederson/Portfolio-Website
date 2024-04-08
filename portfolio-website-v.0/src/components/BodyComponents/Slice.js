import { useState, useEffect } from "react";
import Project from "./Project";
import "./Slice.css";
import { v4 as uuidv4 } from "uuid";

export default function Slice(props) {
    const data = props.sliceData.projects;
    const [projectElements, setProjectElements] = useState([]);
    const projectUIDs = [uuidv4(), uuidv4()];
    const [animationClassStrings, setAnimationClassStrings] = useState(["", ""]);

    useEffect(() => {
        const elements = [
            document.getElementById(projectUIDs[0]),
            document.getElementById(projectUIDs[1]),
        ];
        setProjectElements(elements);
    }, []);

    const handleMouseOver = (index) => {
        if (animationClassStrings[index] === "maximized" || animationClassStrings[index] === "minimized") return;
        let tempAnimationClassStrings = [...animationClassStrings];
        tempAnimationClassStrings[index] = "maximized";
        tempAnimationClassStrings[index ^ 1] = "minimized";
        setAnimationClassStrings(tempAnimationClassStrings);
    };

    const handleMouseOut = (index) => {
        if (animationClassStrings[index] === "" || animationClassStrings[index] === "") return;
        let tempAnimationClassStrings = [...animationClassStrings];
        tempAnimationClassStrings[index] = "";
        tempAnimationClassStrings[index ^ 1] = "";
        setAnimationClassStrings(tempAnimationClassStrings);
    };

    const generateProjects = () => {
        return data.map((project, index) => (
            <Project
                key={uuidv4()}
                uid={projectUIDs[index]}
                projectData={project}
                animationClassString={animationClassStrings[index]}
                onMouseEnter={() => handleMouseOver(index)}
                onMouseLeave={() => handleMouseOut(index)}
            />
        ));
    };

    return <div className="slice">{generateProjects()}</div>;
}
