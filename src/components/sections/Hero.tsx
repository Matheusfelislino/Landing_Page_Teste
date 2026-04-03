import { motion } from 'motion/react'

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20 bg-azul-noite dark:bg-black flex items-center overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 opacity-40">
        <img
          src="src/assests/images/photo-1516062423079-7ca13cdc7f5a.jpeg"
          alt="Streetwear Model"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-white">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-block bg-vermelho-urbano text-xs font-display font-medium px-3 py-1 mb-6 tracking-widest"
        >
          DROP 07 — DISPONÍVEL AGORA
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-8xl font-display font-bold leading-none mb-6"
        >
          Vista o que <br /> você é.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl font-sans text-white/80 max-w-lg mb-10"
        >
          Coleção Sombra — edição limitada. <br className="hidden md:block" /> Só até acabar o
          estoque.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button className="bg-vermelho-urbano hover:bg-opacity-90 px-10 py-4 font-display font-bold uppercase tracking-widest transition-all">
            Comprar agora
          </button>
          <button className="border-2 border-white hover:bg-white hover:text-azul-noite px-10 py-4 font-display font-bold uppercase tracking-widest transition-all">
            Ver lookbook
          </button>
        </motion.div>
      </div>
    </section>
  )
}