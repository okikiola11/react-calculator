import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <>
    <nav>
      <ul>
        <li>
          <Link to="/">Math Magicians</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/quote">Quote</Link>
        </li>
      </ul>
    </nav>
  </>
);

export default Nav;
