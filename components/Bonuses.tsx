
import React from 'react';
import { Sparkles, MessageCircle, Calendar, Gift } from 'lucide-react';

const Bonuses: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent text-black font-black px-6 py-2 rounded-full text-xs mb-4 shadow-sm">
            <Gift className="w-4 h-4 fill-black" />
            ¡REGALOS ADICIONALES PARA VOS!
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-4">
            Si te sumás hoy, recibís <br />
            <span className="text-blue-600 italic">estos 2 bonos exclusivos</span>
          </h2>
          <p className="text-gray-500 font-medium">Diseñados para complementar tu experiencia y darte resultados más rápidos.</p>
        </div>

        <div className="space-y-12 max-w-5xl mx-auto">
          {/* Bono #1 */}
          <div className="bg-white rounded-[50px] shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row items-stretch group hover:shadow-2xl transition-all duration-500">
            <div className="p-8 md:p-12 md:w-3/5 flex flex-col justify-center order-2 md:order-1">
              <div className="bg-blue-600/10 text-blue-600 w-fit px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-blue-600/20">
                BONO EXCLUSIVO #1
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-primary mb-4 leading-tight">
                Tarjetas de Frases Guía para Padres
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                ¿No sabés qué decir cuando hay un berrinche o tristeza profunda? Estas tarjetas te dan <span className="font-bold text-primary">el guion exacto</span> para validar sus emociones sin perder la calma. Sabrás qué decir, qué no decir y cómo conectar en segundos.
              </p>
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 text-white p-2 rounded-lg">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="text-blue-600 font-black text-sm uppercase tracking-widest">
                  VALOR: USD 15 — <span className="underline decoration-accent decoration-4">¡GRATIS HOY!</span>
                </span>
              </div>
            </div>
            
            {/* Contenedor de imagen optimizado para móvil: menor padding y altura fija pequeña */}
            <div className="md:w-2/5 bg-blue-600/5 flex items-center justify-center p-6 md:p-8 relative overflow-hidden group-hover:bg-blue-600/10 transition-colors order-1 md:order-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent"></div>
              <img 
                src="https://i.imgur.com/7nMtEbX.png" 
                alt="Bono Tarjetas de Frases" 
                className="relative z-10 w-24 md:w-full md:max-w-[280px] h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-700"
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 bg-accent w-24 h-24 rounded-full blur-3xl opacity-30"></div>
            </div>
          </div>

          {/* Bono #2 */}
          <div className="bg-white rounded-[50px] shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row-reverse items-stretch group hover:shadow-2xl transition-all duration-500">
            <div className="p-8 md:p-12 md:w-3/5 flex flex-col justify-center order-2 md:order-1">
              <div className="bg-green-600/10 text-green-600 w-fit px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-green-600/20">
                BONO EXCLUSIVO #2
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-primary mb-4 leading-tight">
                Mini Reto de 7 Días: Conexión Diaria
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                Tu hoja de ruta para implementar EmotiPack sin esfuerzo. Una <span className="font-bold text-primary">guía paso a paso</span> de una semana para transformar la rutina familiar en un espacio de confianza y expresión saludable. Ideal para familias con poco tiempo.
              </p>
              <div className="flex items-center gap-3">
                <div className="bg-green-600 text-white p-2 rounded-lg">
                  <Calendar className="w-5 h-5" />
                </div>
                <span className="text-green-600 font-black text-sm uppercase tracking-widest">
                  VALOR: USD 12 — <span className="underline decoration-accent decoration-4">¡GRATIS HOY!</span>
                </span>
              </div>
            </div>
            
            {/* Contenedor de imagen optimizado para móvil: menor padding y altura fija pequeña */}
            <div className="md:w-2/5 bg-green-600/5 flex items-center justify-center p-6 md:p-8 relative overflow-hidden group-hover:bg-green-600/10 transition-colors order-1 md:order-2 md:order-reverse">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-transparent"></div>
              <img 
                src="https://i.imgur.com/oX7KMIP.png" 
                alt="Bono Reto 7 Días" 
                className="relative z-10 w-24 md:w-full md:max-w-[280px] h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 bg-accent w-24 h-24 rounded-full blur-3xl opacity-30"></div>
            </div>
          </div>
        </div>

        <div className="mt-20 max-w-3xl mx-auto bg-primary text-white p-8 rounded-[40px] text-center shadow-2xl relative overflow-hidden">
          <Sparkles className="absolute top-4 right-4 w-12 h-12 text-accent/20" />
          <p className="text-lg md:text-xl font-bold leading-relaxed relative z-10">
            "No solo te llevás el juego, te llevás las herramientas para <span className="text-accent">convertirte en el guía emocional</span> que tu hijo necesita hoy."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
