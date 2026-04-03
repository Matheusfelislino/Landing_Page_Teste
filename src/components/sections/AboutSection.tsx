export default function AboutSection() {
  return (
    <section id="sobre" className="bg-lilas-claro py-24 px-6 md:px-12 overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <h2 className="text-5xl md:text-7xl mb-8 leading-tight font-display font-bold text-cinza-texto">
            Feito em Curitiba. <br /> Usado em todo lugar.
          </h2>

          <p className="text-lg text-cinza-texto mb-12 leading-relaxed">
            A VESTE.URBAN nasceu da rua em 2021. Cada peça é pensada por quem vive a cultura urbana,
            unindo o conforto do oversized com a exclusividade de drops limitados. Não somos apenas uma
            marca, somos o reflexo do asfalto, do skate e da arte que pulsa em cada esquina.
          </p>

          <div className="grid grid-cols-2 gap-8">
            {[
              { label: 'Anos de mercado', value: '3' },
              { label: 'Drops lançados', value: '12' },
              { label: 'Seguidores', value: '8K' },
              { label: 'Produção', value: '100% Nacional' },
            ].map((stat) => (
              <div key={stat.label} className="border-l-4 border-vermelho-urbano pl-6">
                <span className="block text-3xl font-display font-bold text-azul-noite mb-1">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-widest text-cinza-texto/60 font-display font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 relative">
          <img
            src="src/assests/images/photo-1552664730-d307ca884978.jpeg"
            alt="Bastidores"
            className="relative z-10 w-full h-[600px] object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  )
}