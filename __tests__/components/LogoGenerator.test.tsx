import { render, screen } from '@testing-library/react';
import LogoGenerator from '../../components/LogoGenerator';

describe('LogoGenerator Component', () => {
  it('renders correctly with default props', () => {
    render(<LogoGenerator />);

    const logo = screen.getByAltText('CypherpunkSecurity Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/logo.svg');
  });

  it('applies custom className', () => {
    const customClass = 'h-16 w-16';
    const { container } = render(<LogoGenerator className={customClass} />);

    const logoContainer = container.firstChild as HTMLElement;
    expect(logoContainer).toHaveClass(customClass);
  });

  it('has proper styling classes', () => {
    const { container } = render(<LogoGenerator />);

    const logoContainer = container.firstChild as HTMLElement;
    expect(logoContainer).toHaveClass('relative', 'group', 'cursor-pointer');
  });

  it('contains glow effect div', () => {
    const { container } = render(<LogoGenerator />);

    const glowEffect = container.querySelector('.bg-gradient-to-br');
    expect(glowEffect).toBeInTheDocument();
    expect(glowEffect).toHaveClass('blur-sm', 'opacity-50');
  });

  it('has hover transition effects', () => {
    render(<LogoGenerator />);

    const logo = screen.getByAltText('CypherpunkSecurity Logo');
    expect(logo).toHaveClass(
      'group-hover:brightness-125',
      'transition-all',
      'duration-300'
    );
  });

  it('uses default className when none provided', () => {
    const { container } = render(<LogoGenerator />);

    const logoContainer = container.firstChild as HTMLElement;
    expect(logoContainer).toHaveClass('h-8', 'w-8');
  });
});
