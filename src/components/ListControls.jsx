import styled from 'styled-components';
import { SortButton } from '../styles/TextButtonStyles';
import PropTypes from 'prop-types';

function ListControls({ titleAscOrder, setTitleAscOrder }) {
  const handleTitleSortOrderChange = () => {
    setTitleAscOrder(!titleAscOrder);
  };

  return (
    <ControlsContainer>
      <SortButton onClick={handleTitleSortOrderChange}>
        Sort by Title
        {/* $ is a prop that is passed to the styled component */}
        <Arrow $asc={titleAscOrder}>&uarr;</Arrow>
      </SortButton>
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
