export default function Project(props) {
    let data = props.projectData;

    {
        if (data.orientation === "image--left") {
            return (
                <div
                    id="projectWrapper"
                    style={{ backgroundColor: data.color }}
                >
                    <img src={data.mainImage} alt={data.name} />
                    <h1>{data.title}</h1>
                </div>
            );
        } else {
            return (
                <div
                    id="projectWrapper"
                    style={{ backgroundColor: data.color }}
                >
                    <h1>{data.title}</h1>
                    <img src={data.mainImage} alt={data.name} />
                </div>
            );
        }
    }
}
