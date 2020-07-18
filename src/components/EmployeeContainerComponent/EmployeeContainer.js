import React, { Component } from 'react';
import Header from '../HeaderComponent/Header';
import Search from '../SearchComponent/Search';

export default class EmployeeContainer extends Component {
  state = {
    Picure: '1',
    FirstName: 'Ankit',
    LastName: 'Mudvari',
    Email: 'ankmud01@gmail.com',
    PhoneNumber: '120-456-7891',
    Department: 'Information Technology',
    Manager: 'John Kim',
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
              <tr>
                <td>{this.state.Picure}</td>
                <td>{this.state.FirstName}</td>
                <td>{this.state.LastName}</td>
                <td>{this.state.Email}</td>
                <td>{this.state.PhoneNumber}</td>
                <td>{this.state.Department}</td>
                <td>{this.state.Manager}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
