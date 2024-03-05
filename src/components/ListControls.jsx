import styled from 'styled-components';
import Button from './TextButton';
import PropTypes from 'prop-types';
import { useTheme } from '../hooks/useTheme';

function ListControls({ titleAscOrder, setTitleAscOrder }) {
  const { themeConfig } = useTheme();

  const handleTitleSortOrderChange = () => {
    setTitleAscOrder(!titleAscOrder);
  };

  return (
    <ControlsContainer>
      <Button
        type="button"
        variant="sort"
        onClick={handleTitleSortOrderChange}
        disabled={false}
      >
        {themeConfig.buttons.sort}
        {/* $ is a prop that is passed to the styled component */}
        <Arrow $asc={titleAscOrder}>&uarr;</Arrow>
      </Button>
    </ControlsContainer>
  );
}

ListControls.propTypes = {
  titleAscOrder: PropTypes.bool.isRequired,
  setTitleAscOrder: PropTypes.func.isRequired
};

export default ListControls;

const ControlsContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Arrow = styled.span`
  margin-left: 5px;
  display: inline-block;
  transform: ${props => (props.$asc ? 'rotate(0deg)' : 'rotate(180deg)')};
`;
