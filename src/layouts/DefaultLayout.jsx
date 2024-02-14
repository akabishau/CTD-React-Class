import styled from 'styled-components';
import Navigation from '../components/Navigation';

export default function DefaultLayout({ children }) {
  const currentYear = new Date().getFullYear();
  return (
    <Wrapper>
      <Header>
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
  background-color: #3a3a3a;
  color: black;
  height: 50px;
  margin-bottom: 20px;
`;

const Footer = styled.footer`
  background-color: #3a3a3a;
  height: 50px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #fff; // Adjust this to match your design
`;
