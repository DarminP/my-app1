import React from 'react';
import {Link} from 'react-router-dom'


function Navbar() {
    return (
      <div>
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/books">Books</Link></li>
            <li><Link to="/wheather">Wheather</Link></li>
        </ul>
      </div>
    );
  }
  
  export default Navbar;