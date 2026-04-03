import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import FeaturedProducts from './components/sections/FeaturedProducts'
import CountdownSection from './components/sections/CountdownSection'
import LookbookSection from './components/sections/LookbookSection'
import AboutSection from './components/sections/AboutSection'
import TestimonialSection from './components/sections/TestimonialSection'

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F8FC] text-cinza-texto">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProducts />
        <CountdownSection />
        <LookbookSection />
        <AboutSection />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  )
}