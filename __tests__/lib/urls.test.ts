import { getFormUrl, getLinkedInUrl, getXUrl } from '../../lib/urls';

describe('URL Utils', () => {
  beforeEach(() => {
    // Reset environment variables
    process.env.NEXT_PUBLIC_TYPEFORM_URL =
      'aHR0cHM6Ly9mb3JtLnR5cGVmb3JtLmNvbS90by90ZXN0';
    process.env.NEXT_PUBLIC_LINKEDIN_URL =
      'aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvdGVzdA==';
    process.env.NEXT_PUBLIC_X_URL = 'aHR0cHM6Ly94LmNvbS90ZXN0';
  });

  describe('getFormUrl', () => {
    it('should decode base64 encoded Typeform URL correctly', () => {
      const result = getFormUrl();
      expect(result).toBe('https://form.typeform.com/to/test');
    });

    it('should return # when environment variable is not set', () => {
      delete process.env.NEXT_PUBLIC_TYPEFORM_URL;
      const result = getFormUrl();
      expect(result).toBe('#');
    });

    it('should return # when base64 decoding fails', () => {
      process.env.NEXT_PUBLIC_TYPEFORM_URL = 'invalid-base64';
      const result = getFormUrl();
      expect(result).toBe('#');
    });
  });

  describe('getLinkedInUrl', () => {
    it('should decode base64 encoded LinkedIn URL correctly', () => {
      const result = getLinkedInUrl();
      expect(result).toBe('https://www.linkedin.com/company/test');
    });

    it('should return # when environment variable is not set', () => {
      delete process.env.NEXT_PUBLIC_LINKEDIN_URL;
      const result = getLinkedInUrl();
      expect(result).toBe('#');
    });
  });

  describe('getXUrl', () => {
    it('should decode base64 encoded X URL correctly', () => {
      const result = getXUrl();
      expect(result).toBe('https://x.com/test');
    });

    it('should return # when environment variable is not set', () => {
      delete process.env.NEXT_PUBLIC_X_URL;
      const result = getXUrl();
      expect(result).toBe('#');
    });
  });
});
