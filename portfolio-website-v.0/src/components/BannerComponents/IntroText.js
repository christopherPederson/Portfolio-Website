import { useState, useEffect, useRef } from "react";
import LinkedIcon from "../GlobalComponents/LinkedIcon";
import LinkedIconData from "../data/LinkedIcons.json";
import { v4 as uuidv4 } from "uuid";

export default function IntroText() {
    const [isVisible, setIsVisible] = useState();
    const introTextRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                console.log(entries[0].isIntersecting);
                setIsVisible(entries[0].isIntersecting);
            }, // Callback function
            {
                threshold: 0.1,
            } // Options
        );

        const currentElement = introTextRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        } else {
            console.log("Ref not attached yet.");
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div
        ref={introTextRef}
            id="introText"
            className={`flex flex-col justify-evenly p-2 min-h-screen fadeIn ${isVisible ? "isVisible" : "notVisible"}`}
        >
            <h1 className="text-5xl">
                Hi, im Chris. Welcome to my portfolio website...
            </h1>
            <div>
                <p className="text-2xl">
                    This site was made <u>by me from the ground up</u> to
                    demonstrate not only my Full stack programming skills but
                    also my plethora of hardware and software engineering
                    projects
                </p>
                <div id="introText_iconsBox" className="flex">
                    {LinkedIconData.icons.map((icon, index) => {
                        return (
                            <LinkedIcon
                                key={uuidv4()}
                                iconURL={icon.iconURL}
                                name={icon.name}
                                link={icon.link}
                                show={icon.show}
                                mailTo={icon.mailTo}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
