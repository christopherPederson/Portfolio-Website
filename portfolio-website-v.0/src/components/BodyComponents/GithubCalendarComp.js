import { useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import "./GithubCalendarComp.css"

export default function GitHubCalendarComponent(props) {
    useEffect(() => {
        const calendarDayElements = document.getElementsByTagName("rect");

        // Check if calendarDayElements is not empty
        if (calendarDayElements.length > 0 && calendarDayElements) {
            // Apply style to each element
            Array.from(calendarDayElements).forEach(element => {
                element.style.width = "100%";
            });
        }
    }, []);
    return (
        <div id="calendarWrapper">
            <GitHubCalendar username={props.username} id="calendar" />
        </div>
    );
}
