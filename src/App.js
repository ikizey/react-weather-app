import axios from "axios";
import React, { useState } from "react";
import { geodb_config } from "./api/geoDB";
import { ow_config } from "./api/openweathermap.js";
import styles from "./App.module.css";
import Cities from "./components/Cities";
import ErrorComp from "./components/ErrorComp";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import Loader from "./components/UI/Loader";
import Weather from "./components/Weather";
import { responseToGeoLocations, responseToWeather } from "./helper/helpers";

function App() {
    const [geoLocation, setGeoLocation] = useState([]);
    const [weather, setWeather] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSearch = async searchTerm => {
        if (searchTerm.trim().length < 1) {
            setError(new Error("Please, enter location"));
            return;
        }

        if (!isLoading) {
            setError(null);
            setIsLoading(true);
            if (weather) setWeather(null);
            try {
                const response = await axios.request(geodb_config(searchTerm));
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
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }
    };

    const citySelectHandler = async city => {
        if (!isLoading) {
            setError(null);
            setIsLoading(true);
            setGeoLocation([city]);
            try {
                const response = await axios.request(
                    ow_config(city.longitude, city.latitude)
                );
                const weather = responseToWeather(response, city);
                setWeather(weather);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }
    };

    let result = <React.Fragment />;
    if (error) {
        result = <ErrorComp error={error.message} />;
    } else if (isLoading) {
        result = <Loader />;
    } else if (geoLocation.length > 1) {
        result = (
            <Cities cities={geoLocation} onCitySelect={citySelectHandler} />
        );
    } else if (geoLocation.length === 1 && weather) {
        result = <Weather weather={weather} />;
    }

    return (
        <div className={styles.container}>
            <Header />
            <SearchForm onSearch={onSearch} />
            {result}
        </div>
    );
}

export default App;
