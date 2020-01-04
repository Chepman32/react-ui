import React from "react";
const WeatherIcon = ({time, weatherCode}) => {
    const timeOfDay = (time > 7 && time < 18) ? "day" : "night";
    const className = timeOfDay === "day" ? "fas fa-cloud-sun" : "fas fa-cloud-moon";
    return(
        <i className={className}>{weatherCode}</i>
    );
};
export default WeatherIcon;