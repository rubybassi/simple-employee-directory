import "./App.css";
import { useState, useEffect, useRef } from "react";
import Header from "./components/Header.js";
import EmployeeTable from "./components/EmployeeTable.js";
import SearchBar from "./components/SearchBar.js";
import Container from 'react-bootstrap/Container';

function App() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(false);

  return (
    <Container fluid>
      <Header />
      <SearchBar search={search} setSearch={setSearch} />
      <EmployeeTable search={search} sort={sort} setSort={setSort}/>
    </Container>
  );
}

export default App;
