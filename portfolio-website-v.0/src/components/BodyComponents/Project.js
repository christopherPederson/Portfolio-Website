import { useState, useEffect } from "react";

export default function Project(props) {
    // declare utilities
    let data = props.projectData; // data is the projectData object passed in from Slice.js

    // declare state variables
    let [mainImage, setMainImage] = useState(null); // mainImage is the first image to be displayed in the project

    let content_left = (
        <div
            id={props.uid}
            className="projectWrapper"
            style={{ backgroundColor: data.color }}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
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
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
        >
            <h1>{data.title}</h1>
            <img src={mainImage} alt={data.name} />
        </div>
    );
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

    content = data.orientation === "image--left" ? content_left : content_right;

    return content;
}
