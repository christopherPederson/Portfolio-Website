import { useState, useEffect } from "react";
import { MousePointerClick } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

export default function SubComp(props) {
    const data = props.data;
    const subDisplays = data.subDisplays;

    const [subImages, setSubImages] = useState([]);

    const importSubImages = () => {
        let subImages = [];
        subDisplays.forEach((subDisplay) => {
            import(
                process.env.PUBLIC_URL +
                    "/public/assets/ProjectImages/SubImages/" +
                    subDisplay.image
            )
                .then((image) => {
                    subImages.push(image.default);
                    setSubImages(subImages);
                })
                .catch((error) => {
                    console.error("Error importing image: ", error);
                });
        });
    };
    const generateSubDisplays = () => {
        return subDisplays.map((subDisplay, index) => {
            return (
                <div
                    key={uuidv4()}
                    className="sub-display"
                    style={{ backgroundImage: `url(${subImages[index]})` }}
                >
                    <h1>{subDisplay.title}</h1>
                    <div style={{ backgroundColor: data.color }}>
                        <p>{subDisplay.description}</p>
                    </div>
                </div>
            );
        });
    };

    useEffect(() => {
        importSubImages();
    }, []);

    return (
        <>
            <div className="sub-comp-title">
                <h1>Read More</h1>
                <MousePointerClick />
            </div>
            <div className="sub-comp-wrapper">{generateSubDisplays()}</div>
        </>
    );
}