
import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowRight, X } from 'lucide-react';

const FloatingElements: React.FC = () => {
  const [showCTA, setShowCTA] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [isWppVisible, setIsWppVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const productSection = document.getElementById('product-include');
      const pricingSection = document.getElementById('pricing-section');
      
      if (productSection) {
        const productRect = productSection.getBoundingClientRect();
        // Aparece cuando el usuario ya ha empezado a recorrer la sección de contenido
        setShowCTA(productRect.top < 0);
      }

      if (pricingSection) {
        const pricingRect = pricingSection.getBoundingClientRect();
        // Aparece el WhatsApp justo después de pasar la sección de precio (en las FAQs)
        setShowWhatsApp(pricingRect.bottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPricing = () => {
    document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Botón Flotante de Acción (CTA) - Esquina Inferior Derecha */}
      <div 
        className={`fixed bottom-6 right-6 z-[60] transition-all duration-700 transform ${
          showCTA ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-24 opacity-0 scale-90 pointer-events-none'
        }`}
      >
        <button 
          onClick={scrollToPricing}
          className="group bg-[#ffde00] text-black font-black px-8 py-5 rounded-full flex items-center gap-3 shadow-[0_20px_40px_rgba(255,222,0,0.4)] border-b-[6px] border-yellow-600 hover:scale-105 active:scale-95 transition-all text-xs md:text-sm uppercase whitespace-nowrap"
        >
          QUIERO AYUDAR A MI HIJO AHORA
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Botón Flotante de WhatsApp - Esquina Inferior Izquierda con Mensaje */}
      <div 
        className={`fixed bottom-6 left-6 z-[60] transition-all duration-700 transform ${
          showWhatsApp && isWppVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-24 opacity-0 scale-90 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-start gap-3">
          {/* Burbuja de Texto Informativa */}
          <div className="relative bg-white px-5 py-3 rounded-2xl rounded-bl-none shadow-2xl border border-gray-100 animate-bounce-subtle">
            <button 
              onClick={() => setIsWppVisible(false)}
              className="absolute -top-2 -right-2 bg-gray-100 text-gray-500 rounded-full p-1 hover:bg-gray-200 transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
            <p className="text-[11px] md:text-xs font-bold text-primary leading-tight uppercase tracking-tight">
              CUALQUIER DUDA <br /> 
              <span className="text-blue-600 italic">ESTAMOS PARA AYUDARTE</span>
            </p>
          </div>
          
          {/* Botón de WhatsApp */}
          <a 
            href="https://wa.me/tu-numero-aqui" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white p-5 rounded-full shadow-[0_20px_40px_rgba(37,211,102,0.3)] hover:scale-110 active:scale-95 transition-all relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <MessageCircle className="w-7 h-7 fill-white relative z-10" />
          </a>
        </div>
      </div>

      <style>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s infinite ease-in-out;
        }
      `}</style>
    </>
  );
};

export default FloatingElements;
