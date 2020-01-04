import React from "react";
const WeatherDetails = ({city, temperature}) => {
    return <div className="weatherDetails">
        <div className="city">{city}</div>
        <div className="temperature">{temperature}&deg; C</div>
    </div>
};
export default WeatherDetails;