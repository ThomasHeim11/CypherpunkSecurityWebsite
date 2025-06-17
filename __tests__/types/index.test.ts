import type { ProcessStep, WhyChooseUsItem, AboutItem } from '../../types';

describe('Type Definitions', () => {
  it('should allow valid ProcessStep objects', () => {
    const validProcessStep: ProcessStep = {
      icon: 'test-icon' as any,
      title: 'Test Step',
      step: '1',
      desc: 'Test description',
    };

    expect(validProcessStep.title).toBe('Test Step');
  });

  it('should allow valid WhyChooseUsItem objects', () => {
    const validItem: WhyChooseUsItem = {
      icon: 'test-icon' as any,
      title: 'Test Item',
      desc: 'Test description',
    };

    expect(validItem.title).toBe('Test Item');
  });

  it('should allow valid AboutItem objects', () => {
    const validAboutItem: AboutItem = {
      icon: 'test-icon' as any,
      title: 'Test About',
      description: 'Test description',
      bgColor: 'blue',
      iconColor: 'white',
    };

    expect(validAboutItem.title).toBe('Test About');
    expect(validAboutItem.description).toBe('Test description');
  });
});
