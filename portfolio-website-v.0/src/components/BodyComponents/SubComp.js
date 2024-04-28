import { useState, useEffect, useRef, createRef } from "react";
import { MousePointerClick } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

export default function SubComp(props) {
    const data = props.data;
    const subDisplays = data.subDisplays;

    const [subImages, setSubImages] = useState([]);

    const generateSubDisplays = () => {
        return subDisplays.map((subDisplay, index) => {
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
                        style={{
                            backgroundColor: data.color,
                        }}
                    >
                        <p>{subDisplay.description}</p>
                    </div>
                </div>
            );
        });
    };

    useEffect(() => {
        Promise.all(
            subDisplays.map(
                (subDisplay) =>
                    import(
                        `${process.env.PUBLIC_URL}/public/assets/ProjectImages/SubImages/${subDisplay.image}`
                    )
                        .then((image) => image.default)
                        .catch(() => "/path/to/fallback/image.jpg") // Path to a fallback image
            )
        ).then((images) => setSubImages(images));
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
