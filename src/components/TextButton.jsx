import PropTypes from 'prop-types';
import * as ButtonStyles from '../styles/TextButtonStyles';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

// mapping object
const BUTTON_VARIANTS = {
  add: ButtonStyles.AddButton,
  sort: ButtonStyles.SortButton
};

export default function TextButton({
  type = 'button',
  variant,
  disabled = true,
  onClick = type !== 'submit'
    ? () => console.warn(`onClick is not provided for ${variant} button`)
    : undefined,
  children
}) {
  const { themeConfig } = useContext(ThemeContext);

  const Button = BUTTON_VARIANTS[variant];

  return (
    <Button type={type} disabled={disabled} onClick={onClick}>
      {/* {children || variant.toUpperCase()} */}
      {children || themeConfig.buttons[variant]}
    </Button>
  );
}

TextButton.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
  variant: PropTypes.oneOf(Object.keys(BUTTON_VARIANTS)).isRequired,
  disabled: PropTypes.bool,
  // onClick is optional because for 'submit' type buttons, the form's onSubmit handler is used instead
  onClick: PropTypes.func
};
