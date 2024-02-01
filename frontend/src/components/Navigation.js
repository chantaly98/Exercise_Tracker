import React from 'react';
import { Link } from 'react-router-dom';


function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="../add-exercise">Add Exercise</Link></li>
        <li><Link to="../edit-exercise">Edit Exercise</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
