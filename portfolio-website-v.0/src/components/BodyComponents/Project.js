import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Slice.css";
import ProjectBtn from "./ProjectBtn";

export default function Project(props) {
    // declare state variables
    let [mainImage, setMainImage] = useState(null); // mainImage is the first image to be displayed in the project

    // declare utilities
    let data = props.projectData; // data is the projectData object passed in from Slice.js
    let elementAry = [
        <img src={mainImage} alt={data.name} />,
        <div><h1>{data.title}</h1><ProjectBtn text="Read More" onClick={props.handleClick} color={data.color}/></div>,
    ];
    const contentOrientation = data.orientation === "image--left" ? 0 : 1;

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

    return (
            <div
                id={props.uid}
                className={"projectWrapper " + props.hoverClassString}
                style={{ backgroundColor: data.color }}
                key={uuidv4()}
                onMouseEnter={props.onMouseEnter}
                onMouseLeave={props.onMouseLeave}
            >
                {elementAry[contentOrientation]}
                {elementAry[contentOrientation ^ 1]}
            </div>
    );
}
