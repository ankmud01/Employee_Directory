import React from 'react';
import './Search.css';

export default function search() {
  return (
    <div className='container'>
      <form className='form'>
        <div className='row'>
          <div className='col-4'>
            <input
              className='form-control mr-lg-2'
              type='search'
              placeholder='Search by Email'
            />
          </div>
          <div col-2>
            <button type="button" class="btn btn-primary">Search</button>
          </div>
          <div className='col-4'>
            <input
              className='form-control mr-lg-2'
              type='search'
              placeholder='Search by Department'
              aria-label='Search'
            />
          </div>
          <div col-2>
            <button type="button" class="btn btn-primary">Search</button>
          </div>
        </div>
      </form>
    </div>
  );
}
