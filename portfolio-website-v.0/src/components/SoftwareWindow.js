import React, { useState, useEffect } from "react";
import SoftwareWindowPane from "./SoftwareWindowPane.js";
import paneData from "./data/SoftwareWindowPanes.json";

export default function SoftwareWindow() {
    let screenHeight = window.screen.height;
    let screenWidth = window.screen.width;

    const softwareWindow = document.getElementById("softwareWindow");

    //declaration of state variables using useState
    const [panes, setPanes] = useState([]);

    let adjustWindowFormatting = () => {
        if (screenHeight > screenWidth) {
            softwareWindow.classList.remove("h-screen");
            softwareWindow.classList.add("w-screen");
        } else {
            softwareWindow.classList.remove("w-screen");
            softwareWindow.classList.add("h-screen");
        }
    };

    let updateScreenSize = () => {
        screenHeight = window.screen.height;
        screenWidth = window.screen.width;

        adjustWindowFormatting();
    };

    //function to shuffle the array of panes
    const shuffleArray = (array) => {
        let newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };

    const generatePanes = () => {
        return panes.map((pane, index) => {
            if (pane.show === true) {
                return (
                    <SoftwareWindowPane
                        iconURL={pane.iconURL}
                        backgroundColor={pane.backgroundColor}
                        name={pane.name}
                        description={pane.description}
                    />
                );
            } else {
                return null;
            }
        });
    };

    useEffect(() => {
        setPanes(paneData.panes);

        const intervalId = setInterval(() => {
            setPanes((prevPanes) => shuffleArray(prevPanes));
        }, 3000);

        return () => clearInterval(intervalId); // Clear interval on component unmount or re-render
    }, []); // Run effect only once on component mount

    window.addEventListener("resize", updateScreenSize);

    return (
        <div
            id="softwareWindow"
            className="grid grid-cols-4 p-2 h-screen"
            style={{ aspectRatio: "1 / 1" }}
        >
            {generatePanes()}
        </div>
    );
}
