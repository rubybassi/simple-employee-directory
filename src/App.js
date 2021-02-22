import "./App.css";
import { useState, useEffect, useRef } from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import EmployeeTable from "./components/EmployeeTable.js";
import SearchBar from "./components/SearchBar.js";

function App() {
  const [sorted, setSort] = useState(false);
  const [search, setSearch] = useState("");

  // get and set column sort status
  const sortColumn = (e) => {
    e.preventDefault();
    console.log("sorted", e.target.id);
    setSort(true);
  };

  return (
    <div className="App">
      <Header />
      <SearchBar setSearch={setSearch} search={search} />
      <EmployeeTable sortColumn={sortColumn} search={search} />
    </div>
  );
}

export default App;
