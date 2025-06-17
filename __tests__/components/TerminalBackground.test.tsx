import { render } from '@testing-library/react';
import TerminalBackground from '../../components/TerminalBackground';

describe('TerminalBackground Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<TerminalBackground />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('has correct background classes', () => {
    const { container } = render(<TerminalBackground />);
    const backgroundElement = container.firstChild as HTMLElement;
    expect(backgroundElement).toHaveClass(
      'fixed',
      'inset-0',
      'z-0',
      'overflow-hidden',
      'bg-black'
    );
  });
});
