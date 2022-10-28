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
        <form className={styles.form} onSubmit={submitHandler}>
            <label htmlFor="search"></label>
            <input
                ref={searchText}
                className={`${styles.input} ${styles.element}`}
                type="text"
                name="search"
                id="search"
                placeholder=" Enter location... (ex. Berlin)"
            />

            <FcSearch
                className={`${styles.btn} ${styles.element}`}
                onClick={submitHandler}
            />
            <input type="submit" hidden />
        </form>
    );
};

export default SearchForm;
