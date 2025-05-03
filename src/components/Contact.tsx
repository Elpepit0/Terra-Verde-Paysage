import React, { useState } from 'react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission
  };

  return (
    <section id="contact" className="py-16">
      <Container>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Contactez-nous</h2>
              <p className="text-white/80 mb-8">
                Vous avez un projet d'aménagement ? Contactez-nous pour en discuter.
              </p>
              <div className="space-y-6">
                <div className="flex items-center text-white">
                  <Mail className="w-6 h-6 mr-4" />
                  <span>contact@terraverde.fr</span>
                </div>
                <div className="flex items-center text-white">
                  <Phone className="w-6 h-6 mr-4" />
                  <span>01 23 45 67 89</span>
                </div>
                <div className="flex items-center text-white">
                  <MapPin className="w-6 h-6 mr-4" />
                  <span>123 rue des Jardins, 75000 Paris</span>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nom" className="block text-white mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="nom"
                  className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:border-white"
                  placeholder="Votre nom"
                  value={formData.nom}
                  onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:border-white"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:border-white"
                  placeholder="Votre message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-white/20 text-[#4A5D23] hover:bg-white/10"
              >
                Envoyer
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};