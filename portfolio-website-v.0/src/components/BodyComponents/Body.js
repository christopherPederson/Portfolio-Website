import Slice from "./Slice";
import data from "../data/Slice.json";

export default function Body() {

    const populateSlices = () => {
        return data.slices.map((slice, index) => {
            return <Slice key={index} sliceData={slice} />;
        })
    }

    return <>{populateSlices()}</>;
}
