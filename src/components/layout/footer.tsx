import Logo from '@/components/logo';

const Footer = () => {
  return (
    <footer className="w-full border-t">
      <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-6">
        <Logo />
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} ApexCloud. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
