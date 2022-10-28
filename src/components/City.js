import React from "react";
import Card from "./UI/Card";

const City = ({ city, onCitySelect }) => {
    const clickHandler = e => {
        e.preventDefault();
        onCitySelect(city);
    };
    return (
        <Card>
            <p onClick={clickHandler}>{city.city}</p>
        </Card>
    );
};

export default City;
