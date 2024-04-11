export default function ProjectBtn(props) {
    return (
        <button
            className="projectBtn"
            onClick={props.onClick}
            style={{ backgroundColor: props.color }}
        >
            {props.text}
        </button>
    );
}
