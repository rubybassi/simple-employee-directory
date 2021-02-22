import { useState, useEffect, useRef } from "react";
import EmployeeData from "./EmployeeData.js";
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortAlphaDown } from '@fortawesome/free-solid-svg-icons'

const EmployeeTable = ({ search, sortColumn, sort, setSort}) => {
	const [value, setValue] = useState('');

	const sorted = (e) => {
		const button = e.target.id
		console.log('button is', value);
		setSort(true);
		setValue(button);
	}

  return (
    <div>
      <Table responsive striped bordered hover size="sm" className="table">
        <thead>
          <tr>
						<th>Profile</th>
            <th id="gender" onClick={sorted}>Gender <FontAwesomeIcon icon={faSortAlphaDown}/></th>
            <th id="name.first" onClick={sorted}>First Name <FontAwesomeIcon icon={faSortAlphaDown}/></th>
            <th id="name.last" onClick={sorted}>Surname <FontAwesomeIcon icon={faSortAlphaDown}/></th>
            <th id="location.country" onClick={sorted}>Country <FontAwesomeIcon icon={faSortAlphaDown}/></th>
            <th id="email" onClick={sorted}>Email <FontAwesomeIcon icon={faSortAlphaDown}/></th>
          </tr>
        </thead>
        <EmployeeData search={search} sortColumn={sortColumn} sort={sort} setSort={setSort} value={value}/>
      </Table>
    </div>
  );
};

export default EmployeeTable;
