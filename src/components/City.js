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
            <div className={styles.city} onClick={clickHandler}>
                {city.city}
            </div>
        </Card>
    );
};

export default City;
