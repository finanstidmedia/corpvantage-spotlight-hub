import { Mail, ArrowRight } from "lucide-react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="kontakt" className="py-20 sm:py-28 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Låt oss <span className="text-accent">prata</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Vill du veta mer om hur Corpvantage kan hjälpa ditt bolag? 
              Kontakta oss så berättar vi mer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-elegant border border-border">
              <h3 className="font-montserrat text-xl font-semibold text-foreground mb-6">
                Skicka ett meddelande
              </h3>
              <ContactForm />
            </div>

            {/* Direct Contact */}
            <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-elegant border border-border flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center mb-6">
                <Mail className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <p className="text-muted-foreground mb-4">Eller maila oss direkt</p>
              
              <a
                href="mailto:info@corpvantage.se"
                className="group inline-flex items-center gap-2 text-xl sm:text-2xl font-montserrat font-semibold text-foreground hover:text-accent transition-colors"
              >
                info@corpvantage.se
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
