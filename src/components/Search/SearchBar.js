import React, { useState } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ searchMovies, clearSearchResult }) => {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    searchMovies(searchInput);
    // if ({ searchInput } === "") {
    //   setSearchInput({ incompleteForm: true });
    // } else {
    //   setSearchInput({ incompleteForm: false });
    //   searchMovies({ searchInput });
    // }
  };
  const clearSearch = (e) => {
    setSearchInput("");
    clearSearchResult();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />
      <button onClick={(event) => submitSearch(event)}>SUBMIT</button>
      {/* {this.state.incompleteForm && (
        <div className="incomplete-form">Please fill all the boxes</div>
      )} */}
      <button onClick={(event) => clearSearch(event)}>CLEAR</button>
    </div>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  searchMovies: PropTypes.func.isRequired,
  clearSearchResult: PropTypes.func.isRequired,
};
