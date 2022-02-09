import { Link } from 'react-router-dom';

const Header = () => (
  <Link to="/">
    <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="logo" width={32} />
    KPOP
  </Link>
);

export default Header;
