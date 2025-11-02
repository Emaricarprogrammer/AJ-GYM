import { Header } from '@/components/ui/header'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { modalitiesData } from '@/lib/modality-datas'
import { Metadata } from 'next'
interface PageProps {
  params: {
    slug: string
  }
}

export default function ModalityPage({ params }: PageProps) {
  const modality = modalitiesData[params.slug]

  if (!modality) {
    notFound()
  }

  return (
    <>
      {/* Hero Section da Modalidade */}
      <main className="relative min-h-[70vh] w-full bg-black overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={modality.heroImage}
            alt={modality.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <div className="relative z-10 px-4 py-6 sm:px-6 lg:px-8">
          <Header />
          
          <div className="mx-auto mt-20 max-w-7xl text-center lg:mt-32">
            <h1 className="mb-4 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {modality.title}
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl md:text-2xl">
              {modality.description}
            </p>
          </div>
        </div>
      </main>

      {/* Conteúdo da Modalidade */}
      <section className="bg-black py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            
            {/* Coluna Esquerda - Informações Principais */}
            <div className="space-y-12">
              
              {/* O que é */}
              <div>
                <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                  O que é {modality.title}?
                </h2>
                <p className="text-lg leading-relaxed text-gray-300">
                  {modality.whatIs}
                </p>
              </div>

              {/* Para quem é */}
              <div>
                <h3 className="mb-6 text-2xl font-bold text-white">Para quem é ideal?</h3>
                <div className="grid gap-3">
                  {modality.whoIsFor.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-600 mt-1">
                        <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300 text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefícios */}
              <div>
                <h3 className="mb-6 text-2xl font-bold text-white">Benefícios Principais</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {modality.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-600 mt-1 flex-shrink-0">
                        <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
            
            <div className="space-y-8">

              {/* Cartão de Informações - SEM BACKGROUND */}
              <div className="rounded-2xl border border-red-500/20 bg-black/50 p-8 backdrop-blur-sm">
                <h3 className="mb-6 text-2xl font-bold text-white">Informações Práticas</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-red-500/20 pb-3">
                    <span className="text-gray-300">Intensidade:</span>
                    <span className="font-semibold text-white">{modality.intensity}</span>
                  </div>
                  
                  <div className="flex items-center justify-between border-b border-red-500/20 pb-3">
                    <span className="text-gray-300">Duração:</span>
                    <span className="font-semibold text-white">{modality.duration}</span>
                  </div>
                  
                  <div className="pt-2">
                    <h4 className="mb-3 font-semibold text-white">Horários:</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Segunda a Sexta:</span>
                        <span className="font-semibold text-white">{modality.schedule.weekdays}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Fim de Semana:</span>
                        <span className="font-semibold text-white">{modality.schedule.weekends}</span>
                      </div>
                      {modality.schedule.notes && (
                        <p className="mt-3 text-sm text-gray-400 bg-red-500/10 p-2 rounded-lg">
                          {modality.schedule.notes}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Preçário - SEM BACKGROUND */}
              <div className="rounded-2xl border border-red-500/20 bg-black/50 p-8 backdrop-blur-sm">
                <h3 className="mb-6 text-2xl font-bold text-white">Preçário</h3>
                <div className="space-y-4">
                  {modality.pricing.map((item, index) => (
                    <div key={index} className="flex justify-between items-center border-b border-red-500/20 pb-3">
                      <span className="text-gray-300">{item.name}</span>
                      <span className="font-semibold text-white text-lg">{item.price}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full rounded-full bg-red-600 px-6 py-4 font-semibold text-white transition-all duration-300 hover:bg-red-700 text-lg">
                  <Link
                  href="https://wa.me/244924010504?text=Olá! Gostaria de marcar uma aula experimental."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform rounded-full border border-red-500/20 bg-red-600/90 px-6 py-2 font-medium text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-xl"
                  >
                    Começar Agora
                    </Link>
                    </button>
              </div>

              {/* Instrutores - SEM BACKGROUND */}
              <div className="rounded-2xl border border-red-500/20 bg-black/50 p-8 backdrop-blur-sm">
                <h3 className="mb-6 text-2xl font-bold text-white">Nossos Instrutores</h3>
                <div className="space-y-4">
                  {modality.trainers.map((trainer, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-red-500/5">
                      <div className="h-14 w-14 rounded-full bg-red-600/20 flex items-center justify-center border border-red-500/30">
                        <span className="text-red-400 font-bold text-sm">
                          {trainer.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white">{trainer.name}</h4>
                        <p className="text-sm text-gray-400">{trainer.specialty}</p>
                        <p className="text-xs text-gray-500">{trainer.experience} de experiência</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - AGORA FORA DA SECTION E NO FINAL DA PÁGINA */}
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
                  <li>
                    <Link
                      href="/"
                      className="text-sm text-gray-400 transition-colors duration-200 hover:text-red-400 sm:text-base"
                    >
                      Início
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#about"
                      className="text-sm text-gray-400 transition-colors duration-200 hover:text-red-400 sm:text-base"
                    >
                      Sobre Nós
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#modalities"
                      className="text-sm text-gray-400 transition-colors duration-200 hover:text-red-400 sm:text-base"
                    >
                      Modalidades
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#pricing"
                      className="text-sm text-gray-400 transition-colors duration-200 hover:text-red-400 sm:text-base"
                    >
                      Planos e Preços
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Modalities */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Modalidades</h4>
              <nav>
                <ul className="space-y-2">
                  {[
                    { name: 'Musculação', slug: 'musculacao' },
                    { name: 'Jiu-Jitsu Brasileiro', slug: 'jiu-jitsu-brasileiro' },
                    { name: 'CrossFit', slug: 'cross-fit' },
                    { name: 'Kick Boxing', slug: 'kick-boxing' },
                    { name: 'Judo', slug: 'judo' }
                  ].map((modalityItem) => (
                    <li key={modalityItem.slug}>
                      <Link
                        href={`/modalities/${modalityItem.slug}`}
                        className="text-sm text-gray-400 transition-colors duration-200 hover:text-red-400 sm:text-base"
                      >
                        {modalityItem.name}
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
                      Condominio Girassol, casa n 483
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
                    href="tel:+244924010504"
                    className="text-gray-400 transition-colors duration-200 hover:text-red-400"
                  >
                    924010504
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

// Geração de páginas estáticas
export async function generateStaticParams() {
  return Object.keys(modalitiesData).map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const modality = modalitiesData[params.slug]
  
  if (!modality) {
    return {
      title: 'Modalidade Não Encontrada - Ginásio AJ Luanda',
      description: 'A modalidade que procuras não existe.',
    }
  }

  return {
    title: `${modality.title} - Ginásio AJ Luanda`,
    description: modality.description,
    openGraph: {
      title: `${modality.title} - Ginásio AJ Luanda`,
      description: modality.description,
      images: [modality.heroImage],
    },
  }
}