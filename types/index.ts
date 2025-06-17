import { LucideIcon } from 'lucide-react';

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
  icon: LucideIcon;
}

export interface WhyChooseUsItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface AboutItem {
  icon: LucideIcon;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

// Typeform window declarations
declare global {
  interface Window {
    tf?: {
      createPopup: (formId: string) => {
        open: () => void;
      };
    };
  }
}
