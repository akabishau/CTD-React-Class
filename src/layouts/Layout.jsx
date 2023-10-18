import styled from 'styled-components';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header>Future Header</Header>
      <main>{children}</main>
      <Footer>Future Footer</Footer>
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
`;

const Footer = styled.header`
  background-color: #3a3a3a;
  color: black;
  height: 50px;
`;
