import "./App.css";
import { useState, useEffect, useRef } from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import EmployeeTable from "./components/EmployeeTable.js";
import SearchBar from "./components/SearchBar.js";

function App() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(false);

  return (
    <div className="App">
      <Header />
      <SearchBar search={search} setSearch={setSearch} />
      <EmployeeTable search={search} sort={sort} setSort={setSort}/>
    </div>
  );
}

export default App;
