import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';

export default function DefaultLayout({ children }) {
  const currentYear = new Date().getFullYear();
  return (
    <Wrapper>
      <Header>
        <Logo />
        <Navigation />
      </Header>
      <main>{children}</main>
      <Footer>
        <FooterText>
          &copy; {currentYear} by Aleksey Kabishau. Final Project for CTD React
          Class.
        </FooterText>
      </Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto; /* header, main, footer */
  align-items: start;
  width: 100%;
`;

const Header = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  height: 50px;
  margin-bottom: 20px;
  padding: 0 10px 30px;
  border-bottom: 1px solid #3a3a3a;
  align-items: center;
`;

const Footer = styled.footer`
  display: flex;
  height: 50px;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #3a3a3a;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #fff;
`;
