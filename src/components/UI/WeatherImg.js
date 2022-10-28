import React from "react";

import _01d from "../../assets/img/01d.png";
import _02d from "../../assets/img/02d.png";
import _03d from "../../assets/img/03d.png";
import _04d from "../../assets/img/04d.png";
import _09d from "../../assets/img/09d.png";
import _10d from "../../assets/img/10d.png";
import _11d from "../../assets/img/11d.png";
import _13d from "../../assets/img/13d.png";
import _50d from "../../assets/img/50d.png";
import _01n from "../../assets/img/01n.png";
import _02n from "../../assets/img/02n.png";
import _03n from "../../assets/img/03n.png";
import _04n from "../../assets/img/04n.png";
import _09n from "../../assets/img/09n.png";
import _10n from "../../assets/img/10n.png";
import _11n from "../../assets/img/11n.png";
import _13n from "../../assets/img/13n.png";
import _50n from "../../assets/img/50n.png";

const images = Object.freeze({
    "01d": _01d,
    "02d": _02d,
    "03d": _03d,
    "04d": _04d,
    "09d": _09d,
    "10d": _10d,
    "11d": _11d,
    "13d": _13d,
    "50d": _50d,
    "01n": _01n,
    "02n": _02n,
    "03n": _03n,
    "04n": _04n,
    "09n": _09n,
    "10n": _10n,
    "11n": _11n,
    "13n": _13n,
    "50n": _50n,
});

const WeatherImg = props => {
    return (
        <img
            className={props.className}
            src={images[props.src]}
            alt={props.alt}
        />
    );
};

export default WeatherImg;
