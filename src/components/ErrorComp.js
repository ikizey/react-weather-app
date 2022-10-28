import React from "react";
import styles from "./ErrorComp.module.css";

const ErrorComp = props => {
    return <div className={styles.error}>{props.error}</div>;
};

export default ErrorComp;
