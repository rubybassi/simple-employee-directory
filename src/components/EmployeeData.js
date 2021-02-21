import { useState, useEffect, useRef } from 'react';

const EmployeeData = ({search}) => {
  const [employees, setEmployees] = useState([]);
  
  // fetch data and render on page load once
  useEffect(() => {
    console.log('intial employee data render')
    const queryURL = "https://randomuser.me/api/?results=100";
    const fetchEmployees = async() => {
    const response = await fetch(queryURL);
    const payload = await response.json();
    console.log('response data', payload);
    setEmployees(payload.results || []); // if search fails fallbacks or empty array
    }
    fetchEmployees();
  },[]);

  // side effect when search is activated: filters the employees array
 /* useEffect(() => {
  if (filter) {
    console.log('filter employee data render')  
    const filteredEmployees = employees.filter(employee => employee.location.country.toLowerCase().includes(search));
    setEmployees([...filteredEmployees]);
    //setSearch(search);
  } 
  },[filter]); */
  
return (
  <tbody>
    
    { // loop array, if matched to search return filtered results else return all data.
    employees.filter((employee) => {
      if (employee.location.country.toLowerCase().includes(search)) {
        return employee;
      }
    }).map(employee => (
      <tr key={employee.login.uuid}>
        <td><img src={employee.picture.thumbnail} alt="employee" /></td>
        <td>{employee.gender}</td>
        <td>{employee.name.first}</td>
        <td>{employee.name.last}</td>
        <td>{employee.location.country}</td>
        <td>{employee.email}</td>
      </tr> 
    ))}  
  </tbody>
  )
};

export default EmployeeData;