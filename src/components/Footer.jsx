function Footer() {
  return (
    <div className="relative z-10">
      <footer className="border-t">
        <div className="container mx-auto px-4 h-12 md:h-12 flex items-center justify-between text-sm text-muted-foreground mb-16 md:mb-0">
          <span>© 2025 Soyaa.</span>
          <div className="hidden md:block shrink-0 bg-border w-[1px] h-4"></div>
          <span>React &amp; Vite &amp; Tailwind</span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
