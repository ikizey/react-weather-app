import axios from "axios";
import React, { useState } from "react";
import { geodb_config } from "./api/geoDB";
import { ow_config } from "./api/openweathermap.js";
import styles from "./App.module.css";
import Cities from "./components/Cities";
import SearchForm from "./components/SearchForm";
import Weather from "./components/Weather";
import { responseToGeoLocations, responseToWeather } from "./helper/helpers";

function App() {
    const [geoLocation, setGeoLocation] = useState([]);
    const [weather, setWeather] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const onSearch = async searchTerm => {
        if (!isLoading) {
            setIsLoading(true);
            if (weather) setWeather(null);
            try {
                const response = await axios.request(geodb_config(searchTerm));
                console.log(response);
                const location = responseToGeoLocations(response);

                if (!location.length) {
                    throw new Error("Location is not found!");
                }

                if (location.length === 1) {
                    citySelectHandler(location[0]);
                    return;
                }
                setGeoLocation(location);
            } catch (error) {
                console.error(error); //TODO
            } finally {
                setIsLoading(false);
            }
        }
    };

    const citySelectHandler = async city => {
        if (!isLoading) {
            setIsLoading(true);
            setGeoLocation([city]);
            try {
                const response = await axios.request(
                    ow_config(city.longitude, city.latitude)
                );
                const weather = responseToWeather(response, city);
                setWeather(weather);
            } catch (error) {
                console.error(error); //TODO
            } finally {
                setIsLoading(false);
            }
        }
    };

    let result = <p>No weather data for this location</p>;
    if (isLoading) {
        result = <p>Loading...</p>;
    } else if (geoLocation.length > 1) {
        result = (
            <Cities cities={geoLocation} onCitySelect={citySelectHandler} />
        );
    } else if (geoLocation.length === 1 && weather) {
        result = <Weather weather={weather} />;
    }

    return (
        <div className={styles.container}>
            <SearchForm onSearch={onSearch} />
            {result}
        </div>
    );
}

export default App;
