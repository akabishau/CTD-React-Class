import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function EmptyState({ message }) {
  return (
    <Message>
      <div className="title">{message.title}</div>
      <div className="action">{message.action}</div>
    </Message>
  );
}

EmptyState.propTypes = {
  message: PropTypes.shape({
    title: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired
  }).isRequired
};

const Message = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  gap: 10px;
  background-color: #3a3a3a;
  color: #ffffff;
  padding: 10px 15px;
  border-radius: 5px;
  text-align: center;

  .title {
    font-size: 1.2em;
  }

  .action {
    font-size: 1em;
  }
`;
