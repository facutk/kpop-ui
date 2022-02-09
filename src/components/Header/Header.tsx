import { Link } from 'react-router-dom';
import Avatar from '@/ui-kit/Avatar';
import Logo from '@/components/Logo';
import { Wrapper } from './Header.styles';

const Header = () => (
  <Wrapper>
    <div>
      <Logo />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/toupper">To Upper</Link>
      </nav>
    </div>
    <Avatar size='sm' />
  </Wrapper>
);

export default Header;
