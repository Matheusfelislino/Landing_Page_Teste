import { useEffect, useState } from 'react'
import { Mail } from 'lucide-react'

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 30)

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = Math.max(targetDate.getTime() - now, 0)

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-azul-noite py-24 px-6 md:px-12 text-white text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none flex items-center justify-center">
        <span className="text-[20vw] font-display font-bold leading-none select-none">NEXT</span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl mb-12 uppercase tracking-tighter font-display font-bold">
          Próximo drop em:
        </h2>

        <div className="flex justify-center gap-4 md:gap-12 mb-16 flex-wrap">
          {[
            { label: 'Dias', value: timeLeft.days },
            { label: 'Horas', value: timeLeft.hours },
            { label: 'Minutos', value: timeLeft.minutes },
            { label: 'Segundos', value: timeLeft.seconds },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center min-w-[70px]">
              <span className="text-5xl md:text-8xl font-display font-bold mb-2">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/40 font-display font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-white/5 p-8 md:p-12 border border-white/10">
          <h3 className="text-xl md:text-2xl mb-2 font-display font-bold">Drop 08 — Coleção Névoa</h3>
          <p className="text-white/70 mb-8 font-sans">
            Inscreva-se para ser avisado primeiro e garantir acesso antecipado.
          </p>

          <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="SEU MELHOR E-MAIL"
              className="flex-1 bg-transparent border border-white/20 px-6 py-4 outline-none focus:border-vermelho-urbano transition-colors font-display text-sm text-white placeholder:text-white/40"
            />
            <button className="bg-vermelho-urbano hover:bg-opacity-90 px-8 py-4 font-display font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2">
              Quero saber primeiro <Mail size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}