import { useState, useEffect, useRef } from 'react';
import EmployeeData from './EmployeeData.js';


const EmployeeTable = ({sortColumn, search, filter}) => {
	
return (

	<div>
		<table className="">
			<thead>
				<tr>
				<th>Pic</th>
				<th type="submit" id='gender' onClick={sortColumn}>Gender</th>
				<th type="submit" id='firstname' onClick={sortColumn}>First Name</th>
				<th type="submit" id='surname' onClick={sortColumn}>Surname</th>
				<th type="submit" id='country' onClick={sortColumn}>Country</th>
				<th type="submit" id='email' onClick={sortColumn}>Email</th>
				</tr>
			</thead>
			<EmployeeData search={search} filter={filter}/>
		</table>
	</div>
)

};

export default EmployeeTable;