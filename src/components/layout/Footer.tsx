import { ArrowRight, Globe, MessageCircle, Send } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contato" className="bg-azul-noite text-white pt-24 pb-12 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2">
            <h2 className="text-4xl font-display font-bold mb-4 tracking-tighter">VESTE.URBAN</h2>
            <p className="text-white/60 text-lg mb-8 max-w-sm">
              Feito pra quem vive a rua. Streetwear autêntico direto de Curitiba para o mundo.
            </p>

            <div className="flex gap-6">
              <a href="#" className="hover:text-vermelho-urbano transition-colors"><Globe /></a>
              <a href="#" className="hover:text-vermelho-urbano transition-colors"><Send /></a>
              <a href="#" className="hover:text-vermelho-urbano transition-colors"><MessageCircle /></a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-sm mb-8 text-vermelho-urbano">
              Navegação
            </h4>
            <ul className="space-y-4 text-white/70 font-display font-medium text-sm">
              <li><a href="#drops" className="hover:text-white transition-colors">Drops</a></li>
              <li><a href="#lookbook" className="hover:text-white transition-colors">Lookbook</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trocas e devoluções</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de privacidade</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-sm mb-8 text-vermelho-urbano">
              Contato
            </h4>
            <ul className="space-y-4 text-white/70 font-display font-medium text-sm">
              <li>contato@veste.urban</li>
              <li>Curitiba, PR — Brasil</li>
              <li className="pt-4">
                <button className="flex items-center gap-2 text-white hover:text-vermelho-urbano transition-colors">
                  Falar no WhatsApp <ArrowRight size={16} />
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 text-[10px] uppercase tracking-[0.3em] font-display font-medium">
          <p>© 2026 VESTE.URBAN. TODOS OS DIREITOS RESERVADOS.</p>
          <p>FEITO COM ALMA EM CURITIBA.</p>
        </div>
      </div>
    </footer>
  )
}