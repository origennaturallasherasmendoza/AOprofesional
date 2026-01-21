
import React from 'react';
import { XCircle, AlertTriangle } from 'lucide-react';

const NotForYou: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-red-50">
      <div className="max-w-4xl mx-auto border-2 border-red-100 rounded-[40px] bg-white p-8 md:p-16 shadow-sm">
        <div className="flex items-center gap-4 mb-8 justify-center">
          <AlertTriangle className="w-8 h-8 text-red-500" />
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 text-center">
            ¿Para quién <span className="text-red-500">NO</span> es este recurso?
          </h2>
        </div>
        
        <p className="text-center text-gray-500 mb-10">EmotiPack no es para vos si:</p>

        <ul className="space-y-6 max-w-2xl mx-auto">
          {[
            "Buscás reemplazar un proceso terapéutico profesional",
            "Esperás resultados mágicos sin acompañar a tu hijo",
            "No estás dispuesto/a a dedicar 10–15 minutos al día"
          ].map((text, i) => (
            <li key={i} className="flex items-start gap-4 text-gray-700 bg-red-50/30 p-4 rounded-2xl">
              <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
              <span className="font-semibold">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default NotForYou;
