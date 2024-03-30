import { useState } from "react";

export default function Project(props) {
    let data = props.projectData;
    let [mainImage, setMainImage] = useState(null);
    let [inFocus, setInFocus] = useState(false);


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

    
        if (data.orientation === "image--left") {
            return (
                <div
                    className="projectWrapper"
                    style={{ backgroundColor: data.color }}
                >
                    <img src={mainImage} alt={data.name} />
                    <h1>{data.title}</h1>
                </div>
            );
        } else {
            return (
                <div
                    className="projectWrapper"
                    style={{ backgroundColor: data.color }}
                >
                    <h1>{data.title}</h1>
                    <img src={mainImage} alt={data.name} />
                </div>
            );
        }


    }

