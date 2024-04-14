import Display from "./Display";
import ReferencesSlider from "./ReferencesSlider";
import data from "../data/DisplayData.json";
import { v4 as uuidv4 } from "uuid";
import "./body.css";

export default function Body() {

    return(
        <div className="body">
            <Display key={uuidv4()} data={data.displays[0]} />
            <ReferencesSlider />
            <Display key={uuidv4()} data={data.displays[1]} />
            <Display key={uuidv4()} data={data.displays[2]} />
            <Display key={uuidv4()} data={data.displays[3]} />
        </div>
    )
}
