import { useState, useEffect } from "react";
import Project from "./Project";
import "./Slice.css";
import { v4 as uuidv4 } from "uuid";

export default function Slice(props) {
    const data = props.sliceData.projects;
    const [projectElements, setProjectElements] = useState([]);
    const projectUIDs = [uuidv4(), uuidv4()];
    const classListStrings = [useState(""), useState("")];

    useEffect(() => {
        const elements = [
            document.getElementById(projectUIDs[0]),
            document.getElementById(projectUIDs[1])
        ];
        setProjectElements(elements);

        return () => {
            elements.forEach((element, index) => {
                if (element) {
                    element.removeEventListener("mouseover", () =>
                        handleMouseOver(index)
                    );
                    element.removeEventListener("mouseout", () =>
                        handleMouseOut(index)
                    );
                }
            });
        };
    }, []);

    const handleMouseOver = (index) => {
        classListStrings[index][1]("maximized");
        classListStrings[index ^ 1][1]("minimized");
    };

    const handleMouseOut = (index) => {
        classListStrings[index][1]("");
        classListStrings[index ^ 1][1]("");
    };

    const generateProjects = () => {
        return data.map((project, index) => (
            <Project
                key={uuidv4()}
                uid={projectUIDs[index]}
                projectData={project}
                classListString={classListStrings[index][0]}
                onMouseEnter={() => handleMouseOver(index)}
                onMouseLeave={() => handleMouseOut(index)}
            />
        ));
    };

    return <div className="slice">{generateProjects()}</div>;
}
