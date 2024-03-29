import "./LinkedIcon.css";
import { useState } from "react";

export default function LinkedIcon(props) {
    let [icon, setIcon] = useState(null);

    if (props.show) {
        import(process.env.PUBLIC_URL + "/public/assets/GlobalImages/" + props.iconURL)
            .then((newIcon) => {
                setIcon(newIcon.default);
            })
            .catch((error) => {
                console.log("Error importing icon: ", error);
            });
        if (props.mailTo) {
            return (
                <div className="iconWrapper">
                    <a href={`mailto:${props.link}`}>
                        <img className="h-10" src={icon} />
                    </a>
                </div>
            );
        } else {
            return (
                <div className="iconWrapper">
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
