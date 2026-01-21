
import React from 'react';
import { Mail, Printer } from 'lucide-react';

const DeliveryInfo: React.FC = () => {
  return (
    <section className="py-24 bg-primary px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Título Principal estilo Badge */}
        <div className="flex justify-center mb-20">
          <div className="bg-[#ffde00] text-primary px-8 py-4 rounded-[25px] shadow-lg">
            <h2 className="text-xl md:text-3xl font-black text-center uppercase leading-tight tracking-tight">
              ¿CÓMO RECIBIRÉ EMOTIPACK IMPRIMIBLE?
            </h2>
          </div>
        </div>

        <div className="space-y-24">
          {/* Fila 1: Email */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="flex-1 order-2 md:order-1 text-center md:text-left">
              <div className="bg-[#ffde00] text-primary inline-block px-6 py-3 rounded-tr-[25px] rounded-bl-[25px] rounded-tl-[10px] rounded-br-[10px] mb-6 shadow-md">
                <h3 className="font-black text-sm md:text-lg leading-tight uppercase">
                  USTED RECIBE EL ACCESO AL MATERIAL EN SU CORREO ELECTRÓNICO.
                </h3>
              </div>
              <p className="text-white text-lg md:text-2xl leading-relaxed font-medium">
                Usted recibe <span className="underline decoration-white decoration-2 underline-offset-4">acceso a un área de miembros</span>, donde encontrará todos los PDFs en alta resolución de manera organizada y práctica para impresión.
              </p>
            </div>
            
            <div className="shrink-0 order-1 md:order-2">
              <div className="w-32 h-32 md:w-48 md:h-48 bg-[#ffde00] rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(255,222,0,0.2)] border-4 border-white/20">
                <Mail className="w-16 h-16 md:w-24 md:h-24 text-primary" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* Fila 2: Impresora */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="shrink-0">
              <div className="w-32 h-32 md:w-48 md:h-48 bg-[#ffde00] rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(255,222,0,0.2)] border-4 border-white/20">
                <Printer className="w-16 h-16 md:w-24 md:h-24 text-primary" strokeWidth={1.5} />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="bg-[#ffde00] text-primary inline-block px-6 py-3 rounded-tr-[25px] rounded-bl-[25px] rounded-tl-[10px] rounded-br-[10px] mb-6 shadow-md">
                <h3 className="font-black text-sm md:text-lg leading-tight uppercase">
                  USTED PUEDE IMPRIMIRLO CUANTAS VECES QUIERA.
                </h3>
              </div>
              <p className="text-white text-lg md:text-2xl leading-relaxed font-medium">
                Usted elige el material que desea y puede <span className="underline decoration-white decoration-2 underline-offset-4">imprimirlo cuantas veces quiera</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryInfo;
