import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Logo />
        <Button variant="accent" size="sm">
          Request a Consultation
        </Button>
      </div>
    </header>
  );
};

export default Header;
