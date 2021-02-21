import { useState, useEffect, useRef } from "react";

const SearchBar = ({search, onSubmit, countrySearched}) => {

	return (
			<form>
			Filter by Country:
					<input name="search" type="text" value={search} onChange={countrySearched}></input>
					<button type="submit" onClick={onSubmit}>Filter</button>
			</form>
	)

};

export default SearchBar;