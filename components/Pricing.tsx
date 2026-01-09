
import React from 'react';

const plans = [
  {
    name: "Básico",
    price: "R$ 97",
    description: "Ideal para quem quer começar do zero.",
    features: ["Acesso Vitalício", "Guia de Xixi e Cocô", "Comandos Básicos", "Certificado Digital"],
    recommended: false
  },
  {
    name: "VIP Elite",
    price: "R$ 197",
    description: "O curso completo com suporte direto.",
    features: ["Tudo do Básico", "Ansiedade de Separação", "Truques Avançados", "Grupo de Alunos no Telegram", "Mentoria Mensal Coletiva"],
    recommended: true
  },
  {
    name: "Master Pro",
    price: "R$ 497",
    description: "Para quem quer se tornar um especialista.",
    features: ["Tudo do VIP", "Módulo Agresividade", "Aulas 1-on-1 gravadas", "Suporte Prioritário 24h", "Kit Cão Sábio (Físico)"],
    recommended: false
  }
];

const Pricing: React.FC = () => {
  return (
    <div id="pricing" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Escolha seu Nível de Treinamento</h2>
          <p className="mt-4 text-xl text-gray-500">Invista hoje no futuro do seu melhor amigo.</p>
        </div>

        <div className="mt-20 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
          {plans.map((plan, idx) => (
            <div key={idx} className={`relative flex flex-col rounded-2xl border ${plan.recommended ? 'border-amber-500 ring-2 ring-amber-500' : 'border-gray-200'} bg-white p-8 shadow-sm`}>
              {plan.recommended && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full bg-amber-500 px-4 py-1 text-sm font-semibold text-white">
                  Mais Escolhido
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                </p>
                <p className="mt-6 text-gray-500">{plan.description}</p>

                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start">
                      <svg className="h-6 w-6 flex-shrink-0 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-3 text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#"
                className={`mt-8 block w-full rounded-md py-3 text-center text-sm font-semibold shadow-sm transition-all ${
                  plan.recommended
                    ? 'bg-amber-600 text-white hover:bg-amber-700'
                    : 'bg-amber-50 text-amber-700 hover:bg-amber-100'
                }`}
              >
                Começar Agora
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
