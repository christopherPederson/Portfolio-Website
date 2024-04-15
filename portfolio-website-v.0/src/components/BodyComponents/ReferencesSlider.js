import { useState } from "react";
import data from "../data/ReferencesData.json";
import SliderNav from "./SliderNav";
import "./ReferenceSlider.css";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

export default function References(props) {
    const [index, setIndex] = useState(
        Math.floor((data.References.length - 1) / 2)
    );
    const reference = data.References[index];

    return (
        <div className="referenceSliderWrapper">
            <button
                onClick={() => {
                    index <= 0
                        ? setIndex(data.References.length - 1)
                        : setIndex(index - 1);
                }}
            >
                <ArrowBigLeft size={35}/>
            </button>
            <div className="referenceSliderWrapper_info">
                <h2>{reference.text}</h2>
                <h3>
                    {reference.name} - {reference.title}
                </h3>
                <SliderNav
                    length={data.References.length}
                    activeIndex={index}
                    setIndex={setIndex}
                />
            </div>
            <button
                onClick={() => {
                    index >= data.References.length - 1
                        ? setIndex(0)
                        : setIndex(index + 1);
                }}
            >
                <ArrowBigRight size={35}/>
            </button>
        </div>
    );
}
