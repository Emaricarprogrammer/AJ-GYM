'use client'

import Link from 'next/link'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/logo.jpg"
            alt="Logo Ginásio"
            className="h-16 w-16 rounded-full border-2 border-red-500/30 shadow-lg transition-all duration-300 hover:border-red-500/60 md:h-20 md:w-20"
          />
        </div>

        <nav className="hidden items-center space-x-8 md:flex">
          <Link
            href="#"
            className="group relative font-medium text-white transition-colors duration-200 hover:text-red-400"
          >
            Início
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#about"
            className="group relative font-medium text-white transition-colors duration-200 hover:text-red-400"
          >
            Sobre Nós
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#"
            className="group relative font-medium text-white transition-colors duration-200 hover:text-red-400"
          >
            Modalidades
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#"
            className="group relative font-medium text-white transition-colors duration-200 hover:text-red-400"
          >
            Horários
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#"
            className="group relative font-medium text-white transition-colors duration-200 hover:text-red-400"
          >
            Contacto
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        <nav className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 text-white focus:outline-none"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </nav>

        <div className="hidden md:block">
          <button className="transform rounded-full border border-red-500/20 bg-red-600/90 px-6 py-2 font-medium text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-xl">
            Inscreve-te Já
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-20 bg-black/90 backdrop-blur-sm transition-transform duration-300 md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center space-y-8">
          <Link
            href="#"
            onClick={toggleMenu}
            className="text-2xl font-medium text-white transition-colors duration-200 hover:text-red-400"
          >
            Início
          </Link>
          <Link
            href="#about"
            onClick={toggleMenu}
            className="text-2xl font-medium text-white transition-colors duration-200 hover:text-red-400"
          >
            Sobre Nós
          </Link>
          <Link
            href="#"
            onClick={toggleMenu}
            className="text-2xl font-medium text-white transition-colors duration-200 hover:text-red-400"
          >
            Modalidades
          </Link>
          <Link
            href="#"
            onClick={toggleMenu}
            className="text-2xl font-medium text-white transition-colors duration-200 hover:text-red-400"
          >
            Horários
          </Link>
          <Link
            href="#"
            onClick={toggleMenu}
            className="text-2xl font-medium text-white transition-colors duration-200 hover:text-red-400"
          >
            Contacto
          </Link>
          <button
            className="transform rounded-full bg-red-600 px-8 py-3 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-700"
            onClick={toggleMenu}
          >
            Inscreve-te Já
          </button>
        </div>
      </div>
    </>
  )
}
