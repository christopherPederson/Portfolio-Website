import "../ComponentStyles/LinkedIcon.css";
import { useState } from "react";

export default function LinkedIcon(props) {
    let [icon, setIcon] = useState(null);

    if (props.show) {
        import(`../data/GlobalImages/${props.iconURL}`)
            .then((newIcon) => {
                setIcon(newIcon.default);
            })
            .catch((error) => {
                console.log("Error importing icon: ", error);
            });
        if (props.mailTo) {
            return (
                <div className="IconWrapper">
                    <a href={`mailto:${props.link}`}>
                        <img className="h-10" src={icon} />
                    </a>
                </div>
            );
        } else {
            return (
                <div className="IconWrapper">
                    <a href={props.link}>
                        <img className="h-10" src={icon} />
                    </a>
                </div>
            );
        }
    } else {
        return null;
    }
}
