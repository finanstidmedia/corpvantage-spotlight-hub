import { ArrowRight } from "lucide-react";
import logo from "@/assets/corpvantage-logo.webp";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-up mb-8">
            <img 
              src={logo} 
              alt="Corpvantage AB" 
              className="h-16 sm:h-20 md:h-24 w-auto mx-auto mb-8 brightness-0 invert"
            />
          </div>
          
          <h1 
            className="font-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Din strategiska partner inom{" "}
            <span className="text-accent">IR & Marknadskommunikation</span>
          </h1>
          
          <p 
            className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Vi hjälper noterade och onoterade bolag att nå sina målgrupper med 
            professionell kommunikation och bred distribution.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <button
              onClick={() => scrollToSection("tjanster")}
              className="group bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent/90 transition-all flex items-center gap-2"
            >
              Våra tjänster
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection("kontakt")}
              className="bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-foreground/20 transition-all"
            >
              Kontakta oss
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
