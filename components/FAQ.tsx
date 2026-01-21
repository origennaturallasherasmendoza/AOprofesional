
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    { q: "¿Necesito experiencia previa?", a: "No. Todo está explicado paso a paso en el Manual de Instrucciones. Está diseñado para que cualquier madre o padre pueda aplicarlo desde el primer minuto sin complicaciones." },
    { q: "¿Cuánto tiempo lleva?", a: "Solo necesitas entre 10 y 15 minutos al día. El kit está diseñado para integrarse fácilmente en la rutina diaria, ya sea antes de dormir, después de la escuela o en un momento de calma." },
    { q: "¿Funciona si mi hijo es tímido?", a: "Sí, definitivamente. El juego reduce drásticamente la presión de “tener que hablar”. Al usar elementos visuales y personajes, el niño se siente más seguro proyectando lo que siente en el juego." },
    { q: "¿Es digital?", a: "Es 100% imprimible, lo que significa que no hay pantallas de por medio. Recibes los archivos PDF en alta calidad y puedes imprimirlos las veces que necesites." }
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <HelpCircle className="w-12 h-12 text-blue-500 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
            Preguntas frecuentes
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} question={faq.q} answer={faq.a} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">
            💡 Ideal para empezar hoy mismo y notar cambios en solo una semana.
          </p>
        </div>
      </div>
    </section>
  );
};

const AccordionItem: React.FC<{ question: string, answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border rounded-3xl overflow-hidden transition-all ${isOpen ? 'border-blue-500 shadow-md' : 'border-gray-100'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-bold text-gray-800 text-base md:text-lg">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-blue-500" /> : <ChevronDown className="w-5 h-5 text-blue-500" />}
      </button>
      {isOpen && (
        <div className="p-6 bg-blue-50/30 text-gray-600 text-sm md:text-base border-t border-blue-100 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQ;
