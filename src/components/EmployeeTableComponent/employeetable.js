import React from 'react';

export default function employeetable(props) {
  return (
    <div>
        <h3>List of Employees</h3>
        <table className='table'>
          <thead className='thead-dark'>
            <tr>
              <th scope='col'>Pic</th>
              <th scope='col' ><i className="material-icons">swap_vert</i>FirstName</th>
              <th scope='col'><i className='material-icons'>swap_vert</i>LastName</th>
              <th scope='col'>Email</th>
              <th scope='col'>PhoneNumber</th>
              <th scope='col'>Department</th>
              <th scope='col'>Manager</th>
            </tr>
          </thead>
          <tbody>
            {props.employees.map(employee => (
              <tr key={employee.firstName}>
                <td>
                  <img alt={employee.firstName} src={employee.picture} />
                </td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
                <td>{employee.department}</td>
                <td>{employee.manager}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
}
