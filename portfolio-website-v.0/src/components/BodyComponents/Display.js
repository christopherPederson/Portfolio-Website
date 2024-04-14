import MainComp from "./MainComp"
import SubComp from "./SubComp"
import "./Display.css"

export default function Display(props) {

    return(
        <div className="display">
            <MainComp data={props.data}/>
            <SubComp data={props.data}/>
        </div>
    )
}