import React, { useEffect } from "react";
import GitHubCalendar from "./GithubCalendar";
import "./github-calendar-responsive.css";

export default function GitHubCalendarComponent(username) {
    useEffect(() => {
        new GitHubCalendar(".calendar", "christopherPederson", {
            responsive: true,
            global_stats: false,
            tooltips:true,
        });
    }, [username]);

    return (
        <div className="calendarWrapper">
            <div className="calendar">Loading data...</div>
        </div>
    );
}
