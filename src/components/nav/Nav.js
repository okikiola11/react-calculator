import React from 'react';
import { Link } from 'react-router-dom';
import './nav.module.css';

const Nav = () => (
  <>
    <nav>
      <header>
        <Link to="/">Math Magicians</Link>
      </header>
      <ul>
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
