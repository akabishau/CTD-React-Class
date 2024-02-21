import styled from 'styled-components';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <StyledFooter>
      <FooterText>
        &copy; {currentYear} by Aleksey Kabishau. Final Project for CTD React
        Class.
      </FooterText>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
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
