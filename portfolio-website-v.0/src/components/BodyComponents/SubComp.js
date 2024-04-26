import { useState, useEffect, useRef } from "react";
import { MousePointerClick } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

export default function SubComp(props) {
    const data = props.data;
    const subDisplays = data.subDisplays;

    const [subImages, setSubImages] = useState([]);
    const popupRef = useRef([]);

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
    const resizeFont = (text, index) => {
        const length = text.length;
        const popupWidth = popupRef.current[index].offsetWidth;

        const fontSize = Math.floor((popupWidth / length) * 1.5);
        return fontSize;
    }
    const generateSubDisplays = () => {
        return subDisplays.map((subDisplay, index) => {
            const fontSize = resizeFont(subDisplay.description, index);
            return (
                <div
                    key={uuidv4()}
                    className="sub-display"
                    style={{ backgroundImage: `url(${subImages[index]})` }}
                >
                    <div className="sub-display-title-wrapper"><h1>{subDisplay.title}</h1></div>
                    <div className="sub-display-popup" ref={popupRef[index]} style={{ backgroundColor: data.color, fontSize: `${fontSize}px` }}>
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
                <h1>Hover to Read More</h1>
                <MousePointerClick className="pointerIcon" />
            </div>
            <div className="sub-comp-wrapper">{generateSubDisplays()}</div>
        </>
    );
}
