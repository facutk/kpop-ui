import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import { Wrapper } from './Header.styles';

const Header = () => (
  <Wrapper>
    <Logo />
    <nav>
      <Link to="/">Home</Link>
      <Link to="/toupper">To Upper</Link>
    </nav>
  </Wrapper>
);

export default Header;
