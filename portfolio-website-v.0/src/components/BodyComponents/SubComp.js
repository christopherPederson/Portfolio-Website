import { useState, useEffect, useRef, createRef } from "react";
import { MousePointerClick } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

export default function SubComp(props) {
    const data = props.data;
    const subDisplays = data.subDisplays;

    const [subImages, setSubImages] = useState([]);
    const [popupRefs, setPopupRefs] = useState([]);

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

        if (popupRefs[index] && popupRefs[index].current) {
            const popupWidth = popupRefs[index].current.offsetWidth;
            const font = "1px Julius Sans One";
            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d");

            // Set the font (syntax similar to CSS: "font-size font-family")
            context.font = font;

            // Measure the text
            const measurement = context.measureText(text);

            const textMinWidth = measurement.width;

            return Math.floor((popupWidth*3)/textMinWidth); // Return the font size (in px)
        }

        // if (popupRefs[index] && popupRefs[index].current) {
        //     // Create a canvas element
        //     const canvas = document.createElement("canvas");
        //     const context = canvas.getContext("2d");

        //     // Set the font to the context
        //     context.font = font;

        //     const length = text.length;
        //     const popupWidth = popupRefs[index].current.offsetWidth;
        //     const fontSize = Math.floor((popupWidth / length) * 8);
        //     return fontSize;
        // }
        return 16; // Return a default font size if refs are not ready
    };
    const generateSubDisplays = () => {
        return subDisplays.map((subDisplay, index) => {
            const fontSize = resizeFont(subDisplay.description, index);
            return (
                <div
                    key={uuidv4()}
                    className="sub-display"
                    style={{ backgroundImage: `url(${subImages[index]})` }}
                >
                    <div className="sub-display-title-wrapper">
                        <h1>{subDisplay.title}</h1>
                    </div>
                    <div
                        className="sub-display-popup"
                        ref={popupRefs[index]}
                        style={{
                            backgroundColor: data.color,
                            fontSize: `${fontSize}px`,
                        }}
                    >
                        <p>{subDisplay.description}</p>
                    </div>
                </div>
            );
        });
    };

    useEffect(() => {
        importSubImages();
        // Initialize refs only when subDisplays changes and is not empty
        if (subDisplays.length > 0) {
            setPopupRefs(subDisplays.map(() => createRef()));
        }
    }, [subDisplays]);

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
