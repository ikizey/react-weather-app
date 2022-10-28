import React from "react";
import City from "./City";
import styles from "./Cities.module.css";

const Cities = ({ cities, onCitySelect }) => {
    return (
        <ul>
            {cities.map(city => (
                <li className={styles.cities} key={city.id}>
                    <City city={city} onCitySelect={onCitySelect} />
                </li>
            ))}
        </ul>
    );
};

export default Cities;
