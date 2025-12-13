import logo from "@/assets/corpvantage-logo.webp";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Corpvantage AB" 
              className="h-10 sm:h-12 w-auto"
            />
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("tjanster")}
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Tjänster
            </button>
            <button
              onClick={() => scrollToSection("kontakt")}
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Kontakt
            </button>
          </nav>

          <button
            onClick={() => scrollToSection("kontakt")}
            className="gradient-hero text-primary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Kontakta oss
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
