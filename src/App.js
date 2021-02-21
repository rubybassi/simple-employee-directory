import './App.css';
import { useState, useEffect, useRef } from "react";
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import EmployeeTable from './components/EmployeeTable.js';
import SearchBar from './components/SearchBar.js';


function App() {
  const [sorted, setSort] = useState(false);
  const [search, setSearch] = useState('');

// get and set user search value
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

  return (
    <div className="App">
      <SearchBar countrySearched={countrySearched} search={search}/>
      <EmployeeTable sortColumn={sortColumn} search={search}/>
    </div>
  );
};

export default App;
