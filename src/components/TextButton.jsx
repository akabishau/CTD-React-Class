import PropTypes from 'prop-types';
import * as ButtonStyles from '../styles/TextButtonStyles';

// mapping object
const BUTTON_VARIANTS = {
  add: ButtonStyles.AddButton
};

export default function TextButton({
  type = 'button',
  variant,
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
