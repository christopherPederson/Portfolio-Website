import SoftwareWindow from "./SoftwareWindow";
import IntroText from "./IntroText";
import { useEffect } from "react";

export default function Banner() {
    let arrangeBanner = () => {
        const banner = document.getElementById("banner");

        let screenHeight = window.screen.height;
        let screenWidth = window.screen.width;

        if (banner) {
            if (screenWidth / screenHeight > 1.36) {
                //sweet spot ratio for the banner
                banner.classList.remove("flex-col");
                banner.classList.add("flex-row");
            } else {
                banner.classList.remove("flex-row");
                banner.classList.add("flex-col");
            }
        }
    };

    arrangeBanner();

    window.addEventListener("resize", arrangeBanner);

    return (
        <div id="banner" className="flex flex-row">
            <IntroText />
            <SoftwareWindow />
        </div>
    );
}
