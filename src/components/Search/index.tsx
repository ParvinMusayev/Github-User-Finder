import React from "react";

//style
import css from "./Search.module.scss";

//icons
import { ReactComponent as SearchIcon } from "../../assets/icon-search.svg";

//components
import { Button } from "../index";

interface ISearchProps {
    hasError?: boolean;
    onSubmit?: (text: string) => void;
}

const Search: React.FC<ISearchProps> = ({ hasError, onSubmit }) => {
    return (
        <form>
            <div className={css.search}>
                <label htmlFor="search" className={css.label}>
                    <SearchIcon />
                </label>
                <input
                    type="text"
                    className={css.textField}
                    id="search"
                    name="username"
                    placeholder="Search Github username"
                />

                {hasError && <div className={css.error}>No result</div>}
                <Button >
                    Search
                </Button>
            </div>
        </form>
    );
};

export default Search;
