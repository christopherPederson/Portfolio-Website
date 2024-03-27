import "../ComponentStyles/LinkedIcon.css";
import { useState } from "react";

export default function LinkedIcon(props) {
    let [icon, setIcon] = useState(null);

    console.log("Importing icon: ", props.iconURL);

    import(`../data/GlobalImages/${props.iconURL}`)
        .then((newIcon) => {
            setIcon(newIcon.default);
        })
        .catch((error) => {
            console.log("Error importing icon: ", error);
        });

    return (
        <div className="IconWrapper" data-tooltip={props.name}>
            <a href={props.link}>
                <img className="h-10"src={icon} />
            </a>
        </div>
    );
}
