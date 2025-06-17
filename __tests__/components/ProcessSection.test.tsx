import { render, screen } from '@testing-library/react';
import ProcessSection from '../../components/ProcessSection';

describe('ProcessSection Component', () => {
  it('renders process content correctly', () => {
    render(<ProcessSection />);

    // Use getAllByText for elements that appear multiple times and check count
    const processElements = screen.getAllByText((content, element) => {
      return element?.textContent?.includes('Our Audit Process') || false;
    });
    expect(processElements.length).toBeGreaterThan(0);

    expect(screen.getByText(/documentation review/i)).not.toBeNull();
    expect(screen.getByText(/manual code review/i)).not.toBeNull();
    expect(screen.getByText(/security report/i)).not.toBeNull();
  });

  it('renders all process steps', () => {
    render(<ProcessSection />);

    expect(screen.getByText(/1\. documentation review/i)).toBeInTheDocument();
    expect(screen.getByText(/2\. manual code review/i)).toBeInTheDocument();
    expect(screen.getByText(/3\. static analysis/i)).toBeInTheDocument();
    expect(screen.getByText(/4\. security report/i)).toBeInTheDocument();
  });
});
