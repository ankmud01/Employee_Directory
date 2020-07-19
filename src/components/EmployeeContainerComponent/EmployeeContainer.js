import React, { Component } from 'react';
import Header from '../HeaderComponent/Header';
import Search from '../SearchComponent/Search';
import employees from '../../utils/employee.json';

export default class EmployeeContainer extends Component {
  state = {
    employees,
    deptSearch: '',
    emailSearch: ''
  };

  handleDeptChange = (event) => {
    event.preventDefault();
    console.log(event.target.name);
  };

  handleEmailChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
        [name]: value
    })
    console.log(value)
  };

  render() {
    return (
      <div>
        <Header />
        <Search 
        search={this.state.search}
        handleSearchbyDept={this.handleSearchbyDept}
        handleSearchbyEmail={this.handleSearchbyEmail}
        />
        <div className='jumbotron'>
          <h3>List of Employees</h3>
          <table className='table'>
            <thead className='thead-dark'>
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
              {this.state.employees.map((employee) => (
                <tr>
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
      </div>
    );
  }
}
