import React from 'react';
import { Container } from './ui/Container';

export const Projects: React.FC = () => {
  const projects = [
    {
      image: "https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg",
      title: "Jardin Moderne",
      description: "Aménagement contemporain avec terrasse en bois"
    },
    {
      image: "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg",
      title: "Espace Zen",
      description: "Création d'un jardin japonais avec bassin"
    },
    {
      image: "https://images.pexels.com/photos/2416472/pexels-photo-2416472.jpeg",
      title: "Terrasse Méditerranéenne",
      description: "Aménagement d'une terrasse avec plantes méditerranéennes"
    },
    {
      image: "https://images.pexels.com/photos/2079248/pexels-photo-2079248.jpeg",
      title: "Jardin d'Enfants",
      description: "Création d'un espace de jeux et de détente"
    },
    {
      image: "https://images.pexels.com/photos/2079250/pexels-photo-2079250.jpeg",
      title: "Jardin Vertical",
      description: "Aménagement d'un mur végétal pour petits espaces"
    },
    {
      image: "https://images.pexels.com/photos/2079251/pexels-photo-2079251.jpeg",
      title: "Jardin de Fleurs",
      description: "Création d'un jardin fleuri avec des plantes locales"
    },
  ];

  return (
    <section id="projects" className="py-16 bg-white/10 backdrop-blur-sm">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Nos Réalisations
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-white/80">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};