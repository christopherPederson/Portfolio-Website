import LinkedIcon from "../GlobalComponents/LinkedIcon";
import LinkedIconData from "../data/LinkedIcons.json";

export default function IntroText() {
    return (
        <div id="IntroText" className="flex flex-col justify-evenly p-2 min-h-96">
            <h1 className="text-5xl">
                Hi, im Chris. Welcome to my custom coded portfolio website...
            </h1>
            <div>
                <p className="text-2xl">
                    This site was made to demonstrate not only my Full stack
                    programming skills but also my plethora of hardware and
                    software engineering projects
                </p>
                <div id="IconsBox" className="flex">
                    {LinkedIconData.icons.map((NewIcon, index) => {
                        return (
                            <LinkedIcon
                                iconURL={NewIcon.iconURL}
                                name={NewIcon.name}
                                link={NewIcon.link}
                                show={NewIcon.show}
                                mailTo={NewIcon.mailTo}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
