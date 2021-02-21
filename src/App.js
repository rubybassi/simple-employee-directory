import './App.css';
import { useState, useEffect, useRef } from "react";
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import EmployeeTable from './components/EmployeeTable.js';
import SearchBar from './components/SearchBar.js';


function App() {
  const [sorted, setSort] = useState(false);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState(false);

  // wrap in useEffect with sorted dependency?
const sortColumn = (e) => {
  e.preventDefault();
  console.log('sorted', e.target.id);
  setSort(true);
  }

// get filter by country value
const countrySearched = (e) => {
  setSearch(e.target.value);
	console.log('searched for', e.target.value);
	}

// button clicked event	
const onSubmit = (e) => {
	e.preventDefault();
  console.log('button clicked and searched for', search);
  setFilter(true);
}

  return (
    <div className="App">
      <SearchBar countrySearched={countrySearched} search={search} onSubmit={onSubmit}/>
      <EmployeeTable sortColumn={sortColumn} search={search} filter={filter}/>
    </div>
  );
};

export default App;
