import { Mail, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="kontakt" className="py-20 sm:py-28 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Låt oss <span className="text-accent">prata</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Vill du veta mer om hur Corpvantage kan hjälpa ditt bolag? 
            Kontakta oss så berättar vi mer.
          </p>

          <div className="bg-card rounded-2xl p-8 sm:p-12 shadow-elegant border border-border">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center">
                <Mail className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            
            <p className="text-muted-foreground mb-4">Skicka oss ett mail</p>
            
            <a
              href="mailto:info@corpvantage.se"
              className="group inline-flex items-center gap-2 text-2xl sm:text-3xl font-montserrat font-semibold text-foreground hover:text-accent transition-colors"
            >
              info@corpvantage.se
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
