import React from 'react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { Leaf } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Donnez vie à vos extérieurs
            </h1>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Terra Verde est une entreprise spécialisée dans la conception, l'aménagement et l'entretien de jardins, terrasses et espaces verts pour particuliers et entreprises. Elle propose un service sur mesure, écoresponsable et esthétique, avec un accompagnement du plan 3D à la réalisation.
            </p>
            <a href="#projects">
            <Button 
              variant="primary" 
              size="lg"
              className="bg-white/20 text-[#4A5D23] hover:bg-white/10"
            >
              <Leaf className="mr-2" size={20} />
              Nos projets
            </Button>
          </a>
          </div>
          <div className="md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/59321/pexels-photo-59321.jpeg"
                alt="Jardin paysager"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};