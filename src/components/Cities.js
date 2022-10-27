import React from "react";
import City from "./City";

const Cities = ({ cities, onCitySelect }) => {
    return (
        <ul>
            {cities.map(city => (
                <li key={city.id}>
                    <City city={city} onCitySelect={onCitySelect} />
                </li>
            ))}
        </ul>
    );
};

export default Cities;
