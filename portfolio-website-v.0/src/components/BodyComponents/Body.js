import Slice from "./Slice";
import data from "../data/Slice.json";

export default function Body() {
    return <Slice sliceData={data.slices[0]}/>;
}
