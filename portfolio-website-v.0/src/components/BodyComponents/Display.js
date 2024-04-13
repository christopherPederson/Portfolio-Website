import MainComp from "./MainComp"
import SubComp from "./SubComp"

export default function Display(props) {

    return(
        <div className="display">
            <MainComp data={props.data}/>
            <SubComp data={props.data}/>
        </div>
    )
}