import { v4 as uuidv4 } from "uuid";

export default function SliderNav(props) {
    const generateDots = () => {
        const dots = [];
        for (let i = 0; i < props.length; i++) {
            dots.push(
                <div
                    onClick={() => props.setIndex(i)}
                    key={uuidv4()}
                    className={i === props.activeIndex ? "dot dot--active" : "dot"}
                ></div>
            );
        }
        return dots;
    };

    return <div className="slider-nav">{generateDots()}</div>;
}
