import React, { useState, useEffect } from "react";
import SoftwareWindowPane from "./SoftwareWindowPane.js";
import paneData from "./data/SoftwareWindowPanes.json";

export default function SoftwareWindow() {
    
    const [panes, setPanes] = useState([]);

    useEffect(() => {
        setPanes(paneData.panes);
    }, []);

    let generatePanes = () => {
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
            }else{
                return null;
            }
        });
    };

    return (
        <div
            className="grid grid-cols-4 h-screen p-2"
            style={{ aspectRatio: "1 / 1" }}
        >
            {generatePanes()}
        </div>
    );
}
