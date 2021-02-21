import { useState, useEffect, useRef } from 'react';

const EmployeeData = ({search, filter}) => {
  const [employees, setEmployees] = useState([]);
  
  // fetch data and render on page load
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
  useEffect(() => {
  if (filter) {
    console.log('filter employee data render')  
    const filteredEmployees = employees.filter(employee => employee.location.country.toLowerCase().includes(search));
    setEmployees([...filteredEmployees]);
  } 
  },[search, filter]);  
  
return (
  <tbody>
    {employees.map(em => (
      <tr key={em.login.uuid}>
        <td><img src={em.picture.thumbnail} alt="employee" /></td>
        <td>{em.gender}</td>
        <td>{em.name.first}</td>
        <td>{em.name.last}</td>
        <td>{em.location.country}</td>
        <td>{em.email}</td>
      </tr> 
    ))}  
  </tbody>
  )
};

export default EmployeeData;