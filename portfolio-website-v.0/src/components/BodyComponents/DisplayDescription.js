import { useState, useEffect, useRef } from "react";

export default function DisplayDescription(props) {
    const [isVisible, setIsVisible] = useState();
    const descriptionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                setIsVisible(entries[0].isIntersecting);
            }, // Callback function
            {
                threshold: 0.1,
            } // Options
        );

        const currentElement = descriptionRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        } else {
            console.log("Ref not attached yet.");
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={descriptionRef} className="displayDescription">
            <div className={`fadeIn ${isVisible ? "isVisible" : "notVisible"}`}>
                <h2>About</h2>
                <p>{props.data.description}</p>
            </div>
        </div>
    );
}
