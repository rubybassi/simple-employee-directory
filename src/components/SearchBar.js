import { useState, useEffect, useRef } from "react";

const SearchBar = ({search,countrySearched}) => {

	return (
			<form>
			Filter by Country:
					<input name="search" type="text" value={search} onChange={countrySearched} placeholder={"search country"}></input>
			</form>
	)

};

export default SearchBar;