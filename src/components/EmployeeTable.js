import { useState, useEffect, useRef } from "react";
import EmployeeData from "./EmployeeData.js";

const EmployeeTable = ({ search, sortColumn, sort, setSort}) => {
	const [value, setValue] = useState('');

	const sorted = (e) => {
		const button = e.target.id
		console.log('button', value);
		setSort(true);
		setValue(button);
		//return value;	
	}


  return (
    <div>
      <table className="">
        <thead>
          <tr>
						<th type="submit" id="picture.thumbnail" onClick={sorted}>Thumbnail</th>
            <th type="submit" id="gender" onClick={sorted}>Gender</th>
            <th type="submit" id="name.first" onClick={sorted}>First Name</th>
            <th type="submit" id="name.last" onClick={sorted}>Surname</th>
            <th type="submit" id="location.country" onClick={sorted}>Country</th>
            <th type="submit" id="email" onClick={sorted}>Email</th>
          </tr>
        </thead>
        <EmployeeData search={search} sortColumn={sortColumn} sort={sort} setSort={setSort} value={value}/>
      </table>
    </div>
  );
};

export default EmployeeTable;
