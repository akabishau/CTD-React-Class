import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { THEMES } from '../constants/uiConfig';

function Navigation() {
  const { theme } = useContext(ThemeContext);
  const navigation = THEMES[theme].navigation;
  return (
    <StyledNav>
      <StyledLink to={navigation.home.path}>{navigation.home.label}</StyledLink>
      <StyledLink to={navigation.settings.path}>
        {navigation.settings.label}
      </StyledLink>
      <StyledLink to={navigation.about.path}>
        {navigation.about.label}
      </StyledLink>
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
