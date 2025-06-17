import { render, screen } from '@testing-library/react';
import Logo from '../../components/Logo';

describe('Logo Component', () => {
  it('renders without crashing', () => {
    render(<Logo />);
    expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Logo className="custom-class" />);
    const logoElement = container.firstChild;
    expect(logoElement).toHaveClass('custom-class');
  });

  it('has correct default dimensions', () => {
    const { container } = render(<Logo />);
    const logoElement = container.firstChild;
    expect(logoElement).toHaveClass('h-8', 'w-8');
  });
});
