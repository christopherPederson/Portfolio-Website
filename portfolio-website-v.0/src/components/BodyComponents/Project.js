import { useState, useEffect } from "react";

export default function Project(props) {
    // declare utilities
    let data = props.projectData; // data is the projectData object passed in from Slice.js
    let projectWrapper = document.getElementById(props.uid); // projectWrapper is the div element that contains the project

    // declare state variables
    let [mainImage, setMainImage] = useState(null); // mainImage is the first image to be displayed in the project
    let [inFocus, setInFocus] = useState(false); // inFocus is a boolean to determine if the project is in focus

    //declare event listeners
    useEffect(() => {
        const projectWrapper = document.getElementById(props.uid);
        if (projectWrapper) {
            const handleMouseOver = () => {
                setInFocus(true);
            };
            const handleMouseOut = () => {
                setInFocus(false);
            };

            projectWrapper.addEventListener("mouseover", handleMouseOver);
            projectWrapper.addEventListener("mouseout", handleMouseOut);

            return () => {
                projectWrapper.removeEventListener(
                    "mouseover",
                    handleMouseOver
                );
                projectWrapper.removeEventListener("mouseout", handleMouseOut);
            };
        }
    }, []);

    // declare event handlers
    const handleMouseOver = () => {
        setInFocus(true);
    };
    const handleMouseOut = () => {
        setInFocus(false);
    };

    let content_left = (
        <div
            id={props.uid}
            className="projectWrapper"
            style={{ backgroundColor: data.color }}
        >
            <img src={mainImage} alt={data.name} />
            <h1>{data.title}</h1>
        </div>
    );
    let content_right = (
        <div
            id={props.uid}
            className="projectWrapper"
            style={{ backgroundColor: data.color }}
        >
            <h1>{data.title}</h1>
            <img src={mainImage} alt={data.name} />
        </div>
    );
    let content_hover = <div id={props.uid} className="projectWrapper"></div>;

    let content = <div id={props.uid} className="projectWrapper"></div>;

    import(
        process.env.PUBLIC_URL +
            "/public/assets/ProjectImages/" +
            data.mainImage
    )
        .then((image) => {
            setMainImage(image.default);
        })
        .catch((error) => {
            console.error("Error importing image: ", error);
        });

    if (inFocus) {
        content = content_hover;
    } else {
        content =
            data.orientation === "image--left" ? content_left : content_right;
    }

    return content;
}
