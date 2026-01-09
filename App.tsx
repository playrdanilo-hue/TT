
import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import AIDogTrainer from './components/AIDogTrainer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 z-40 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🐕</span>
              <span className="text-xl font-extrabold text-amber-600 tracking-tight">Cão Sábio</span>
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
              <a href="#how-it-works" className="hover:text-amber-600 transition-colors">Método</a>
              <a href="#testimonials" className="hover:text-amber-600 transition-colors">Depoimentos</a>
              <a href="#pricing" className="hover:text-amber-600 transition-colors">Preços</a>
            </div>
            <a
              href="#pricing"
              className="rounded-full bg-amber-600 px-6 py-2 text-sm font-bold text-white transition-all hover:bg-amber-700 hover:shadow-lg"
            >
              Matricular-se
            </a>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="pt-16">
        <Hero />
        
        {/* Statistics Section */}
        <section className="bg-amber-600 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="text-center text-white">
                <div className="text-4xl font-extrabold">10k+</div>
                <div className="mt-2 text-sm font-medium opacity-80">Alunos Felizes</div>
              </div>
              <div className="text-center text-white">
                <div className="text-4xl font-extrabold">98%</div>
                <div className="mt-2 text-sm font-medium opacity-80">Satisfação</div>
              </div>
              <div className="text-center text-white">
                <div className="text-4xl font-extrabold">30d</div>
                <div className="mt-2 text-sm font-medium opacity-80">Tempo Médio</div>
              </div>
              <div className="text-center text-white">
                <div className="text-4xl font-extrabold">24/7</div>
                <div className="mt-2 text-sm font-medium opacity-80">Suporte IA</div>
              </div>
            </div>
          </div>
        </section>

        <Features />

        {/* Social Proof Section */}
        <section id="testimonials" className="bg-white py-24 overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Histórias de Sucesso</h2>
              <p className="mt-4 text-xl text-gray-500">Veja o que dizem nossos alunos sobre a transformação de seus pets.</p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  name: "Carla Oliveira",
                  pet: "Bento (Beagle)",
                  text: "O Bento era impossível! Destruía chinelos e não parava quieto. Em 2 semanas de curso, ele já senta e fica sozinho sem chorar.",
                  img: "https://picsum.photos/id/64/100/100"
                },
                {
                  name: "Roberto Silva",
                  pet: "Luna (SRD)",
                  text: "Tentei vários treinadores presenciais e nada funcionou. O método positivo do Cão Sábio mudou nossa rotina. Passear agora é um prazer.",
                  img: "https://picsum.photos/id/103/100/100"
                },
                {
                  name: "Ana Costa",
                  pet: "Thor (Pitbull)",
                  text: "Muita gente tinha medo dele. Hoje o Thor é o cão mais educado do bairro. O módulo de socialização foi essencial.",
                  img: "https://picsum.photos/id/22/100/100"
                }
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 italic">
                  <p className="text-gray-600 mb-6">"{item.text}"</p>
                  <div className="flex items-center">
                    <img src={item.img} className="h-12 w-12 rounded-full mr-4" alt={item.name} />
                    <div>
                      <div className="font-bold text-gray-900">{item.name}</div>
                      <div className="text-sm text-amber-600">{item.pet}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Pricing />

        {/* FAQ Section */}
        <section className="bg-gray-50 py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {[
                { q: "O curso serve para cães adultos?", a: "Sim! Cães de qualquer idade podem aprender novos comportamentos com o método positivo." },
                { q: "Quanto tempo preciso dedicar por dia?", a: "Apenas 15 a 20 minutos por dia já são suficientes para ver resultados em poucas semanas." },
                { q: "E se eu não gostar?", a: "Você tem 7 dias de garantia incondicional. Se não estiver satisfeito, devolvemos 100% do seu dinheiro." }
              ].map((faq, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">{faq.q}</h4>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-amber-600 py-16">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Pronto para ter o cão dos seus sonhos?
            </h2>
            <p className="mt-4 text-xl text-amber-100">
              Junte-se a milhares de tutores satisfeitos ainda hoje.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="#pricing"
                className="rounded-full bg-white px-10 py-4 text-lg font-bold text-amber-600 shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                Quero Começar Agora!
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8 text-gray-400 text-sm">
          <div className="flex justify-center space-x-2 items-center mb-4">
            <span className="text-xl">🐕</span>
            <span className="font-bold text-gray-600">Cão Sábio</span>
          </div>
          <p>&copy; 2024 Cão Sábio Treinamentos Ltda. Todos os direitos reservados.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="hover:text-amber-600">Termos de Uso</a>
            <a href="#" className="hover:text-amber-600">Privacidade</a>
            <a href="#" className="hover:text-amber-600">Contato</a>
          </div>
        </div>
      </footer>

      {/* AI Assistant */}
      <AIDogTrainer />
    </div>
  );
};

export default App;
