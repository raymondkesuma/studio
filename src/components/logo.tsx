import { Cloud } from 'lucide-react';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="ApexCloud Home">
      <Cloud className="h-6 w-6 text-primary" />
      <span className="font-headline text-xl font-bold">ApexCloud</span>
    </Link>
  );
};

export default Logo;
