import React from "react";
import styles from "./Loader.module.css";

const Loader = () => {
    return (
        <div className={styles["loadingio-spinner-magnify"]}>
            <div className={styles["ldio"]}>
                <div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
