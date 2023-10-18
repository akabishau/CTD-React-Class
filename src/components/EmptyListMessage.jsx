import styled from 'styled-components';

export default function EmptyListMessage() {
  return (
    <Message>
      {"You don't have any TODOs now 🤔"}
      <br />
      {"Let's start by creating the first one! 🚀"}
    </Message>
  );
}

const Message = styled.p`
  background-color: #3a3a3a;
  color: #ffffff;
  padding: 10px 15px;
  border-radius: 5px;
  text-align: center;
`;
