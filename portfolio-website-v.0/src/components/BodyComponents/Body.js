import Display from "./Display";
import data from "../data/DisplayData.json";
import { v4 as uuidv4 } from "uuid";
import "./body.css";

export default function Body() {

    const generateDisplays = () => {
        return data.displays.map((instance) => {
            return <Display key={uuidv4()} data={instance} />
        })
    }

    return(
        <div className="body">
            {generateDisplays()}
        </div>
    )
}
