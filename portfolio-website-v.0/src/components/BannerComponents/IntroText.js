import LinkedIcon from "../GlobalComponents/LinkedIcon";
import LinkedIconData from "../data/LinkedIcons.json";

export default function IntroText() {
    return (
        <div id="introText" className="flex flex-col justify-evenly p-2 pl-8 min-h-screen">
            <h1 className="text-5xl">
                Hi, im Chris. Welcome to my custom coded portfolio website...
            </h1>
            <div>
                <p className="text-2xl">
                    This site was made to demonstrate not only my Full stack
                    programming skills but also my plethora of hardware and
                    software engineering projects
                </p>
                <div id="introText_iconsBox" className="flex">
                    {LinkedIconData.icons.map((icon, index) => {
                        return (
                            <LinkedIcon
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
