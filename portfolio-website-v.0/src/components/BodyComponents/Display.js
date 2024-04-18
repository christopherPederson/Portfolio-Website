import MainComp from "./MainComp"
import SubComp from "./SubComp"
import DisplayDescription from "./DisplayDescription"
import "./Display.css"

export default function Display(props) {

    return(
        <div className="display">
            <MainComp data={props.data}/>
            {props.data.showDescription? <DisplayDescription data={props.data}/> : null}
            {props.data.showSubDisplay? <SubComp data={props.data}/> : null}
        </div>
    )
}