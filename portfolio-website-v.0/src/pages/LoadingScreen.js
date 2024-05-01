import React, { useEffect, useState, useRef } from "react";
import "./LoadingScreen.css";

export default function LoadingScreen(props) {
    const Keywords = [
        "Hardware",
        "Software",
        "Firmware",
        "FullStack",
        "Frontend",
        "Backend",
        "Mechanical",
        "PCB Development",
    ];
    const [index, setIndex] = useState(Math.floor(Math.random() * Keywords.length));
    const textRef = useRef(null);

    useEffect(() => {
        const textElement = textRef.current;
        const handleAnimationIteration = () => {
            setIndex(prevIndex => (prevIndex + 1) % Keywords.length);
        };

        if (textElement) {
            textElement.addEventListener('animationiteration', handleAnimationIteration);
        }

        return () => {
            if (textElement) {
                textElement.removeEventListener('animationiteration', handleAnimationIteration);
            }
        };
    }, []);

    if (!props.isLoading) {
        return null;
    }

    return (
        <div className="loading-screen">
            <h1>. . . Loading Portfolio . . .</h1>
            <div className="textWrapper">
                <h2 ref={textRef} className="text">{Keywords[index]}</h2>
            </div>
        </div>
    );
}
