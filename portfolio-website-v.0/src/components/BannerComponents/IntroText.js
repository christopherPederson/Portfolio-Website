import LinkedIcon from "../GlobalComponents/LinkedIcon";
import LinkedIconData from "../data/LinkedIcons.json";

export default function IntroText() {
    return (
        <div className="flex flex-col justify-evenly p-2 h-screen">
            <h1 className="text-5xl">
                Hi, im Chris. Welcome to my custom coded portfolio website...
            </h1>
            <p className="text-2xl">
                This site was made to demonstrate not only my Full stack
                programming skills but also my plethora of hardware and software
                engineering projects
            </p>
            <div className="flex h-14">{LinkedIconData.icons.map((NewIcon, index) => {
                return (
                    <LinkedIcon
                        iconURL={NewIcon.iconURL}
                        name={NewIcon.name}
                        link={NewIcon.link}
                    />
                );
            })}</div>
        </div>
    );
}
