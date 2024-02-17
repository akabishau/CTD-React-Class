import { render } from '@testing-library/react';
import EmptyState from '../components/EmptyState';

const stubMessage = {
  title: 'Stub title',
  action: 'Stub action'
};

describe('EmptyState', () => {
  let message;
  beforeAll(() => {
    message = stubMessage;
  });

  afterAll(() => {
    message = null;
  });

  it('should render properly', () => {
    render(<EmptyState message={message} />);
  });

  it('renders the correct number of child elements', () => {
    const { container } = render(<EmptyState message={message} />);
    expect(container.firstChild.childNodes.length).toBe(2);
  });

  it('renders the message correctly', () => {
    const { getByText } = render(<EmptyState message={message} />);
    expect(getByText(message.title)).toBeInTheDocument();
    expect(getByText(message.action)).toBeInTheDocument();
  });
});
