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

          {/* Popular Classes */}
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
          </div>
        </div>
      </section>

      {/* Gallery Section */}
    <section className="relative bg-black py-20">
        <div className="absolute inset-0 bg-gradient-to-l from-red-900/10 to-transparent"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Nossas Modalidades
            </h2>
            <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-red-500 to-red-600"></div>
            <p className="mt-6 text-lg text-gray-400">
              Vê o nosso espaço moderno e as nossas instalações de topo
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-xl border border-red-500/20 bg-black/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-red-500/40">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/gallery-2.jpg"
                  alt="Musculação"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="mb-2 text-2xl font-bold text-white">
                  Musculação
                </h3>
                <p className="text-gray-300">
                  Equipamentos de última geração para treinos de força e
                  hipertrofia
                </p>
              </div>
              

              <div className="absolute inset-0 bg-red-600/0 transition-all duration-300 group-hover:bg-red-600/10"></div>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-red-500/20 bg-black/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-red-500/40">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/gallery-3.jpg"
                  alt="Zona Cardio"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="mb-2 text-2xl font-bold text-white">
                  Jiu-Jistu Brasileiro
                </h3>
                <p className="text-gray-300">
                  Esteiras, bicicletas e elípticas para melhorar a resistência
                </p>
              </div>

              <div className="absolute inset-0 bg-red-600/0 transition-all duration-300 group-hover:bg-red-600/10"></div>
            </div>

              <div className="group relative overflow-hidden rounded-xl border border-red-500/20 bg-black/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-red-500/40">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/gallery-3.jpg"
                  alt="Zona Cardio"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="mb-2 text-2xl font-bold text-white">
                  Kick Boxing
                </h3>
                <p className="text-gray-300">
                  Esteiras, bicicletas e elípticas para melhorar a resistência
                </p>
              </div>

              <div className="absolute inset-0 bg-red-600/0 transition-all duration-300 group-hover:bg-red-600/10"></div>
            </div>
            <div className="group relative overflow-hidden rounded-xl border border-red-500/20 bg-black/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-red-500/40">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/gallery-3.jpg"
                  alt="Zona Cardio"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="mb-2 text-2xl font-bold text-white">
                  CrossTraining
                  </h3>
                <p className="text-gray-300">
                  Esteiras, bicicletas e elípticas para melhorar a resistência
                </p>
              </div>

              <div className="absolute inset-0 bg-red-600/0 transition-all duration-300 group-hover:bg-red-600/10"></div>
            </div>
                <div className="group relative overflow-hidden rounded-xl border border-red-500/20 bg-black/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-red-500/40">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/gallery-3.jpg"
                  alt="Zona Cardio"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="mb-2 text-2xl font-bold text-white">
                  Judo
                  </h3>
                <p className="text-gray-300">
                  Esteiras, bicicletas e elípticas para melhorar a resistência
                </p>
              </div>

              <div className="absolute inset-0 bg-red-600/0 transition-all duration-300 group-hover:bg-red-600/10"></div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <button className="transform rounded-full border border-red-500/30 bg-red-600/20 px-8 py-3 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-red-500/60 hover:bg-red-600/40">
              Ver Mais Fotos
            </button>
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
              
              <div className="flex space-x-3">
                {['twitter', 'facebook', 'instagram', 'youtube'].map((platform) => (
                  <Link
                    key={platform}
                    href="#"
                    className="group flex h-9 w-9 items-center justify-center rounded-full bg-red-600/20 transition-all duration-300 hover:bg-red-600/40"
                  >
                    <div className="h-4 w-4 rounded bg-red-400 group-hover:bg-red-300" /> {/* Icon placeholder */}
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Links Rápidos</h4>
              <nav>
                <ul className="space-y-2">
                  {['Início', 'Sobre Nós', 'Modalidades', 'Planos e Preços', 'Personal Trainers', 'Blog'].map((link) => (
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
                  {['Musculação', 'Cardio Training', 'CrossFit', 'Yoga & Pilates', 'Zumba', 'Treino Funcional'].map((modality) => (
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
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Contactos</h4>
              <address className="space-y-3 not-italic">
                <div className="flex items-start space-x-3">
                  <div className="h-5 w-5 flex-shrink-0 rounded bg-red-400 mt-0.5" /> {/* Icon placeholder */}
                  <div>
                    <p className="text-sm text-gray-400 sm:text-base">
                      Rua da Independência, 123<br />
                      Luanda, Angola
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="h-5 w-5 flex-shrink-0 rounded bg-red-400" /> {/* Icon placeholder */}
                  <Link
                    href="tel:+244923456789"
                    className="text-sm text-gray-400 transition-colors duration-200 hover:text-red-400 sm:text-base"
                  >
                    +244 923 456 789
                  </Link>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="h-5 w-5 flex-shrink-0 rounded bg-red-400 mt-0.5" /> {/* Icon placeholder */}
                  <div>
                    <p className="text-sm text-gray-400 sm:text-base">
                      <strong>Seg-Sex:</strong> 05:00 - 23:00<br />
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