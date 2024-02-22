import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function Navigation() {
  const { themeConfig } = useContext(ThemeContext);
  const navConfig = themeConfig.navigation;
  return (
    <StyledNav>
      <StyledLink to={navConfig.home.path}>{navConfig.home.label}</StyledLink>
      <StyledLink to={navConfig.settings.path}>
        {navConfig.settings.label}
      </StyledLink>
      <StyledLink to={navConfig.about.path}>{navConfig.about.label}</StyledLink>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: grid;
  grid-template-columns: auto auto auto;
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
