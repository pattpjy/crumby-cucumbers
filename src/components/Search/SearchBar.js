import React, { useState } from "react";
import PropTypes from "prop-types";
import './SearchBar.css'

const SearchBar = ({ searchMovies, clearSearchResult }) => {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    searchMovies(searchInput);
  };
  const clearSearch = (e) => {
    setSearchInput("");
    clearSearchResult();
  };

  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Search"
        onChange={handleChange}
        value={searchInput}
        onKeyUp={(event) => submitSearch(event)}
      />
      <button className="clear" onClick={(event) => clearSearch(event)}>CLEAR</button>
    </div>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  searchMovies: PropTypes.func.isRequired,
  clearSearchResult: PropTypes.func.isRequired,
};
