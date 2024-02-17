import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Navigation() {
  return (
    <StyledNav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/about">About</StyledLink>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: end;
  gap: 30px;
  color: #ffffff;
  padding: 10px 15px;
  transition: background-color 0.3s;
`;

const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;

  &:hover {
    color: #dddddd;
    border-bottom: 2px solid #dddddd;
  }
`;

export default Navigation;
