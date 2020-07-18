import React, { Component } from 'react';
import Header from '../HeaderComponent/Header';
import Search from '../SearchComponent/Search';
import employees from '../../utils/employee.json';

export default class EmployeeContainer extends Component {
  state = {
    // Picure: '1',
    // FirstName: 'Ankit',
    // LastName: 'Mudvari',
    // Email: 'ankmud01@gmail.com',
    // PhoneNumber: '120-456-7891',
    // Department: 'Information Technology',
    // Manager: 'John Kim',
    employees,
  };

  render() {
    return (
      <div>
        <Header />
        <Search />
        <div className='jumbotron'>
          <h3>List of Employees</h3>
          <table class='table'>
            <thead class='thead-dark'>
              <tr>
                <th scope='col'>Pic</th>
                <th scope='col'>FirstName</th>
                <th scope='col'>LastName</th>
                <th scope='col'>Email</th>
                <th scope='col'>PhoneNumber</th>
                <th scope='col'>Department</th>
                <th scope='col'>Manager</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map(employee => (
                <tr>
                  <td><img alt={employee.firstName} src = {employee.picture} /></td>
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
      </div>
    );
  }
}
