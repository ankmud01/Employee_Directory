import React from 'react';
import './Search.css';

export default function search(props) {
  return (
    <div className='container'>
      <form className='form'>
        <div className='row'>
          <div className='col-6'>
            <input
              onChange={props.handleEmailSearch}
              className='form-control mr-lg-2'
              name='emailSearch'
              type='search'
              placeholder='Search by Email'
              value={props.value}
            />
          </div>
          <div className='col-6'>
            <input
              onChange={props.handleDeptSearch}
              className='form-control mr-lg-2'
              name='deptSearch'
              type='search'
              placeholder='Search by Department'
              value={props.value}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
