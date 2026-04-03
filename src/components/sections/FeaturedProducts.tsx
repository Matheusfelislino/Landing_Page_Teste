import { ArrowRight } from 'lucide-react'
import api from '../../services/api'
import ProductCard from '../ui/ProductCard'
import { useEffect, useState } from 'react'

export default function FeaturedProducts() {
  const [filter, setFilter] = useState('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const [products, setProducts] = useState([])

 useEffect(() => {
  async function fetchProducts() {
    try {
      const response = await api.get('/products')
      setProducts(response.data)
    } catch (error) {
      console.error('Erro ao buscar produtos:', error)
    } finally {
      setLoading(false)
    }
  }

  fetchProducts()
}, [])

  const filteredProducts = products.filter((product) => {
    if (filter === 'promo') return product.tag === 'Últimas unidades'
    if (filter === 'novo') return product.tag === 'Novo'
    return true
  })

  const filterButtonClass = (value: string) =>
    `px-4 py-2 border font-display uppercase text-xs tracking-widest transition-all duration-300 ${
      filter === value
        ? 'bg-azul-noite text-white border-azul-noite'
        : 'border-cinza-texto/20 text-cinza-texto hover:border-vermelho-urbano hover:text-vermelho-urbano'
    }`

  return (
    <section id="drops" className="py-24 px-6 md:px-12 container mx-auto bg-[#F8F8FC]">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12">
        <div>
          <h2 className="text-4xl md:text-5xl mb-4 font-display font-bold text-cinza-texto">
            Destaques
          </h2>
          <p className="text-cinza-texto/60 uppercase tracking-widest text-xs font-display font-medium">
            Drop 07 / Coleção Sombra
          </p>
        </div>

        <button className="hidden md:flex items-center gap-2 text-vermelho-urbano font-display font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all">
          Ver todos <ArrowRight size={18} />
        </button>
      </div>

      <div className="flex gap-4 mb-10 flex-wrap">
        <button onClick={() => setFilter('all')} className={filterButtonClass('all')}>
          Todos
        </button>
        <button onClick={() => setFilter('novo')} className={filterButtonClass('novo')}>
          Novos
        </button>
        <button onClick={() => setFilter('promo')} className={filterButtonClass('promo')}>
          Promo
        </button>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-white overflow-hidden animate-pulse">
              <div className="aspect-[4/5] bg-zinc-200" />
              <div className="p-4">
                <div className="h-4 bg-zinc-200 mb-3 w-3/4" />
                <div className="h-4 bg-zinc-200 w-1/3" />
              </div>
            </div>
          ))}
        </div>
      ) : filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id ?? index} product={product} />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center border border-dashed border-cinza-texto/20">
          <p className="font-display uppercase tracking-widest text-sm text-cinza-texto/70">
            Nenhum produto encontrado neste filtro.
          </p>
        </div>
      )}
    </section>
  )
}