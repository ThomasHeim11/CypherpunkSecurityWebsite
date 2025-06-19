import sitemap from '../../app/sitemap';
import { MetadataRoute } from 'next';

describe('sitemap', () => {
  beforeEach(() => {
    // Mock Date.now() to have consistent lastModified dates in tests
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2024-01-01T00:00:00.000Z'));
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should return a valid sitemap array', () => {
    const result = sitemap();

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(6);
  });

  it('should include all expected URLs with correct structure', () => {
    const result = sitemap();
    const baseUrl = 'https://cypherpunksecurity.io';

    const expectedUrls = [
      baseUrl,
      `${baseUrl}/services`,
      `${baseUrl}/process`,
      `${baseUrl}/about`,
      `${baseUrl}/reports`,
      `${baseUrl}/contact`,
    ];

    result.forEach((entry, index) => {
      expect(entry.url).toBe(expectedUrls[index]);
      expect(entry.lastModified).toBeInstanceOf(Date);
      expect(entry.changeFrequency).toBeDefined();
      expect(entry.priority).toBeDefined();
    });
  });

  it('should have correct priorities for each page', () => {
    const result = sitemap();

    const expectedPriorities = [1, 0.8, 0.8, 0.7, 0.9, 0.6];

    result.forEach((entry, index) => {
      expect(entry.priority).toBe(expectedPriorities[index]);
    });
  });

  it('should have correct change frequencies', () => {
    const result = sitemap();

    const expectedFrequencies = [
      'weekly',
      'monthly',
      'monthly',
      'monthly',
      'weekly',
      'monthly',
    ];

    result.forEach((entry, index) => {
      expect(entry.changeFrequency).toBe(expectedFrequencies[index]);
    });
  });

  it('should return sitemap entries with current date as lastModified', () => {
    const result = sitemap();
    const expectedDate = new Date('2024-01-01T00:00:00.000Z');

    result.forEach(entry => {
      expect(entry.lastModified).toEqual(expectedDate);
    });
  });

  it('should conform to MetadataRoute.Sitemap type structure', () => {
    const result = sitemap();

    result.forEach(entry => {
      expect(typeof entry.url).toBe('string');
      expect(entry.lastModified).toBeInstanceOf(Date);
      expect(typeof entry.changeFrequency).toBe('string');
      expect(typeof entry.priority).toBe('number');
    });
  });

  it('should have home page with highest priority', () => {
    const result = sitemap();
    const homePage = result.find(
      entry => entry.url === 'https://cypherpunksecurity.io'
    );

    expect(homePage?.priority).toBe(1);
  });

  it('should have reports page with second highest priority', () => {
    const result = sitemap();
    const reportsPage = result.find(entry => entry.url.includes('/reports'));

    expect(reportsPage?.priority).toBe(0.9);
  });
});
