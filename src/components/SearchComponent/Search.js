import React from 'react';
import './Search.css';

export default function search(props) {
  return (
    <div className='container'>
      <form className='form'>
        <div className='row'>
          <div className='col-4'>
            <input
              onChange={props.handleEmailChange}
              className='form-control mr-lg-2'
              name='emailSearch'
              type='search'
              placeholder='Search by Email'
              value={props.emailSearch}
            />
          </div>
          <div className='col-2'>
            <button type='button' className='btn btn-primary'>
              Search
            </button>
          </div>
          <div className='col-4'>
            <input
              onChange={props.handleDeptChange}
              className='form-control mr-lg-2'
              name='emailSearch'
              type='search'
              placeholder='Search by Department'
              aria-label='Search'
            />
          </div>
          <div className='col-2'>
            <button
              type='button'
              className='btn btn-primary'
              value={props.deptSearch}
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
