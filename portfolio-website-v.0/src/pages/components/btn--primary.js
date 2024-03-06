export default function BtnPrimary({ props }) {
    return (
        <a href={props.href}>
            <button className="bg-black hover:bg-white hover:text-black text-white py-2 px-4 rounded-md border-2 border-white">
                <u>{props.purpose}</u>
            </button>
        </a>
    );
}
