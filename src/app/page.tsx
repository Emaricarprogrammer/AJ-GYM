import { Header } from '@/components/ui/header'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <main className="relative min-h-screen w-full bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/gallery-4.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
        
        <div className="relative z-10 px-4 py-6 sm:px-6 lg:px-8">
          <Header />
          
          <div className="mx-auto mt-16 max-w-7xl text-center lg:mt-32">
            <h1 className="mb-4 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Transforma o Teu <span>Corpo</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl md:text-2xl">
              O melhor ginásio de Luanda para alcançares os teus objetivos de fitness. 
              Equipamentos modernos, treinos personalizados e resultados garantidos.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button className="transform rounded-full bg-red-600 px-8 py-4 text-base font-semibold text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-3xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black sm:text-lg">
                Começar Treino
              </button>
              <button className="transform rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black sm:text-lg">
                Conhecer Planos
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* About Section */}
      <section id="about" className="relative bg-black py-16 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-transparent to-red-900/10" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              O Nosso <span >Ginásio</span>
            </h2>
            <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-red-500 to-red-600" />
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                A Nossa Missão
              </h3>
              <p className="text-lg leading-relaxed text-gray-300">
                Somos o ginásio líder em Luanda, dedicado a transformar vidas através do fitness 
                e bem-estar. Com mais de 5 anos de experiência, oferecemos um ambiente motivador 
                e profissional onde cada membro pode alcançar os seus objetivos de forma segura e eficaz.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                Contamos com uma equipa de personal trainers certificados, equipamentos de última 
                geração e uma variedade de modalidades que se adaptam a todos os níveis de condição física. 
                O teu sucesso é a nossa prioridade.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-500 sm:text-3xl">1000+</div>
                  <div className="text-sm text-gray-400 sm:text-base">Membros Ativos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-500 sm:text-3xl">15+</div>
                  <div className="text-sm text-gray-400 sm:text-base">Modalidades</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-500 sm:text-3xl">5</div>
                  <div className="text-sm text-gray-400 sm:text-base">Anos Exp.</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-500 sm:text-3xl">24/7</div>
                  <div className="text-sm text-gray-400 sm:text-base">Horário</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
              {[
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  ),
                  title: "Equipamentos Premium",
                  description: "Máquinas e equipamentos de última geração para treinos completos."
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  ),
                  title: "Trainers Qualificados",
                  description: "Personal trainers certificados para te guiar nos teus objetivos."
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  ),
                  title: "Horários Flexíveis",
                  description: "Aberto 24/7 para se adequar à tua rotina e estilo de vida."
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  ),
                  title: "Resultados Garantidos",
                  description: "Planos personalizados com acompanhamento para resultados reais."
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="transform rounded-lg border border-red-500/20 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 sm:p-6"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-red-600 sm:mb-4 sm:h-12 sm:w-12">
                    <svg className="h-5 w-5 text-white sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {feature.icon}
                    </svg>
                  </div>
                  <h4 className="mb-2 text-lg font-semibold text-white sm:text-xl">{feature.title}</h4>
                  <p className="text-sm text-gray-400 sm:text-base">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Classes 
          <div className="mt-16 sm:mt-20">
            <div className="mb-8 text-center sm:mb-12">
              <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Modalidades <span>Populares</span>
              </h3>
              <p className="mx-auto max-w-2xl text-gray-400">
                Descobre as nossas modalidades mais procuradas pelos membros
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  ),
                  title: "Musculação",
                  description: "Treino de força com equipamentos profissionais e orientação especializada."
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  ),
                  title: "Cardio",
                  description: "Melhora a tua resistência cardiovascular com as nossas máquinas de cardio."
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  ),
                  title: "Aulas de Grupo",
                  description: "Zumba, Yoga, CrossFit e muito mais em aulas dinâmicas e motivadoras."
                }
              ].map((modality, index) => (
                <div
                  key={index}
                  className="group rounded-lg border border-red-500/20 bg-gradient-to-br from-red-600/20 to-red-800/20 p-6 backdrop-blur-sm transition-all duration-300 hover:from-red-600/30 hover:to-red-800/30"
                >
                  <div className="mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600/20 transition-colors duration-300 group-hover:bg-red-600/30 sm:h-16 sm:w-16">
                      <svg className="h-6 w-6 text-red-400 sm:h-8 sm:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {modality.icon}
                      </svg>
                    </div>
                  </div>
                  <h4 className="mb-3 text-xl font-semibold text-white">{modality.title}</h4>
                  <p className="text-gray-400">{modality.description}</p>
                </div>
              ))}
            </div>
          </div>*/}
        </div>
      </section>

      {/* Gallery Section */}
    <section id="modalities" className="relative bg-black py-20">
  <div className="absolute inset-0 bg-gradient-to-br from-red-900/5 via-black to-red-900/5"></div>
  
  <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="mb-16 text-center">
      <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
        Nossas <span>Modalidades</span>
      </h2>
      <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-red-500 to-red-600"></div>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 sm:text-xl">
        Descubra as modalidades mais procuradas e transforme o seu treino numa experiência única
      </p>
    </div>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          image: "/gallery-2.jpg",
          title: "Musculação",
          description: "Treino de força com equipamentos de última geração e acompanhamento profissional",
          features: ["Equipamentos premium", "Planos personalizados", "Acompanhamento técnico"],
          schedule: "Seg-Sex: 05:00-22:00 | Sáb: 07:00-21:00"
        },
        {
          image: "/gallery-3.jpg",
          title: "Jiu-Jitsu Brasileiro",
          description: "Arte marcial brasileira que desenvolve técnica, disciplina e condicionamento físico",
          features: ["Aulas para todos os níveis", "Professores certificados", "Competições"],
          schedule: "Seg/Qua/Sex: 18:00-20:00"
        },
        {
          image: "/gallery-3.jpg",
          title: "Kick Boxing",
          description: "Combina técnicas de boxe e artes marciais para um treino completo e dinâmico",
          features: ["Condicionamento físico", "Técnica de defesa", "Aulas em grupo"],
          schedule: "Seg/Qua: 18:00-20:00"
        },
        {
          image: "/gallery-3.jpg",
          title: "CrossTraining",
          description: "Treino funcional de alta intensidade para melhorar todas as capacidades físicas",
          features: ["Treinos variados", "Alta intensidade", "Resultados rápidos"],
          schedule: "Seg-Sex: 06:00-22:00"
        },
        {
          image: "/logo.jpg",
          title: "Judo",
          description: "Arte marcial tradicional que desenvolve força, equilíbrio e autodisciplina",
          features: ["Técnicas de projeção", "Trabalho de solo", "Valores marciais"],
          schedule: "Seg/Qua: 20:00-22:00"
        },
        {
          image: "/gallery-4.jpg",
          title: "Zona Cardio",
          description: "Área completa com equipamentos modernos para melhorar a sua resistência cardiovascular",
          features: ["Esteiras profissionais", "Bicicletas elípticas", "Escadas climáticas"],
          schedule: "Seg-Dom: 05:00-23:00"
        }
      ].map((modality, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-2xl border border-red-500/20 bg-gradient-to-br from-black/80 to-red-900/10 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-red-500/40 hover:shadow-2xl"
        >
          {/* Image Container */}
          <div className="relative h-64 overflow-hidden">
            <img
              src={modality.image}
              alt={modality.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
            <div className="absolute inset-0 bg-red-600/0 transition-all duration-500 group-hover:bg-red-600/10"></div>
            
            {/* Badge */}
            <div className="absolute left-4 top-4">
              <span className="rounded-full bg-red-600/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                {modality.schedule.split('|')[0].trim()}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="relative p-6">
            <h3 className="mb-3 text-2xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
              {modality.title}
            </h3>
            
            <p className="mb-4 text-gray-300 leading-relaxed">
              {modality.description}
            </p>

            {/* Features */}
            <ul className="mb-4 space-y-2">
              {modality.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                  <svg
                    className="mr-2 h-4 w-4 flex-shrink-0 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Schedule */}
            <div className="mt-4 flex items-center justify-between border-t border-red-500/20 pt-4">
              <div className="flex items-center text-xs text-gray-400">
                <svg
                  className="mr-1 h-4 w-4 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{modality.schedule}</span>
              </div>
              
              <button className="transform rounded-full bg-red-600/20 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-red-600/40 hover:scale-105">
                Saber Mais
              </button>
            </div>
          </div>

          {/* Hover Effect */}
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-red-600/0 via-red-600/0 to-red-600/0 transition-all duration-500 group-hover:from-red-600/10 group-hover:via-red-600/5 group-hover:to-red-600/10"></div>
        </div>
      ))}
    </div>

  </div>
</section>

      {/* Pricing Section */}
      <section id="pricing" className="relative bg-black py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 via-transparent to-red-900/10" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Planos e <span>Preços</span>
            </h2>
            <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-red-500 to-red-600" />
            <p className="mt-6 text-lg text-gray-400">
              Escolhe o plano que melhor se adapta aos teus objetivos e orçamento
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                name: "Básico",
                price: "15.000",
                period: "mês",
                popular: false,
                features: [
                  "Acesso à zona de musculação",
                  "Acesso à zona cardio",
                  "Horário: 05:00 - 23:00",
                  "Aulas de grupo inclusas",
                  "Avaliação física inicial",
                  "App de treino básico"
                ],
                excluded: ["Acesso 24/7", "Personal trainer", "Aulas especiais"]
              },
              {
                name: "Premium",
                price: "25.000",
                period: "mês",
                popular: true,
                features: [
                  "Todos os benefícios do plano Básico",
                  "Acesso 24/7",
                  "2 sessões com personal trainer",
                  "Acesso a todas as modalidades",
                  "Plano de treino personalizado",
                  "App de treino premium",
                  "Avaliação física mensal"
                ],
                excluded: ["Aulas particulares"]
              },
              {
                name: "Elite",
                price: "45.000",
                period: "mês",
                popular: false,
                features: [
                  "Todos os benefícios do plano Premium",
                  "Sessões ilimitadas com personal trainer",
                  "Aulas particulares inclusas",
                  "Plano nutricional personalizado",
                  "Acompanhamento contínuo",
                  "Acesso prioritário a equipamentos",
                  "Convites para eventos especiais",
                  "Área VIP exclusiva"
                ],
                excluded: []
              }
            ].map((plan, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl border backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 ${
                  plan.popular
                    ? "border-red-500/50 bg-gradient-to-br from-red-600/20 to-red-800/20 scale-105"
                    : "border-red-500/20 bg-gradient-to-br from-red-600/10 to-red-800/10"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -right-12 top-8 rotate-45 bg-red-600 px-12 py-1 text-sm font-semibold text-white">
                    Mais Popular
                  </div>
                )}
                
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-4xl font-bold text-white">{plan.price} Kz</span>
                      <span className="ml-2 text-gray-400">/{plan.period}</span>
                    </div>
                  </div>

                  <ul className="mb-8 space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <svg
                          className="h-5 w-5 flex-shrink-0 text-red-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="ml-3 text-gray-300">{feature}</span>
                      </li>
                    ))}
                    {plan.excluded.map((excluded, excludedIndex) => (
                      <li key={excludedIndex} className="flex items-center text-gray-500">
                        <svg
                          className="h-5 w-5 flex-shrink-0 text-gray-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        <span className="ml-3">{excluded}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full transform rounded-full px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                      plan.popular
                        ? "bg-red-600 text-white hover:bg-red-700"
                        : "border border-red-500/30 bg-red-600/20 text-white backdrop-blur-sm hover:bg-red-600/40"
                    }`}
                  >
                    Escolher Plano
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="relative border-t border-red-500/20 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/5 to-transparent" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            {/* Brand */}
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-3">
                <img
                  src="/logo.jpg"
                  alt="Logo Ginásio"
                  className="h-12 w-12 rounded-full border-2 border-red-500/30"
                />
                <h3 className="text-xl font-bold text-white">Ginásio AJ Luanda</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-400 sm:text-base">
                O melhor ginásio de Luanda para transformar o teu corpo e alcançar os teus objetivos 
                de fitness com equipamentos modernos e treinos personalizados.
              </p>
              
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="group flex h-10 w-10 items-center justify-center rounded-full bg-red-600/20 transition-all duration-300 hover:bg-red-600/40"
                >
                  <svg
                    className="h-5 w-5 text-red-400 group-hover:text-red-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="group flex h-10 w-10 items-center justify-center rounded-full bg-red-600/20 transition-all duration-300 hover:bg-red-600/40"
                >
                  <svg
                    className="h-5 w-5 text-red-400 group-hover:text-red-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="group flex h-10 w-10 items-center justify-center rounded-full bg-red-600/20 transition-all duration-300 hover:bg-red-600/40"
                >
                  <svg
                    className="h-5 w-5 text-red-400 group-hover:text-red-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.120.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.146-1.378l.451-1.711c.165-.631.667-2.538.667-2.538s.17.331.17.82c0 .781-.496 1.607-1.116 1.607-.835 0-1.447-.87-1.447-2.027 0-1.35.967-2.294 2.133-2.294.781 0 1.18.45 1.18 1.08 0 .788-.504 1.418-1.184 1.418-.304 0-.596-.155-.693-.416 0 0-.151.594-.188.74-.09.35-.335 1.31-.457 1.688-.182.56-.272 1.01-.332 1.314C10.11 21.815 5.013 18.262 5.013 11.987 5.013 8.27 8.27 5.013 12.017 5.013s7.005 3.256 7.005 6.974c0 6.624-5.259 11.987-11.005 11.987z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="group flex h-10 w-10 items-center justify-center rounded-full bg-red-600/20 transition-all duration-300 hover:bg-red-600/40"
                >
                  <svg
                    className="h-5 w-5 text-red-400 group-hover:text-red-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Links Rápidos</h4>
              <nav>
                <ul className="space-y-2">
                  {['Início', 'Sobre Nós', 'Modalidades', 'Planos e Preços'].map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-sm text-gray-400 transition-colors duration-200 hover:text-red-400 sm:text-base"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Modalities */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Modalidades</h4>
              <nav>
                <ul className="space-y-2">
                  {['Musculação', 'Jiu-Jistu Brasileiro', 'CrossFit', 'Kick Boxing', 'Judo'].map((modality) => (
                    <li key={modality}>
                      <Link
                        href="#"
                        className="text-sm text-gray-400 transition-colors duration-200 hover:text-red-400 sm:text-base"
                      >
                        {modality}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Contactos</h4>
              <address className="space-y-4 not-italic">
                <div className="flex items-start space-x-3">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0 text-red-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <p className="text-gray-400">
                      Rua da Independência, 123
                      <br />
                      Luanda, Angola
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-red-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <Link
                    href="tel:+244923456789"
                    className="text-gray-400 transition-colors duration-200 hover:text-red-400"
                  >
                    9449395940
                  </Link>
                </div>

                <div className="flex items-start space-x-3">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0 text-red-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <p className="text-gray-400">
                      <strong>Seg-Sex:</strong> 05:00 - 23:00
                      <br />
                      <strong>Fins de Semana:</strong> 07:00 - 21:00
                    </p>
                  </div>
                </div>
              </address>
            </div>
          </div>
          {/* Bottom */}
          <div className="mt-8 border-t border-red-500/20 pt-8">
            <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
              <p className="text-center text-sm text-gray-400 sm:text-left">
                © 2024 Ginásio AJ Luanda. Todos os direitos reservados.
              </p>
              <nav>
                <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6">
                  {['Política de Privacidade', 'Termos de Uso', 'Cookies'].map((link) => (
                    <Link
                      key={link}
                      href="#"
                      className="text-sm text-gray-400 transition-colors duration-200 hover:text-red-400"
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}