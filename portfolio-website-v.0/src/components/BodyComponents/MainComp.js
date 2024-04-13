import { useState } from "react";

export default function MainComp(props) {
    const [mainImage, setMainImage] = useState(null);

    const data = props.data;

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

    const contentAry = [
        <img src={mainImage}></img>,
        <div style={{ backgroundColor: data.color }}>
            <h1>{data.title}</h1>
        </div>,
    ];

    const layoutFormatIndex = data.orientation === "image--left" ? 0 : 1;

    return (
        <div className="main-comp">
            {contentAry[layoutFormatIndex]}
            {contentAry[layoutFormatIndex ^ 1]}
        </div>
    );
}
