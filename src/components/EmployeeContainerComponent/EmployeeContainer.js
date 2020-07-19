import React, { Component } from 'react';
import Header from '../HeaderComponent/Header';
import Search from '../SearchComponent/Search';
import employees from '../../utils/employee.json';
import EmployeeTable from '../EmployeeTableComponent/employeetable';

export default class EmployeeContainer extends Component {
  state = {
    employees,
    searchEmployees: [],
    sort: '',
  };

  componentDidMount() {
    this.setState({
      searchEmployees: [...employees],
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

  handleFirstNameSort = () => {
    // console.log('I should sort by first name');
    const myEmployees = this.state.employees;
    if(this.state.sort === 'asc'){
        const sortEmployee = myEmployees.sort((a, b) =>
        a.firstName.toLowerCase() > b.firstName.toLowerCase() ? 1 : -1
      );
      this.setState({
        searchEmployees: sortEmployee,
        sort: 'desc',
      });
    }else{
        const sortEmployee = myEmployees.sort((a, b) =>
        a.firstName.toLowerCase() < b.firstName.toLowerCase() ? 1 : -1
      );
      this.setState({
        searchEmployees: sortEmployee,
        sort: 'asc',
      });
    }
  };

  handleLastNameSort = () => {
    // console.log('I should sort by last name');
    const myEmployees = this.state.employees;
    if(this.state.sort === 'asc'){
        const sortEmployee = myEmployees.sort((a, b) =>
        a.lastName.toLowerCase() > b.lastName.toLowerCase() ? 1 : -1
      );
      this.setState({
        searchEmployees: sortEmployee,
        sort: 'desc',
      });
    }else{
        const sortEmployee = myEmployees.sort((a, b) =>
        a.lastName.toLowerCase() < b.lastName.toLowerCase() ? 1 : -1
      );
      this.setState({
        searchEmployees: sortEmployee,
        sort: 'asc',
      });
    }
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
            sortByFirstname={this.handleFirstNameSort}
            sortByLastname={this.handleLastNameSort}
          />
        </div>
      </div>
    );
  }
}
