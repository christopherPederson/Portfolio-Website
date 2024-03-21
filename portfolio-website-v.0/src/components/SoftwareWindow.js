import React, { useState, useEffect } from "react";
import SoftwareWindowPane from "./SoftwareWindowPane.js";
import paneData from "../data/SoftwareWindowPanes.json";

export default function SoftwareWindow() {
    const [panes, setPanes] = useState([]);

    useEffect(() => {
        setPanes(paneData.panes);
    }, []);

    return (
        <div className="grid grid-cols-4 h-screen p-2" style={{ aspectRatio: '1 / 1' }}>
            {panes.map((pane, index) => {
                if (pane.show === true) {
                    return (
                        <SoftwareWindowPane
                            iconURL={pane.iconURL}
                            backgroundColor={pane.backgroundColor}
                            name={pane.name}
                            description={pane.description}
                        />
                    );
                }
            })}
        </div>
    );
}
