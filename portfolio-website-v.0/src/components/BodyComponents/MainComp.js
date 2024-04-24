import { useState, useEffect } from "react";

export default function MainComp(props) {
    const [mainImage, setMainImage] = useState(null);

    const data = props.data;
    
    const generateToolListString = () => {
        let tempString = "";
        data.toolList.map((tool, index) => {
            tempString += (index > 0 ? " ◦" : "◦") + tool;
        });
        return tempString;
    };

    const importMainImage = async () => {
        try {
            import(
                process.env.PUBLIC_URL +
                    "/public/assets/ProjectImages/" +
                    data.mainImage
            ).then((image) => {
                setMainImage(image.default);
            });
        } catch (error) {
            console.error("Error importing image: ", error);
        }
    };
    const contentAry = [
        <img src={mainImage}></img>,
        <div style={{ backgroundColor: data.color }}>
            <h1>{data.title}</h1>
            <p>{generateToolListString()}</p>
        </div>,
    ];

    const layoutFormatIndex = data.orientation === "image--left" ? 0 : 1;

    useEffect(() => {
        importMainImage();
    }, []);

    return (
        <div className="main-comp">
            {contentAry[layoutFormatIndex]}
            {contentAry[layoutFormatIndex ^ 1]}
        </div>
    );
}
