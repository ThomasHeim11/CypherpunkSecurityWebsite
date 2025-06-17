import {
  PROCESS_STEPS,
  WHY_CHOOSE_US_ITEMS,
  ABOUT_ITEMS,
} from '../../constants/data';

describe('Data Constants', () => {
  describe('PROCESS_STEPS', () => {
    it('exports all process steps', () => {
      expect(PROCESS_STEPS).toBeDefined();
      expect(PROCESS_STEPS).toHaveLength(4);
    });

    it('has all required fields for each step', () => {
      PROCESS_STEPS.forEach(step => {
        expect(step).toHaveProperty('step');
        expect(step).toHaveProperty('title');
        expect(step).toHaveProperty('desc');
        expect(step).toHaveProperty('icon');
        expect(typeof step.step).toBe('string');
        expect(typeof step.title).toBe('string');
        expect(typeof step.desc).toBe('string');
        expect(typeof step.icon).toBe('object');
      });
    });

    it('has sequential step numbers', () => {
      const stepNumbers = PROCESS_STEPS.map(step => step.step);
      expect(stepNumbers).toEqual(['01', '02', '03', '04']);
    });

    it('has meaningful content', () => {
      PROCESS_STEPS.forEach(step => {
        expect(step.title.length).toBeGreaterThan(5);
        expect(step.desc.length).toBeGreaterThan(20);
      });
    });

    it('has correct step titles', () => {
      expect(PROCESS_STEPS[0].title).toBe('Discovery & Scoping');
      expect(PROCESS_STEPS[1].title).toBe('Multi-Vector Analysis');
      expect(PROCESS_STEPS[2].title).toBe('Validation & Testing');
      expect(PROCESS_STEPS[3].title).toBe('Reporting & Remediation');
    });
  });

  describe('WHY_CHOOSE_US_ITEMS', () => {
    it('exports all why choose us items', () => {
      expect(WHY_CHOOSE_US_ITEMS).toBeDefined();
      expect(WHY_CHOOSE_US_ITEMS).toHaveLength(2);
    });

    it('has all required fields for each item', () => {
      WHY_CHOOSE_US_ITEMS.forEach(item => {
        expect(item).toHaveProperty('icon');
        expect(item).toHaveProperty('title');
        expect(item).toHaveProperty('desc');
        expect(typeof item.title).toBe('string');
        expect(typeof item.desc).toBe('string');
        expect(typeof item.icon).toBe('object');
      });
    });

    it('has correct titles', () => {
      expect(WHY_CHOOSE_US_ITEMS[0].title).toBe('Efficient Process');
      expect(WHY_CHOOSE_US_ITEMS[1].title).toBe('Security Expertise');
    });

    it('has meaningful descriptions', () => {
      WHY_CHOOSE_US_ITEMS.forEach(item => {
        expect(item.desc.length).toBeGreaterThan(20);
        expect(item.desc).toContain('security');
      });
    });
  });

  describe('ABOUT_ITEMS', () => {
    it('exports all about items', () => {
      expect(ABOUT_ITEMS).toBeDefined();
      expect(ABOUT_ITEMS).toHaveLength(3);
    });

    it('has all required fields for each item', () => {
      ABOUT_ITEMS.forEach(item => {
        expect(item).toHaveProperty('icon');
        expect(item).toHaveProperty('title');
        expect(item).toHaveProperty('description');
        expect(item).toHaveProperty('bgColor');
        expect(item).toHaveProperty('iconColor');
        expect(typeof item.title).toBe('string');
        expect(typeof item.description).toBe('string');
        expect(typeof item.bgColor).toBe('string');
        expect(typeof item.iconColor).toBe('string');
        expect(typeof item.icon).toBe('object');
      });
    });

    it('has valid CSS classes', () => {
      ABOUT_ITEMS.forEach(item => {
        expect(item.bgColor).toMatch(/^bg-/);
        expect(item.iconColor).toMatch(/^text-/);
      });
    });

    it('has correct titles', () => {
      expect(ABOUT_ITEMS[0].title).toBe('Technical Excellence');
      expect(ABOUT_ITEMS[1].title).toBe('Security First');
      expect(ABOUT_ITEMS[2].title).toBe('Industry Standards');
    });

    it('has meaningful descriptions', () => {
      ABOUT_ITEMS.forEach(item => {
        expect(item.description.length).toBeGreaterThan(20);
        expect(item.description).toContain('security');
      });
    });

    it('has different color themes', () => {
      const bgColors = ABOUT_ITEMS.map(item => item.bgColor);
      const iconColors = ABOUT_ITEMS.map(item => item.iconColor);

      expect(new Set(bgColors).size).toBe(3); // All different
      expect(new Set(iconColors).size).toBe(3); // All different
    });

    it('uses appropriate neon colors', () => {
      expect(ABOUT_ITEMS[0].bgColor).toBe('bg-neon-green/10');
      expect(ABOUT_ITEMS[0].iconColor).toBe('text-neon-green');
      expect(ABOUT_ITEMS[1].bgColor).toBe('bg-neon-blue/10');
      expect(ABOUT_ITEMS[1].iconColor).toBe('text-neon-blue');
      expect(ABOUT_ITEMS[2].bgColor).toBe('bg-neon-purple/10');
      expect(ABOUT_ITEMS[2].iconColor).toBe('text-neon-purple');
    });
  });
});
