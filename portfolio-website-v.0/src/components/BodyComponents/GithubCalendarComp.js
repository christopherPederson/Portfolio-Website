import React, { useState, useEffect } from "react";

export default function GitHubCalendarComponent(props) {

    const fetchCalendarData = async () => {
        try {
            const response = await fetch(
                `https://api.bloggify.net/gh-calendar/?username=${props.username}`
            );
            return await response.text();
        } catch (error) {
            console.log(error);
            return null; // Return null or handle error appropriately
        }
    };

    useEffect(() => {
        const printData = async () => {
            const data = await fetchCalendarData();
            console.log(data);
            // Here you can set the state with the retrieved data if needed
            // setCalendarData(data);
        };

        printData();
    }, []);

    return (
        <div className="calendarWrapper">
            <h1>My GitHub Commit History</h1>
            <div className="calendar">Loading data...</div>
        </div>
    );
}

