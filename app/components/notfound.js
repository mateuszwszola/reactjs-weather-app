import React from 'react';
import { Link } from 'react-router-dom';

function NotFound () {
  return (
    <div className='not-found'>
      <h1>This page doesn't exist</h1>
      <Link to='/'>Back to home page</Link>
    </div>
  )
}


export default NotFound;
