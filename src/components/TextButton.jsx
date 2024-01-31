import styled from 'styled-components';
import PropTypes from 'prop-types';

const AddButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #555555;
  color: #ffffff;
  border: 2px solid #ffffff;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  transition:
    transform 0.3s,
    background-color 0.3s,
    border-color 0.3s;

  &:hover {
    transform: scale(1.01);
    background-color: #6c6c6c;
    border-color: #eeeeee;
  }
`;

// mapping object for button variants
const BUTTON_VARIANTS = {
  add: AddButton
};

export default function TextButton({
  type = 'button',
  variant,
  // onClick = () => {
  //   if (type === 'submit') {
  //     () => {};
  //   } else {
  //     console.warn(`onClick is not provided for ${variant} button`);
  //   }
  // }
  onClick = type !== 'submit'
    ? () => console.warn(`onClick is not provided for ${variant} button`)
    : undefined
}) {
  const Button = BUTTON_VARIANTS[variant];

  return (
    <Button type={type} onClick={onClick}>
      {variant.toUpperCase()}
    </Button>
  );
}

TextButton.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
  variant: PropTypes.oneOf(Object.keys(BUTTON_VARIANTS)).isRequired,
  // onClick is optional because for 'submit' type buttons, the form's onSubmit handler is used instead
  onClick: PropTypes.func
};
