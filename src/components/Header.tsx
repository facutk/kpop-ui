import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/toupper">To Upper</Link>
  </nav>
);

export default Header;
