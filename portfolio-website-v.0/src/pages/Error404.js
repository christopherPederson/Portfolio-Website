import BtnPrimary from "./components/btn--primary";

export default function Error404() {
    return (
        <div className="text-2xl h-full flex flex-col justify-center items-center text-center w-9/12 gap-8">
            <h1 className="text-5xl">:\ Error 404</h1>
            <p>
                Oh! looks like you found a page that doesn't exist on my site.
                Go ahead and return to my home page to explore more.
            </p>
            <BtnPrimary props={{ href: "/", purpose: "Return Home" }} />
        </div>
    );
}
