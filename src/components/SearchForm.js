import React from "react";
import { useRef } from "react";
import { FcSearch } from "react-icons/fc";
import styles from "./SearchForm.module.css";

const SearchForm = ({ onSearch }) => {
    const searchText = useRef();

    const submitHandler = event => {
        event.preventDefault();
        onSearch(searchText.current.value.trim());
    };

    return (
        <div className={styles.form}>
            <form className={styles.form} onSubmit={submitHandler}>
                <label htmlFor="search"></label>
                <input
                    ref={searchText}
                    className={styles.input}
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Enter location... (Berlin)"
                />

                <FcSearch className={styles.icon} onClick={submitHandler} />
            </form>
        </div>
    );
};

export default SearchForm;
