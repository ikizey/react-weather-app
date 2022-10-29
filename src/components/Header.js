import React from "react";
import styles from "./Header.module.css";
import logo from "../assets/img/logo.svg";

const Header = () => {
    return (
        <div className={styles.container}>
            <img
                className={styles.logo}
                src={logo}
                alt="logo: smiling sun"
            ></img>
            <div className={styles.title}>Simple Weather</div>
        </div>
    );
};

export default Header;
