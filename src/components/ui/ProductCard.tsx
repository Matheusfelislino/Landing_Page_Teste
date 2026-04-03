import { motion } from 'motion/react'
import type { Product } from '../../types/product'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      whileHover="hover"
      className="group relative bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="aspect-[4/5] overflow-hidden relative">
        <motion.img
          variants={{ hover: { scale: 1.05 } }}
          transition={{ duration: 0.4 }}
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />

        {product.tag && (
          <span className="absolute top-4 left-4 bg-azul-noite text-white text-[10px] font-display font-medium px-2 py-1 uppercase tracking-widest">
            {product.tag}
          </span>
        )}

        <motion.div
          variants={{
            hover: { opacity: 1, y: 0 },
            initial: { opacity: 0, y: 20 },
          }}
          initial="initial"
          className="absolute inset-0 bg-azul-noite/20 flex items-end p-6"
        >
          <button className="w-full bg-white text-azul-noite py-3 font-display font-bold uppercase text-xs tracking-widest shadow-xl">
            Ver produto
          </button>
        </motion.div>
      </div>

      <div className="p-4 bg-white">
        <h3 className="font-display font-bold text-sm uppercase mb-1 text-cinza-texto">
          {product.name}
        </h3>
        <p className="font-display font-medium text-vermelho-urbano">{product.price}</p>
      </div>
    </motion.div>
  )
}