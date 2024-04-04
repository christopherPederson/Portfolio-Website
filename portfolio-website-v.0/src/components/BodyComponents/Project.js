import { useState, useEffect } from "react";

export default function Project(props) {
    // declare state variables
    let [mainImage, setMainImage] = useState(null); // mainImage is the first image to be displayed in the project
    // declare utilities
    let data = props.projectData; // data is the projectData object passed in from Slice.js
    let elementAry = [
        <img src={mainImage} alt={data.name} />,
        <h1>{data.title}</h1>,
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

    let generateContent = () => {
        return (
            <div
                id={props.uid}
                className={"projectWrapper " + props.classListString}
                style={{ backgroundColor: data.color }}
                onMouseEnter={props.onMouseEnter}
                onMouseLeave={props.onMouseLeave}
            >
                {elementAry[contentOrientation]}
                {elementAry[contentOrientation ^ 1]}
            </div>
        );
    };

    return generateContent();
}
