import React from "react";
import styles from "./Loader.module.css";

const Loader = () => {
    return (
        <div class={styles["loadingio-spinner-magnify"]}>
            <div class={styles["ldio"]}>
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
