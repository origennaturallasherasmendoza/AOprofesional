
import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing-section" className="py-20 md:py-32 px-4 bg-white text-center">
      <div className="max-w-5xl mx-auto">
        {/* Encabezado Principal con más fuerza */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-[#1a133d] mb-4 md:mb-6 uppercase tracking-tighter leading-none">
            EMPIEZA <span className="text-[#2563eb]">HOY MISMO</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed px-2">
            Un método probado para trabajar emociones desde casa, sin materiales costosos ni sesiones largas.
          </p>
        </div>

        {/* Card de Precio de Alto Impacto */}
        <div className="relative max-w-4xl mx-auto mb-16">
          {/* Badge de Oferta Dinámico */}
          <div className="absolute -top-5 md:-top-7 left-1/2 -translate-x-1/2 z-30 w-max">
            <div className="bg-[#ffde00] text-[#1a133d] font-black px-8 py-3 md:px-12 md:py-4 rounded-full text-xs md:text-lg uppercase tracking-widest shadow-[0_10px_30px_rgba(255,222,0,0.5)] border-[4px] md:border-[6px] border-white animate-pulse">
              OFERTA DE LANZAMIENTO
            </div>
          </div>

          {/* Caja Azul de Alto Impacto (#2563eb) */}
          <div className="bg-[#2563eb] rounded-[45px] md:rounded-[70px] p-10 md:p-20 shadow-[0_50px_100px_rgba(37,99,235,0.25)] text-white relative overflow-hidden border-t-8 border-white/10">
            
            {/* Decoraciones de fondo modernas */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full -ml-40 -mb-40 blur-3xl"></div>

            <div className="relative z-10 flex flex-col items-center">
              {/* Sección Superior: Precio */}
              <div className="flex flex-col items-center mb-10">
                <div className="flex items-center gap-2 mb-2 text-white/60">
                  <span className="text-sm md:text-xl font-black tracking-widest uppercase">VALOR REAL: <span className="line-through decoration-red-400 decoration-2">USD 21</span></span>
                </div>
                <div className="text-[90px] md:text-[160px] font-black leading-none tracking-tighter drop-shadow-2xl">
                  USD 7
                </div>
              </div>

              {/* LISTA RESUMIDA DE VALOR - NUEVO ELEMENTO DE IMPACTO */}
              <div className="w-full max-w-md bg-white/5 backdrop-blur-md rounded-[35px] p-6 md:p-10 border border-white/10 mb-10 text-left">
                <h4 className="text-center font-black text-[#ffde00] mb-6 uppercase tracking-widest text-sm md:text-base border-b border-white/10 pb-4">
                  ¿QUÉ TE LLEVÁS HOY?
                </h4>
                <ul className="space-y-4">
                  {[
                    "48 Cartas de Emociones PDF",
                    "Tablero + Personajes Guía",
                    "Pizarra de Seguimiento Diario",
                    "Bono #1: Frases para Padres",
                    "Bono #2: Reto Conexión 7 Días"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="bg-[#ffde00] rounded-full p-1 shrink-0">
                        <Check className="w-3 h-3 md:w-4 md:h-4 text-[#1a133d]" strokeWidth={4} />
                      </div>
                      <span className="text-sm md:text-lg font-bold text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* MOCKUP VISUAL */}
              <div className="relative w-full max-w-[320px] md:max-w-[450px] mb-12 transform hover:scale-105 transition-transform duration-500 ease-out">
                <div className="absolute inset-0 bg-white/20 blur-[60px] rounded-full scale-75 opacity-50"></div>
                <img 
                  src="https://i.imgur.com/8PSWnmp.png" 
                  alt="EmotiPack Mockup" 
                  className="relative z-10 w-full h-auto drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
                />
              </div>

              {/* Caja Único Pago Estilizada */}
              <div className="bg-[#1a133d]/40 border-2 border-[#ffde00]/40 rounded-3xl px-10 py-5 mb-12 backdrop-blur-sm shadow-inner group">
                <div className="text-[#ffde00] font-black text-2xl md:text-3xl uppercase tracking-tighter mb-0.5 group-hover:scale-110 transition-transform">
                  ÚNICO PAGO
                </div>
                <div className="text-white/80 font-bold text-[10px] md:text-sm uppercase tracking-[0.3em] opacity-80">
                  SIN SUSCRIPCIONES OCULTAS
                </div>
              </div>

              {/* Botón de Descarga Máximo Impacto */}
              <button className="w-full max-w-lg bg-[#ffde00] hover:bg-[#ffe533] hover:scale-[1.03] active:scale-95 transition-all text-[#1a133d] font-black px-6 py-6 md:py-9 rounded-[25px] md:rounded-[35px] flex items-center justify-center gap-4 text-2xl md:text-4xl shadow-[0_20px_40px_rgba(255,222,0,0.4)] border-b-[8px] md:border-b-[10px] border-[#e6c800] uppercase mb-12 group">
                DESCARGAR AHORA
                <ArrowRight className="w-8 h-8 md:w-10 md:h-10 group-hover:translate-x-2 transition-transform" strokeWidth={4} />
              </button>

              {/* Badges de Confianza Rápidos */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center opacity-70">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#ffde00]" />
                  <span className="text-[11px] md:text-sm font-black uppercase tracking-widest">PAGO SEGURO</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#ffde00]" />
                  <span className="text-[11px] md:text-sm font-black uppercase tracking-widest">ENVÍO INSTANTÁNEO</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#ffde00]" />
                  <span className="text-[11px] md:text-sm font-black uppercase tracking-widest">SOPORTE 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CAJA DE GARANTÍA EXTERNA PREMIUM */}
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-gray-50 rounded-[40px] md:rounded-[50px] p-10 md:p-16 border-4 border-dashed border-gray-200 relative group hover:border-[#2563eb]/30 transition-colors">
            <div className="flex flex-col items-center">
              <div className="bg-[#2563eb] p-5 rounded-full mb-8 shadow-2xl transform group-hover:rotate-12 transition-transform">
                <ShieldCheck className="w-12 h-12 md:w-16 md:h-16 text-white" />
              </div>
              <h3 className="text-2xl md:text-4xl font-black text-[#1a133d] mb-4 uppercase tracking-tighter">
                GARANTÍA DE <span className="text-[#2563eb]">7 DÍAS</span>
              </h3>
              <p className="text-gray-500 text-base md:text-xl leading-relaxed max-w-lg italic font-medium">
                "Si EmotiPack no cumple tus expectativas, solicitá tu reembolso completo. Sin preguntas, sin vueltas. <span className="text-[#1a133d] font-bold">Tu tranquilidad es lo primero.</span>"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
