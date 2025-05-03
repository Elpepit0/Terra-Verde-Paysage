import React from 'react';
import { Container } from './ui/Container';
import { Leaf } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-[#4A5D23]">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-white mb-4 md:mb-0">
            <Leaf size={24} />
            <span className="text-lg font-bold">Terra Verde Paysages</span>
          </div>
          <div className="text-white/80 text-sm">
            © {new Date().getFullYear()} Terra Verde Paysages. Tous droits réservés.
          </div>
        </div>
      </Container>
    </footer>
  );
};