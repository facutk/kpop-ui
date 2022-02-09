import { Link } from 'react-router-dom';
import Image from '@/ui-kit/Image';
import { Title, Wrapper } from './Logo.styles';

const Header = () => (
  <Link to="/">
    <Wrapper>
      <Image src={process.env.PUBLIC_URL + '/logo192.png'} alt="logo" htmlWidth={32} />
      <Title>KPOP</Title>
    </Wrapper>
  </Link>
);

export default Header;
