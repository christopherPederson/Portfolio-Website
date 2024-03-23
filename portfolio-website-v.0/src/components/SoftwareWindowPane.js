import React, { useState, useEffect } from "react";

export default function SoftwareWindowPane(props) {
    const [javascriptIcon, setJavascriptIcon] = useState(null);

    import(`./data/Icons/${props.iconURL}`)
        .then((icon) => {
            setJavascriptIcon(icon.default);
        })
        .catch((error) => {
            console.error("Error importing icon: ", error);
        });

    return (
        <div
            className="paneWrapper border-4 border-black flex justify-center items-center w-auto aspect-square p-2"
            style={{ backgroundColor: props.backgroundColor}} 
        >
            <img className="object-scale-down h-auto aspect-square" src={javascriptIcon} alt={props.name} />
        </div>
    );
}