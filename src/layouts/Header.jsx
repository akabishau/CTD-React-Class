import styled from 'styled-components';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Navigation />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  height: 50px;
  margin-bottom: 20px;
  padding: 0 10px 30px;
  border-bottom: 1px solid #3a3a3a;
  align-items: center;
`;
