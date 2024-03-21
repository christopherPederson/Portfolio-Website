import "./ComponentStyles/SoftwareWindowPane.css";

export default function SoftwareWindowPane(props) {
    return (
        <div className="paneWrapper border-4 border-black flex justify-center items-center" style={{ backgroundColor: props.backgroundColor }}>
            <img src={props.iconURL} alt={props.name} />
        </div>
    );
}
