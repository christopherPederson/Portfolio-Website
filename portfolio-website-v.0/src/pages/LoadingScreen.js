import React, { useEffect, useState } from "react";
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
    const [index, setIndex] = useState(
        Math.floor(Math.random() * Keywords.length)
    );

    useEffect(() => {
        // Define the interval inside the effect
        const interval = setInterval(() => {
            // Update index using a function to ensure we always have the latest value
            setIndex(currentIndex => (currentIndex + 1) % Keywords.length);
        }, 1500);

        // Return a cleanup function that clears the interval
        return () => clearInterval(interval);
    }, []); // Remove 'index' from the dependency array

    if (!props.isLoading) {
        return null;
    }

    return (
        <div className="loading-screen">
            <h1>Loading Portfolio . . . </h1>
            <div className="textWrapper">
                <h2 className="text">{Keywords[index]}</h2>
            </div>
        </div>
    );
}