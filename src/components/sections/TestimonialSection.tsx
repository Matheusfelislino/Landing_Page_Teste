import { Star } from 'lucide-react'
import { TESTIMONIALS } from '../../data/testimonials'

export default function TestimonialSection() {
  return (
    <section className="py-24 px-6 md:px-12 container mx-auto bg-[#F8F8FC]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {TESTIMONIALS.map((testimonial, index) => (
          <div key={index} className="flex flex-col items-center text-center p-8">
            <div className="flex gap-1 mb-6 text-vermelho-urbano">
              {[...Array(5)].map((_, starIndex) => (
                <Star key={starIndex} size={16} fill="currentColor" />
              ))}
            </div>

            <p className="text-xl font-sans italic mb-6 text-cinza-texto">
              "{testimonial.text}"
            </p>

            <span className="font-display font-bold text-azul-noite uppercase tracking-widest text-sm">
              {testimonial.author}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}