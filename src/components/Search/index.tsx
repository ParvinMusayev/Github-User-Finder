import React from "react";

//style
import css from "./Search.module.scss";

//icons
import { ReactComponent as SearchIcon } from "../../assets/icon-search.svg";

const Search: React.FC = () => {
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

        <button>Search</button>
      </div>
    </form>
  );
};

export default Search;
