import "./App.css";
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import LoadingScreen from './pages/LoadingScreen';

export default function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate fetching data with a timeout
        setTimeout(() => {
            setIsLoading(false);
        }, 5000); // Example: Stop loading after 5 seconds
    }, []);

    if (isLoading) {
        return <LoadingScreen />;
    }
    return (
        <div className="App bg-black flex flex-col items-center">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
