import React from "react";
import styles from "./Weather.module.css";
import Card from "./UI/Card";
import WeatherImg from "./UI/WeatherImg";

const Weather = ({ weather }) => {
    return (
        <Card>
            <div className={styles.container}>
                <div className={styles.location}>
                    <div className={styles.city}>{weather.city}</div>
                    <div className={styles.country}>{weather.country}</div>
                </div>
                <div className={styles.main}>
                    <WeatherImg
                        className={styles.weatherImg}
                        src={weather.icon}
                        alt={weather.description}
                    />
                    <p className={styles.description}>{weather.description}</p>
                </div>
                <div className={styles.conditions}>
                    <div className={styles.feelsLike}>
                        {weather.feelsLike.toFixed(0)}&deg;C
                    </div>
                    <div className={styles.wind}>{weather.wind} m/s</div>
                    <div className={styles.humidity}>
                        Humidity: {weather.humidity}%
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default Weather;
