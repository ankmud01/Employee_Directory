import React, { Component } from 'react';
import Header from '../HeaderComponent/Header';
import Search from '../SearchComponent/Search';
import employees from '../../utils/employee.json';
import EmployeeTable from '../EmployeeTableComponent/employeetable';

export default class EmployeeContainer extends Component {
  state = {
    employees,
    searchEmployees: [],
  };

  componentDidMount() {
    this.setState({
      searchEmployees: [...employees]
    });
  }

  handleDeptSearch = (event) => {
    let value = event.target.value;
    const myEmployees = [...employees];
    // console.log(myEmployees);

    let searchEmployees = myEmployees.filter((employee) =>
      employee.department.toLowerCase().includes(value.toLowerCase())
    );

    this.setState(
      {
        ...this.state,
        searchEmployees,
      },
      console.log('State', this.state)
    );
  };

  handleEmailSearch = (event) => {
    let value = event.target.value;
    const myEmployees = [...employees];
    // console.log(myEmployees);

    let searchEmployees = myEmployees.filter((employee) =>
      employee.email.toLowerCase().includes(value.toLowerCase())
    );

    this.setState(
      {
        ...this.state,
        searchEmployees,
      },
      console.log('State', this.state)
    );
  };

  render() {
    return (
      <div>
        <Header />
        <Search
          handleEmailSearch={this.handleEmailSearch}
          handleDeptSearch={this.handleDeptSearch}
        />
        <div className='jumbotron'>
          <EmployeeTable
            employees={this.state.searchEmployees}
          />
        </div>
      </div>
    );
  }
}
