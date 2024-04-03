import { useState, useEffect } from "react";
import Project from "./Project";
import "./Slice.css";
import { v4 as uuidv4 } from "uuid";

export default function Slice(props) {
    const data = props.sliceData.projects;
    const [projectElements, setProjectElements] = useState([]);
    const projectUIDs = [uuidv4(), uuidv4()];

    useEffect(() => {
        const elements = [
            document.getElementById(projectUIDs[0]),
            document.getElementById(projectUIDs[1]),
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
        projectElements[index].classList.add("maximize");
        projectElements[index ^ 1].classList.add("minimize");
    };

    const handleMouseOut = (index) => {
        projectElements[index].classList.remove("maximize");
        projectElements[index ^ 1].classList.remove("minimize");
    };

    const generateProjects = () => {
        return data.map((project, index) => (
            <Project
                key={uuidv4()}
                uid={projectUIDs[index]}
                projectData={project}
                onMouseEnter={() => handleMouseOver(index)}
                onMouseLeave={() => handleMouseOut(index)}
            />
        ));
    };

    return <div className="slice">{generateProjects()}</div>;
}
