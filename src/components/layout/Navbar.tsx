import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full bg-azul-noite text-white z-50 py-4 px-6 md:px-12 flex justify-between items-center">
      <div className="font-display font-bold text-xl tracking-tighter">VESTE.URBAN</div>

      <div className="hidden md:flex items-center space-x-8 font-display font-medium text-sm uppercase tracking-widest">
        <a href="#drops" className="hover:text-vermelho-urbano transition-colors">
          Drops
        </a>
        <a href="#lookbook" className="hover:text-vermelho-urbano transition-colors">
          Lookbook
        </a>
        <a href="#sobre" className="hover:text-vermelho-urbano transition-colors">
          Sobre
        </a>
        <a href="#contato" className="hover:text-vermelho-urbano transition-colors">
          Contato
        </a>
        <button className="bg-vermelho-urbano hover:bg-opacity-90 text-white px-6 py-2 rounded-none transition-all font-bold">
          Ver coleção atual
        </button>
      </div>

      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-azul-noite p-8 flex flex-col space-y-6 md:hidden border-t border-white/10"
          >
            <a href="#drops" onClick={() => setIsOpen(false)} className="text-lg font-display font-bold">
              Drops
            </a>
            <a href="#lookbook" onClick={() => setIsOpen(false)} className="text-lg font-display font-bold">
              Lookbook
            </a>
            <a href="#sobre" onClick={() => setIsOpen(false)} className="text-lg font-display font-bold">
              Sobre
            </a>
            <a href="#contato" onClick={() => setIsOpen(false)} className="text-lg font-display font-bold">
              Contato
            </a>
            <button className="bg-vermelho-urbano text-white py-4 font-bold uppercase tracking-widest">
              Ver coleção atual
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}