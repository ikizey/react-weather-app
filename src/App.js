import axios from "axios";
import { useState } from "react";
import { GEODB_REQUEST_OPTIONS } from "./api/geoDB";
import "./App.css";
import SearchForm from "./components/SearchForm";

function App() {
    const [geoLocation, setGeoLocation] = useState();

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
                        lon: location.longitude,
                        lat: location.latitude,
                    }))
                );
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div className="App">
            <SearchForm onSearch={onSearch} />
        </div>
    );
}

export default App;
