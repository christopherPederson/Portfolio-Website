export default function DisplayDescription(props) {
    return(
        <div className="displayDescription">
            <h2>About</h2>
            <p>{props.data.description}</p>
        </div>
    )
}