import React from "react";
import City from "./City";

const Cities = ({ cities }) => {
    return (
        <ul>
            {cities.map(city => (
                <li key={city.id}>
                    <City city={city} />
                </li>
            ))}
        </ul>
    );
};

export default Cities;
