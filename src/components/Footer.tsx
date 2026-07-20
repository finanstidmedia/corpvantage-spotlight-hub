import logo from "@/assets/corpvantage-logo.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-hero py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <img 
            src={logo} 
            alt="Corpvantage AB" 
            className="h-10 w-auto brightness-0 invert mb-6"
          />
          
          <p className="text-primary-foreground/60 text-sm text-center">
            Din strategiska partner inom IR och marknadskommunikation
          </p>
          
          <div className="w-16 h-px bg-primary-foreground/20 my-6" />
          
          <p className="text-primary-foreground/50 text-sm">
            © {currentYear} Corpvantage AB. Alla rättigheter förbehållna.
          </p>

          <p className="text-primary-foreground/50 text-sm mt-2">
            Webbplatsen drivs och underhålls av{" "}
            <a
              href="https://sitepulse.se"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary-foreground transition-colors"
            >
              SitePulse
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
