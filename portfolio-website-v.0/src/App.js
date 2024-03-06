import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";

export default function App() {
    return (
        <div className="App bg-black">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="*"element={<Error404/>} />
            </Routes>
        </BrowserRouter>
        </div>
    );
}