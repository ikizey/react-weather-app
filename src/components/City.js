import React from "react";
import Card from "./UI/Card";
import styles from "./City.module.css";

const City = ({ city, onCitySelect }) => {
    const clickHandler = e => {
        e.preventDefault();
        onCitySelect(city);
    };
    return (
        <Card>
            <p className={styles.city} onClick={clickHandler}>
                {city.city}
            </p>
        </Card>
    );
};

export default City;
