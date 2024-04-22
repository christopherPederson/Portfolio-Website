import React, { useEffect } from "react";
import GitHubCalendar from "./GithubCalendar";
import "./github-calendar.css";

const GitHubCalendarComponent = ({ username }) => {
    useEffect(() => {
        new GitHubCalendar(".calendar", "christopherPederson", {
            responsive: false,
            global_stats: false,
        });
    }, [username]);

    return (
        <div className="calendarWrapper">
            <h1>My GitHub Commit History</h1>
            <div className="calendar">Loading data...</div>
        </div>
    );
};

export default GitHubCalendarComponent;
