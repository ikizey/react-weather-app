import React from "react";
import styles from "./Weather.module.css";

const Weather = ({ weather }) => {
    return (
        <div className={styles.card}>
            <p>Location:</p>
            <p>City: {weather.city}</p>
            <p>Country: {weather.country}</p>
            <p>Weather:</p>
            <p>Temperature: {weather.temp}</p>
            <p>Feels like: {weather.feelsLike}</p>
            <p>Pressure: {weather.pressure}</p>
            <p>Humidity: {weather.humidity}</p>
            <p>Wind Speed: {weather.wind}</p>
        </div>
    );
};

export default Weather;
