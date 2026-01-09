
import React from 'react';

const features = [
  {
    title: "Obediência Básica",
    description: "Senta, deita, fica e vem. Comandos fundamentais para a segurança do seu cão.",
    icon: "🐕"
  },
  {
    title: "Xixi e Cocô no Lugar",
    description: "Acabe com a sujeira em casa definitivamente com nosso protocolo de 7 dias.",
    icon: "🏠"
  },
  {
    title: "Passeio Sem Puxar",
    description: "Torne o passeio o momento mais relaxante do dia, com o cão andando ao seu lado.",
    icon: "🌳"
  },
  {
    title: "Fim da Ansiedade",
    description: "Ensine seu cão a ficar sozinho sem latir, destruir móveis ou sofrer.",
    icon: "❤️"
  }
];

const Features: React.FC = () => {
  return (
    <div id="how-it-works" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            O Que Seu Cão Vai Aprender
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500">
            Nosso treinamento cobre todos os pilares necessários para um convívio harmonioso.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <div key={idx} className="relative rounded-2xl bg-white p-8 shadow-sm transition-transform hover:-translate-y-1">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
              <p className="mt-4 text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
