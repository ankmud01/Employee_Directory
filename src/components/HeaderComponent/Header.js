import React from 'react';
import './Header.css';

export default function header() {
  return (
    <div className='continer-fluid title'>
      <nav className='navbar navbar-light bg-light'>
        <span className='navbar-brand'>Employee Directory</span>
      </nav>
    </div>
  );
}
