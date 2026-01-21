
import React from 'react';
import { XCircle, Lightbulb, Sparkles } from 'lucide-react';

const PainPoints: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div className="rounded-[40px] overflow-hidden shadow-2xl order-2 md:order-1">
            <img 
              src="https://i.imgur.com/txrBlk5.jpeg" 
              alt="Padres e hijo usando EmotiPack" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div className="space-y-8 order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
              Si sos mamá o papá, seguramente te pasó...
            </h2>
            <p className="text-lg text-gray-600 italic border-l-4 border-accent pl-4">
              "Tu hijo se enoja, se frustra o se pone triste… y cuando le preguntás qué le pasa, no sabe explicarlo."
            </p>
            
            <div className="space-y-4">
              <p className="font-bold text-primary">Vos querés ayudarlo, pero:</p>
              <ul className="space-y-4">
                {[
                  "No tenés tiempo para métodos largos",
                  "No querés depender de pantallas",
                  "Dudás si lo estás haciendo “bien”"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contenedor de impacto con diseño de tarjeta de solución mejorado */}
        <div className="bg-[#f8fafc] p-6 md:p-16 rounded-[50px] md:rounded-[60px] border border-blue-50 relative">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#2d2159] text-white px-8 py-2.5 rounded-full font-black text-[10px] md:text-xs shadow-xl uppercase tracking-widest whitespace-nowrap border-2 border-white/10">
            LA VERDAD ES QUE...
          </div>
          
          <div className="max-w-3xl mx-auto text-center pt-6">
            <h3 className="text-2xl md:text-4xl font-black text-primary mb-6 leading-tight">
              👉 No es que tu hijo no quiera expresarse.
            </h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12">
              Es que nadie le enseñó cómo hacerlo de una <span className="text-blue-600 font-bold">forma simple, segura</span> y adaptada a su nivel de desarrollo.
            </p>
            
            {/* TARJETA DE SOLUCIÓN ESTILO REFERENCIA */}
            <div className="relative max-w-lg mx-auto">
              <div className="bg-white p-10 md:p-12 rounded-[50px] shadow-[0_30px_60px_rgba(45,33,89,0.08)] border border-gray-100 flex flex-col items-center">
                
                {/* Icono de bombilla en caja azul redondeada */}
                <div className="bg-gradient-to-br from-[#2962ff] to-[#1e40af] p-5 rounded-[24px] shadow-[0_15px_30px_rgba(41,98,255,0.3)] mb-8 relative">
                   <Lightbulb className="w-10 h-10 text-accent" />
                   <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-ping"></div>
                </div>

                <div className="relative mb-6">
                  <h4 className="text-2xl md:text-3xl font-black text-[#2962ff]">
                    La Solución: EmotiPack
                  </h4>
                  <Sparkles className="w-6 h-6 text-accent absolute -top-4 -right-8 fill-accent/20" />
                </div>

                <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10 font-medium">
                  Convierte momentos difíciles en oportunidades de <span className="relative inline-block">
                    <span className="relative z-10 font-bold text-[#2d2159]">conexión emocional,</span>
                    <span className="absolute bottom-1 left-0 w-full h-2 bg-[#2d2159]/10 rounded-full"></span>
                  </span> usando materiales visuales, dinámicos y fáciles de aplicar en la rutina diaria.
                </p>

                {/* Badges Estilizados */}
                <div className="flex flex-col gap-3 w-full max-w-[240px]">
                  <div className="bg-[#eff6ff] text-[#2962ff] py-2.5 px-6 rounded-full text-xs font-black uppercase tracking-wider border border-blue-100 shadow-sm">
                    100% VISUAL
                  </div>
                  <div className="bg-[#f0fdf4] text-[#16a34a] py-2.5 px-6 rounded-full text-xs font-black uppercase tracking-wider border border-green-100 shadow-sm">
                    FÁCIL APLICACIÓN
                  </div>
                  <div className="bg-[#fff7ed] text-[#9a3412] py-2.5 px-6 rounded-full text-xs font-black uppercase tracking-wider border border-orange-100 shadow-sm">
                    CERO PANTALLAS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
