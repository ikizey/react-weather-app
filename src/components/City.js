import React from "react";

const City = ({ city, onCitySelect }) => {
    const clickHandler = e => {
        e.preventDefault();
        onCitySelect(city);
    };
    return <p onClick={clickHandler}>{city.city}</p>;
};

export default City;
