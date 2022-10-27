import React from "react";

const Weather = ({ weather }) => {
    return (
        <div>
            <p>{weather.city}</p>
            <p>{weather.country}</p>
            <p>Weather:</p>
            <p>{weather.temp}</p>
            <p>{weather.feelsLike}</p>
            <p>{weather.pressure}</p>
            <p>{weather.humidity}</p>
            <p>{weather.wind}</p>
        </div>
    );
};

export default Weather;
