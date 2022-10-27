import axios from "axios";
import { useState } from "react";
import { GEODB_REQUEST_OPTIONS } from "./api/geoDB";
import { OPEN_WEATHER_REQUEST_OPTIONS } from "./api/openweathermap.js";
import "./App.css";
import Cities from "./components/Cities";
import SearchForm from "./components/SearchForm";
import Weather from "./components/Weather";

function App() {
    const [geoLocation, setGeoLocation] = useState([]);
    const [weather, setWeather] = useState(null);
    const [retries, setRetries] = useState(0);
    const maxRetries = 3;

    const onSearch = searchTerm => {
        const request_options = {
            ...GEODB_REQUEST_OPTIONS,
            params: { ...GEODB_REQUEST_OPTIONS.params, namePrefix: searchTerm },
        };

        axios
            .request(request_options)
            .then(response => response.data)
            .then(json => {
                setGeoLocation(
                    json.data.map(location => ({
                        id: location.id,
                        city: location.city,
                        country: location.country,
                        lon: location.longitude,
                        lat: location.latitude,
                    }))
                );
            })
            .catch(error => {
                console.error(error);
            });
    };

    const citySelectHandler = city => {
        setGeoLocation([city]);
        const request_options = {
            ...OPEN_WEATHER_REQUEST_OPTIONS,
            params: {
                ...OPEN_WEATHER_REQUEST_OPTIONS.params,
                lon: city.lon,
                lat: city.lat,
            },
        };

        axios
            .request(request_options)
            .then(response => response.data)
            .then(data => {
                if (data) setRetries(1);
                setWeather({
                    temp: data.main.temp,
                    feelsLike: data.main.feels_like,
                    pressure: data.main.pressure,
                    humidity: data.main.humidity,
                    wind: data.wind.speed,
                    city: city.city,
                    country: city.country,
                });
            })
            .catch(error => {
                console.error(error);
            });
    };

    if (geoLocation.length === 1 && !weather && retries < maxRetries) {
        citySelectHandler(geoLocation[0]);
        setRetries(current => current + 1);
    }
    // console.log(geoLocation);
    // console.log(weather);
    return (
        <div className="App">
            <SearchForm onSearch={onSearch} />
            {geoLocation && geoLocation.length > 1 && (
                <Cities cities={geoLocation} onCitySelect={citySelectHandler} />
            )}
            {geoLocation && geoLocation.length === 1 && weather && (
                <Weather weather={weather} />
            )}
            {geoLocation && retries === maxRetries && (
                <p>No weather Data for this location</p>
            )}
        </div>
    );
}

export default App;
