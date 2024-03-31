import Slice from "./Slice";
import data from "../data/Slice.json";
import { v4 as uuidv4 } from "uuid";

export default function Body() {

    const populateSlices = () => {
        return data.slices.map((slice, index) => {
            return <Slice key={uuidv4()} sliceData={slice} />;
        })
    }

    return <>{populateSlices()}</>;
}
