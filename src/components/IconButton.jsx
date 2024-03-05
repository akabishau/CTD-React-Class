import PropTypes from 'prop-types';
import { useTheme } from '../hooks/useTheme';
import * as ButtonStyles from '../styles/IconButtonStyles';

// mapping object for availaile button variants
const BUTTON_VARIANTS = {
  remove: ButtonStyles.RemoveButton
};

export default function IconButton({ type = 'button', variant, onClick }) {
  const { theme } = useTheme();

  const Button = BUTTON_VARIANTS[variant]; // pick correct button based on variant
  const Icon = ButtonStyles.StyledIcon;
  const IconComponent = ButtonStyles.THEME_ICONS[variant][theme]; // pick correct based on theme

  return (
    <Button type={type} onClick={onClick}>
      {/*
        The 'as' prop of styled-components allows us to dynamically change the component
        that StyledIcon renders. In this case, it will render the IconComponent selected
        based on the current theme.
      */}
      {/* same effect can be done by inline styles: <IconComponent style={yourStyles} /> */}
      <Icon as={IconComponent} />
    </Button>
  );
}

IconButton.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(Object.keys(BUTTON_VARIANTS)).isRequired,
  onClick: PropTypes.func.isRequired
};
