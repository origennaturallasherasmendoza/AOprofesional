
import React from 'react';
import { CheckCircle2, Sparkles, Heart, Star } from 'lucide-react';

const WhatIsIt: React.FC = () => {
  const features = [
    {
      icon: <CheckCircle2 className="w-6 h-6 text-white" />,
      iconBg: "bg-blue-600",
      title: "Aprendizaje con Sentido",
      description: "No es solo un juego; son herramientas diseñadas para su bienestar emocional."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-white" />,
      iconBg: "bg-[#8cc63f]",
      title: "Listo para usar",
      description: "Solo tenés que imprimir y empezar a jugar con tu hijo"
    },
    {
      icon: <Heart className="w-6 h-6 text-white" />,
      iconBg: "bg-[#662d91]",
      title: "Diversión garantizada",
      description: "Los niños aprenden jugando sin sentir que están en una \"lección\""
    },
    {
      icon: <Star className="w-6 h-6 text-white" />,
      iconBg: "bg-[#ffde00]",
      title: "Acceso de inmediato",
      description: "Un solo pago y lo usás todas las veces que quieras, descargandolo ahora"
    }
  ];

  return (
    <section className="py-24 bg-[#f1f4f9] px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">
            ¿Qué es <span className="text-blue-600">EmotiPack</span>?
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Es un <span className="font-bold">PACK digital IMPRIMIBLE</span> diseñado para que tu hijo aprenda a identificar, nombrar y expresar sus emociones de forma saludable, mientras fortalecés el vínculo entre ustedes.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Features List */}
          <div className="space-y-8">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-5 group">
                <div className={`${feature.iconBg} p-3 rounded-xl shadow-lg shrink-0 transform group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full transform scale-90"></div>
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://i.imgur.com/txrBlk5.jpeg" 
                alt="Niños felices usando EmotiPack" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsIt;
