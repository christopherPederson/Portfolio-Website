import Display from "./Display";
import ReferencesSlider from "./ReferencesSlider";
import data from "../data/DisplayData.json";
import GithubCalendarComp from "./GithubCalendarComp";
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
            <Display key={uuidv4()} data={data.displays[4]} />
            <GithubCalendarComp username="christopherPederson"/>
            <Display key={uuidv4()} data={data.displays[5]} />
            <Display key={uuidv4()} data={data.displays[6]} />
            <Display key={uuidv4()} data={data.displays[7]} />
            <Display key={uuidv4()} data={data.displays[8]} />
            <Display key={uuidv4()} data={data.displays[9]} />
        </div>
    )
}
