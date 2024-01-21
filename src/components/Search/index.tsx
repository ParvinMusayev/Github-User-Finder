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

    const [userName, setUserName] = React.useState<string>("")

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(userName.trim()){
            onSubmit(userName)
            setUserName("")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
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
                    value={userName}
                    onChange={(e)=> setUserName(e.target.value)}
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
