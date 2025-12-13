import { FileText, Share2, Presentation } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Marknadskommunikation",
    description:
      "Vi skapar professionell copy för marknadskommunikation för både noterade och onoterade bolag. Våra tjänster inkluderar pressmeddelanden och native artiklar som effektivt når ut till era målgrupper.",
  },
  {
    icon: Share2,
    title: "Distribution",
    description:
      "Med vårt breda nätverk av mediakanaler kan vi distribuera såväl PR som marknadsföring på ett effektivt sätt. Vi säkerställer att ert budskap når rätt målgrupp vid rätt tidpunkt.",
  },
  {
    icon: Presentation,
    title: "Underlag & Presentationer",
    description:
      "Med lång erfarenhet skapar vi professionell dokumentation som investeringsmemorandum, prospekt, finansiella rapporter och pitch decks. Design och utformning ingår alltid.",
  },
];

const Services = () => {
  return (
    <section id="tjanster" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Våra <span className="text-accent">tjänster</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vi erbjuder ett komplett utbud av IR-tjänster för att stärka ert bolags 
            kommunikation och synlighet på marknaden.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-300 border border-border hover:border-accent/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-montserrat text-xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
