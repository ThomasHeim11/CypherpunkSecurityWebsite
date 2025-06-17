import { getFormUrl, getLinkedInUrl, getXUrl } from '../../lib/urls';

describe('URL Utils', () => {
  describe('getFormUrl', () => {
    it('should return the correct Typeform URL', () => {
      const result = getFormUrl();
      expect(result).toBe('https://form.typeform.com/to/BTrikxm5');
    });

    it('should return a valid URL', () => {
      const result = getFormUrl();
      expect(result).toMatch(/^https:\/\//);
    });
  });

  describe('getLinkedInUrl', () => {
    it('should return the correct LinkedIn URL', () => {
      const result = getLinkedInUrl();
      expect(result).toBe(
        'https://www.linkedin.com/company/cypherpunksecurity'
      );
    });

    it('should return a valid LinkedIn URL', () => {
      const result = getLinkedInUrl();
      expect(result).toMatch(/^https:\/\/www\.linkedin\.com\//);
    });
  });

  describe('getXUrl', () => {
    it('should return the correct X (Twitter) URL', () => {
      const result = getXUrl();
      expect(result).toBe('https://x.com/Cypherpunk_Sec');
    });

    it('should return a valid X URL', () => {
      const result = getXUrl();
      expect(result).toMatch(/^https:\/\/x\.com\//);
    });
  });
});
