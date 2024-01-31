import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function InputWithLabel({ value, onChange, children }) {
  const unputId = crypto.randomUUID();
  let inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <Wrapper>
      <label htmlFor={unputId}>{children}</label>
      <Input
        type="text"
        id={unputId}
        value={value}
        onChange={onChange}
        ref={inputRef}
      />
    </Wrapper>
  );
}

InputWithLabel.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

const Wrapper = styled.div`
  display: grid;
  gap: 2px;
`;

const Input = styled.input`
  flex: 1; /* Allows the input to take the maximum available width */
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #555555;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s;

  &:focus {
    outline: none;
    background-color: #6c6c6c;
  }

  &:hover {
    background-color: #6c6c6c;
  }
`;
