
import React from 'react';
import { ArrowRight, MonitorOff, Home, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-primary text-white pt-16 pb-24 md:pt-24 md:pb-32 px-4 overflow-hidden">
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80" 
          alt="Niño expresando emociones" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-accent text-black font-extrabold px-6 py-2 rounded-full text-[10px] md:text-xs mb-8 uppercase tracking-widest shadow-xl border border-yellow-400/50">
          <Sparkles className="w-3 h-3 md:w-4 md:h-4 fill-black" />
          MÉTODO DE 7 DÍAS • 100% IMPRIMIBLE
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
          Ayudá a tu hijo a expresar <br />
          <span className="text-accent italic">lo que siente</span> <br />
          en solo 7 días
        </h1>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-10">
          <div className="flex items-center gap-2 text-white/90 text-sm font-bold uppercase tracking-wide">
            <MonitorOff className="w-5 h-5 text-accent" />
            Sin pantallas
          </div>
          <div className="flex items-center gap-2 text-white/90 text-sm font-bold uppercase tracking-wide">
            <Sparkles className="w-5 h-5 text-accent" />
            Sin presión
          </div>
          <div className="flex items-center gap-2 text-white/90 text-sm font-bold uppercase tracking-wide">
            <Home className="w-5 h-5 text-accent" />
            Desde casa
          </div>
        </div>
        
        <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed font-medium">
          Un juego imprimible guiado para niños de <span className="text-white font-extrabold">3 a 6 años</span> que transforma frustración, enojo y ansiedad en palabras claras… incluso si no sabés por dónde empezar.
        </p>

        {/* Imagen solicitada por el usuario */}
        <div className="mb-12 relative max-w-lg mx-auto transform hover:scale-105 transition-transform duration-500">
          <div className="absolute inset-0 bg-accent/20 blur-[80px] rounded-full"></div>
          <img 
            src="https://i.imgur.com/8PSWnmp.png" 
            alt="Mockup EmotiPack" 
            className="relative z-10 w-full h-auto drop-shadow-[0_25px_45px_rgba(0,0,0,0.4)]"
          />
        </div>
        
        <button className="bg-accent hover:scale-105 active:scale-95 transition-all text-black font-black px-10 py-6 rounded-full flex items-center gap-3 mx-auto text-sm md:text-lg uppercase shadow-2xl border-b-[6px] border-yellow-600">
          👉 QUIERO AYUDAR A MI HIJO A EXPRESAR SUS EMOCIONES
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
