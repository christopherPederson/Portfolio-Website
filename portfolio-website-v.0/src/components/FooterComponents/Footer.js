import React, { useEffect, useRef, useState } from "react";
import LinkedIcon from "../GlobalComponents/LinkedIcon";
import LinkedIconData from "../data/LinkedIcons.json";
import { v4 as uuidv4 } from "uuid";
import "./Footer.css";

export default function Footer() {
    const footerMainRef = useRef(null);
    const footerContentRef = useRef(null);
    const [tiles, setTiles] = useState([]);

    const generateTiles = () => {
        if (!footerMainRef.current || !footerContentRef.current) {
            console.log("References are not yet available.");
            return;
        }

        const tilesArr = [];
        const contentHeight = footerContentRef.current.offsetHeight;
        const footerWidth = footerMainRef.current.offsetWidth;

        const colors = [
            "#2DB3EC",
            "#FFD700",
            "#FFB72C",
            "#00CED1",
            "#CAE755",
            "#305DD0",
            "#FF6E6E",
            "#DC6CF8",
        ];

        const columns = Math.floor(footerWidth / 100); // min width 100px per tile
        const rows = Math.ceil(contentHeight / 100);

        console.log(`Columns: ${columns}, Rows: ${rows}`);

        for (let i = 0; i <= columns * rows; i++) {
            const tileColor =
                i % 2 === 0
                    ? "#2c272c"
                    : colors[Math.floor(Math.random() * colors.length)];

            tilesArr.push(
                <div
                    key={uuidv4()}
                    className="footerTile"
                    style={{ backgroundColor: tileColor }}
                ></div>
            );
        }
        console.log(tilesArr.length)

        return tilesArr.map((tile) => tile);
    };

    useEffect(() => {
        // Ensure the component is mounted and the refs are set
        // if (footerMainRef.current && footerContentRef.current) {
        //     setTiles(generateTiles());
        // }
    }, []); // Empty dependency array means this effect runs only once after initial mount

    return (
        <div id="footer">
            <div ref={footerMainRef} id="footerMain">
                <div ref={footerContentRef} id="footerMain_content">
                    <h2>You made it this far, Get in Contact</h2>
                    <div id="footerMain_icons">
                        {LinkedIconData.icons.map((icon, index) => (
                            <LinkedIcon
                                key={uuidv4()}
                                iconURL={icon.iconURL}
                                name={icon.name}
                                link={icon.link}
                                show={icon.show}
                                mailTo={icon.mailTo}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div id="footerSub">
                <div id="footerSub_content">
                    <p>© 2024 by Christopher Pederson</p>
                    <p>
                        <a href="mailto:christopherjamespederson@gmail.com">
                            Report a Bug!
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
