import React, { useEffect } from 'react';
import GitHubCalendar from './GithubCalendar';
import './github-calendar-responsive.css';

const GitHubCalendarComponent = ({ username }) => {
    useEffect(() => {
        new GitHubCalendar('.calendar', "christopherPederson", { responsive: true });
    }, [username]);

    return (
        <div className="calendar">
            Loading data...
        </div>
    );
};

export default GitHubCalendarComponent;