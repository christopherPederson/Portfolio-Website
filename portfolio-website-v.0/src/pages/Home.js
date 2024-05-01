import Banner from "../components/BannerComponents/Banner";
import Body from "../components/BodyComponents/Body";
import { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate fetching data with a timeout
        setTimeout(() => {
            setIsLoading(false);
        }, 7000); // Example: Stop loading after 5 seconds
    }, []);
    return (
        <>
            <LoadingScreen isLoading={isLoading}/>
            <Banner />
            <Body />
        </>
    );
}
