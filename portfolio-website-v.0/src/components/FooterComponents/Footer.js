import LinkedIcon from "../GlobalComponents/LinkedIcon";
import LinkedIconData from "../data/LinkedIcons.json";
import { v4 as uuidv4 } from "uuid";
import "./Footer.css";

export default function Footer() {
    return (
        <div id="footer">
            <div id="footerMain">
                <div id="footerMain_content">
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
