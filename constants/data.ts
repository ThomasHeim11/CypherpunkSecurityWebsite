import {
  Eye,
  Shield,
  Zap,
  FileText,
  Users,
  Clock,
  TrendingUp,
  Code2,
} from 'lucide-react';
import { ProcessStep, WhyChooseUsItem, AboutItem } from '../types';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery & Scoping',
    desc: 'Deep dive into protocol architecture, threat modeling, and precise audit scope definition. Understanding the attack surface before the hunt begins.',
    icon: Eye,
  },
  {
    step: '02',
    title: 'Multi-Vector Analysis',
    desc: 'Multi-vector analysis combining automated tooling with manual code review. Hunting vulnerabilities, logic flaws, and attack vectors with adversarial precision.',
    icon: Shield,
  },
  {
    step: '03',
    title: 'Validation & Testing',
    desc: 'Proof-of-concept development and rigorous testing to validate security issues. Demonstrating exploitability and quantifying real-world impact.',
    icon: Zap,
  },
  {
    step: '04',
    title: 'Reporting & Remediation',
    desc: 'Detailed findings documentation with prioritized remediation strategies. Clear paths to fortify your protocol against future attacks.',
    icon: FileText,
  },
];

export const WHY_CHOOSE_US_ITEMS: WhyChooseUsItem[] = [
  {
    icon: Clock,
    title: 'Efficient Process',
    desc: 'Efficient audit methodology delivering thorough security analysis without compromise. Fast execution, uncompromising depth.',
  },
  {
    icon: TrendingUp,
    title: 'Security Expertise',
    desc: 'Deep smart contract security expertise with battle-tested methodologies. Adversarial mindset meets systematic precision.',
  },
];

export const ABOUT_ITEMS: AboutItem[] = [
  {
    icon: Code2,
    title: 'Technical Excellence',
    description:
      'Our security engineers specialize in blockchain security, delivering deep protocol assessments with adversarial precision and smart contract expertise.',
    bgColor: 'bg-neon-green/10',
    iconColor: 'text-neon-green',
  },
  {
    icon: Shield,
    title: 'Security First',
    description:
      'We apply rigorous security principles and adversarial methodologies to every assessment, fortifying protocols without stifling innovation.',
    bgColor: 'bg-neon-blue/10',
    iconColor: 'text-neon-blue',
  },
  {
    icon: Users,
    title: 'Industry Standards',
    description:
      'We maintain strict adherence to security best practices and contribute to establishing industry standards for blockchain security assessments.',
    bgColor: 'bg-neon-purple/10',
    iconColor: 'text-neon-purple',
  },
];
