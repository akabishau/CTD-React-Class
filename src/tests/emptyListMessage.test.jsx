import { render } from '@testing-library/react';
import EmptyListMessage from '../components/EmptyListMessage';
import { MESSAGES } from '../constants';

describe('EmptyListMessage', () => {
  it('should render properly', () => {
    render(<EmptyListMessage />);
  });

  it('renders the message correctly', () => {
    const { getByText } = render(<EmptyListMessage />);
    expect(getByText(MESSAGES.EMPTY_LIST)).toBeInTheDocument();
    expect(getByText(MESSAGES.START_TODO)).toBeInTheDocument();
  });
});
