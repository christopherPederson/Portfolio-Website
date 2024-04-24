import { useState, useEffect } from "react";
import { MousePointerClick } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

export default function SubComp(props) {
    const data = props.data;
    const subDisplays = data.subDisplays;

    const [subImages, setSubImages] = useState([]);

    const importSubImages = async () => {
        let importedImages = [];
    
        try {
            for (const subDisplay of subDisplays) {
                const image = await import(
                    process.env.PUBLIC_URL +
                    "/public/assets/ProjectImages/SubImages/" +
                    subDisplay.image
                );
                importedImages.push(image.default);
            }
    
            setSubImages(importedImages);
        } catch (error) {
            console.error("Error importing images: ", error);
        }
    };
    const generateSubDisplays = () => {
        return subDisplays.map((subDisplay, index) => {
            return (
                <div
                    key={uuidv4()}
                    className="sub-display"
                    style={{ backgroundImage: `url(${subImages[index]})` }}
                >
                    <div className="sub-display-title-wrapper"><h1>{subDisplay.title}</h1></div>
                    <div className="sub-display-popup" style={{ backgroundColor: data.color }}>
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
            <div className="sub-comp-header">
                <h1>Read More</h1>
                <MousePointerClick />
            </div>
            <div className="sub-comp-wrapper">{generateSubDisplays()}</div>
        </>
    );
}
