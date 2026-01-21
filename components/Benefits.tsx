
import React from 'react';
import { CheckCircle2, UserCheck, HeartPulse } from 'lucide-react';

const Benefits: React.FC = () => {
  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Lo que lograrás con este juego
        </h2>
        <p className="text-gray-500">Transforma la dinámica familiar desde el primer día.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Children Benefits */}
        <div className="bg-green-50/50 p-8 rounded-[40px] border border-green-100">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-green-500 p-2 rounded-lg"><UserCheck className="text-white w-5 h-5" /></div>
            <h3 className="text-2xl font-bold text-green-800 uppercase tracking-wider text-sm">Tu hijo podrá:</h3>
          </div>
          <ul className="space-y-5">
            {[
              "Reconocer y nombrar sus emociones",
              "Expresarse sin explotar ni cerrarse",
              "Reducir la frustración con apoyo visual",
              "Sentirse escuchado y comprendido",
              "Desarrollar seguridad emocional"
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Parents Benefits */}
        <div className="bg-purple-50/50 p-8 rounded-[40px] border border-purple-100">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-primary p-2 rounded-lg"><HeartPulse className="text-white w-5 h-5" /></div>
            <h3 className="text-2xl font-bold text-primary uppercase tracking-wider text-sm">Y vos vas a poder:</h3>
          </div>
          <ul className="space-y-5">
            {[
              "Acompañarlo con más claridad",
              "Dejar de improvisar en momentos difíciles",
              "Sentirte tranquilo/a sabiendo que lo estás ayudando"
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="mt-20 text-center bg-gray-50 p-10 rounded-3xl border border-dashed border-gray-300">
        <p className="text-gray-600 font-bold text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          "Para lograr estos cambios, diseñamos un kit físico (imprimible) que transforma cada emoción en una aventura de juego. <span className="text-blue-600 underline decoration-accent decoration-4">Mirá todo lo que incluye tu EmotiPack:</span>"
        </p>
      </div>
    </section>
  );
};

export default Benefits;
