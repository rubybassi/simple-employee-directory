import { useState, useEffect, useRef } from "react";

const EmployeeData = ({ search, sort, setSort, value }) => {
  const [employees, setEmployees] = useState([]);

  // fetch data and render on page load once
  useEffect(() => {
    console.log("intial employee data render");
    const queryURL = "https://randomuser.me/api/?results=10";
    const fetchEmployees = async () => {
      const response = await fetch(queryURL);
      const payload = await response.json();
      console.log("response data", payload);
      setEmployees(payload.results || []); // if search fails fallbacks or empty array
    };
    fetchEmployees();
  }, []);

  // sort column once when onclick is triggered that setSort (dependency) to true
  useEffect(() => {
    if (sort) {
      // switch statement using button id value to sort through array (rows) based on greater than or less than logic
      console.log(`value ${value}`);
      switch (value) {
        case "gender":
          employees.sort((a, b) => {
            if (a.gender < b.gender) return -1;
            if (a.gender > b.gender) return 1;
            return 0;
          });
          break;
        case "name.first":
          employees.sort((a, b) => {
            if (a.name.first < b.name.first) return -1;
            if (a.name.first > b.name.first) return 1;
            return 0;
          });
          break;
        case "name.last":
          employees.sort((a, b) => {
            if (a.name.last < b.name.last) return -1;
            if (a.name.last > b.name.last) return 1;
            return 0;
          });
          break;
        case "location.country":
          employees.sort((a, b) => {
            if (a.location.country < b.location.country) return -1;
            if (a.location.country > b.location.country) return 1;
            return 0;
          });
          break;
        case "email":
          employees.sort((a, b) => {
            if (a.email < b.email) return -1;
            if (a.email > b.email) return 1;
            return 0;
          });
          break;
      }
    }
    setSort(false);
  }, [sort]);

  return (
    <tbody>
      {
        // loop array, if matched to user search return filtered results else return all data.
        employees
          .filter((employee) => {
            if (employee.location.country.toLowerCase().includes(search)) {
              return employee;
            }
          })
          .map((employee) => (
            <tr key={employee.login.uuid}>
              <td>
                <img src={employee.picture.thumbnail} alt="employee" />
              </td>
              <td>{employee.gender}</td>
              <td>{employee.name.first}</td>
              <td>{employee.name.last}</td>
              <td>{employee.location.country}</td>
              <td>{employee.email}</td>
            </tr>
          ))
      }
    </tbody>
  );
};

export default EmployeeData;
