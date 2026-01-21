
import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gray-50 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex justify-center">
          <div className="bg-red-50 p-4 rounded-full">
            <Heart className="w-12 h-12 text-red-500 fill-red-500 animate-pulse" />
          </div>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-black text-primary mb-8 leading-tight">
          No se trata solo de emociones.
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
          Se trata de entender a tu hijo, acompañarlo mejor y fortalecer el vínculo desde hoy. 
          <span className="block mt-4 font-bold text-primary italic underline decoration-accent">Dale una forma clara y segura de decir lo que siente.</span>
        </p>

        <button className="bg-primary hover:scale-105 transition-transform text-white font-black px-10 py-6 rounded-full flex items-center justify-center gap-4 mx-auto text-lg md:text-xl uppercase shadow-2xl mb-8">
          👉 EMPEZÁ HOY CON EMOTIPACK
          <ArrowRight className="w-6 h-6 text-accent" />
        </button>

        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
          Pago único de USD 7 • Descarga inmediata
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
