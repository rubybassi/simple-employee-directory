import { useState, useEffect, useRef } from "react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <form>
      Filter by Country:
      <input
        name="search"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={"search by country"}
      ></input>
    </form>
  );
};

export default SearchBar;
