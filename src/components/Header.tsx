import { Link } from 'react-router-dom';

import { Wrapper } from './Header.styles';

const Header = () => (
  <Wrapper>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/toupper">To Upper</Link>
    </nav>
  </Wrapper>
);

export default Header;
