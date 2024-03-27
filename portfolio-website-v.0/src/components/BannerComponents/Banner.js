import SoftwareWindow from "./SoftwareWindow";
import IntroText from "./IntroText";
import "./Banner.css";

export default function Banner() {

    return (
        <div id="banner">
            <IntroText />
            <SoftwareWindow />
        </div>
    );
}
