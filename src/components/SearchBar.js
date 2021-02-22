import { useState, useEffect, useRef } from "react";
import Form from "react-bootstrap/Form";

const SearchBar = ({ search, setSearch }) => {
  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Search the database by country and sort asc. by clicking columns</Form.Label>
        <Form.Control
          name="search"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={"search country..."}
        />
      </Form.Group>
    </Form>
  );
};

export default SearchBar;
