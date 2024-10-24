import Select from 'react-select';
import { useTheme } from '../hooks/useTheme';
import { THEMES } from '../constants/uiConfig';

export default function ThemePicker() {
  const { theme, setTheme } = useTheme();

  const themeOptions = Object.keys(THEMES).map(key => ({
    value: key,
    label: THEMES[key].name,
    icon: THEMES[key].icon
  }));

  const handleChange = selectedOption => {
    setTheme(selectedOption.value); // Update the theme when an option is selected
  };

  // TODO: review and refactor styles
  // custom styles for the dropdown
  const customStyles = {
    // main container for selected value and dropdown indicator
    control: (provided, state) => ({
      ...provided,
      backgroundColor: '#3a3a3a',
      border: '1px solid #555555',
      boxShadow: state.isFocused ? 'none' : 'none', // remove blue outline
      color: '#ffffff',
      '&:hover': {
        borderColor: '#ffffff'
      }
    }),

    // selected option value
    singleValue: provided => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
      color: '#ffffff'
    }),

    // dropdown indicator
    dropdownIndicator: provided => ({
      ...provided
    }),

    // container for all options in the dropdown
    menu: provided => ({
      ...provided,
      backgroundColor: '#3a3a3a'
    }),

    // container for the list of options - max height and scrolling
    menuList: provided => ({
      ...provided
    }),

    // individual option item
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#555555' : '#3a3a3a',
      color: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      padding: '10px'
    })
  };

  // configure to include icon and lable to the dropdown
  const formatOptionLabel = ({ label, icon }) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={icon} alt={label} style={{ width: 20, marginRight: 10 }} />
      {label}
    </div>
  );

  return (
    <Select
      value={themeOptions.find(option => option.value === theme)}
      onChange={handleChange}
      options={themeOptions}
      styles={customStyles}
      formatOptionLabel={formatOptionLabel}
      isSearchable={false} // optional/default is false
      placeholder="" // optional, not needed in this case
    />
  );
}

// TODO: consider building default app dropdown style and inheriting from it
