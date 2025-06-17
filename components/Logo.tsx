import LogoGenerator from './LogoGenerator';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = 'h-8 w-8' }: LogoProps) {
  return <LogoGenerator className={className} />;
}
