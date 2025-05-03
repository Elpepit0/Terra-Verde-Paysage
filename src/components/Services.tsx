import React from 'react';
import { Container } from './ui/Container';
import { Flower2, TreePine, Shovel, Ruler } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white hover:transform hover:scale-105 transition-all duration-3000">
      <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-white/80">{description}</p>
    </div>
  );
};

export const Services: React.FC = () => {
  const services = [
    {
      icon: <Ruler size={24} />,
      title: 'Conception',
      description: 'Plans 3D détaillés et conception personnalisée adaptée à vos besoins et votre espace.',
    },
    {
      icon: <Shovel size={24} />,
      title: 'Aménagement',
      description: 'Réalisation professionnelle de vos projets paysagers avec des matériaux de qualité.',
    },
    {
      icon: <TreePine size={24} />,
      title: 'Entretien',
      description: 'Services réguliers d\'entretien pour maintenir la beauté de votre jardin toute l\'année.',
    },
    {
      icon: <Flower2 size={24} />,
      title: 'Végétalisation',
      description: 'Sélection et plantation d\'espèces adaptées à votre environnement et vos préférences.',
    },
  ];

  return (
    <section id="services" className="py-16">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Nos Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </Container>
    </section>
  );
};