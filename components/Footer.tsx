
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a133d] text-gray-400 py-12 px-4 border-t border-white/5">
      <div className="max-w-6xl mx-auto text-center">
        <div className="text-white font-bold text-xl mb-4">
          EmotiPack <span className="text-gray-500 font-normal">© 2026</span>
        </div>
        
        <p className="text-sm mb-8 max-w-lg mx-auto leading-relaxed">
          Ayudando a familias a construir conexiones emocionales más fuertes
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 text-xs font-medium uppercase tracking-widest mb-8">
          <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
          <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
          <a href="#" className="hover:text-white transition-colors">Contacto</a>
        </div>
        
        <div className="text-[10px] text-gray-600 max-w-2xl mx-auto border-t border-white/5 pt-8">
          Este sitio no forma parte del sitio web de Facebook o Facebook Inc. Además, este sitio NO está respaldado por Facebook de ninguna manera. FACEBOOK es una marca registrada de FACEBOOK, Inc.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
