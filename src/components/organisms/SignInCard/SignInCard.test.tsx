import { render, fireEvent, screen } from '@testing-library/react';

import SignInCard from './SignInCard';

const mockOnSignIn = jest.fn();

describe('<SignInCard /> organism component', () => {
  beforeEach(() => {
    mockOnSignIn.mockClear();
  });

  it('should render', () => {
    const { asFragment } = render(<SignInCard onSignIn={mockOnSignIn} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should call onSignIn event handler on button click', () => {
    render(<SignInCard onSignIn={mockOnSignIn} />);

    fireEvent.click(screen.getByText('Sign In'));

    expect(mockOnSignIn).toBeCalledTimes(1);
  });
});
