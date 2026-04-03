import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { X } from 'lucide-react'
import { LOOKBOOK_IMAGES } from '../../data/lookbook'

export default function LookbookSection() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null)

  return (
    <section id="lookbook" className="py-24 px-6 md:px-12 container mx-auto bg-[#F8F8FC]">
      <h2 className="text-4xl md:text-5xl mb-12 text-center font-display font-bold text-cinza-texto">
        Drop 07 — Sombra em ação
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:h-[800px]">
        <div
          className="col-span-2 md:row-span-2 relative group cursor-pointer overflow-hidden"
          onClick={() => setSelectedImg(LOOKBOOK_IMAGES[0])}
        >
          <img
            src={LOOKBOOK_IMAGES[0]}
            alt="Lookbook 1"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
        </div>

        {LOOKBOOK_IMAGES.slice(1).map((img, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden"
            onClick={() => setSelectedImg(img)}
          >
            <img
              src={img}
              alt={`Lookbook ${index + 2}`}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 bg-azul-noite/95 z-[100] flex items-center justify-center p-4 md:p-12"
          >
            <button className="absolute top-8 right-8 text-white hover:text-vermelho-urbano transition-colors">
              <X size={40} />
            </button>

            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={selectedImg}
              alt="Lookbook Expanded"
              className="max-w-full max-h-full object-contain shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}