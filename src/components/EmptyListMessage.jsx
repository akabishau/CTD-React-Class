import styled from 'styled-components';
import { MESSAGES } from '../constants';

export default function EmptyListMessage() {
  return (
    <Message>
      <span>{MESSAGES.EMPTY_LIST}</span>
      <span>{MESSAGES.START_TODO}</span>
    </Message>
  );
}

const Message = styled.p`
  background-color: #3a3a3a;
  color: #ffffff;
  padding: 10px 15px;
  border-radius: 5px;
  text-align: center;

  span {
    display: block;
    margin-bottom: 10px;
  }
`;
