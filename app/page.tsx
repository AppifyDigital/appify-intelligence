'use client'

import { useState } from 'react'
import Header from '@/app/components/Header'
import Loader from '@/app/components/Loader'
import Hero from '@/app/components/Hero'
import Services from '@/app/components/Services'
import Expertise from '@/app/components/Expertise'
import Products from '@/app/components/Products'
import Awards from '@/app/components/Awards'
import WhyChoose from '@/app/components/WhyChoose'
import ContactForm from '@/app/components/ContactForm'
import Footer from '@/app/components/Footer'
import { useParticles } from '@/hooks/useParticles'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useParticles()

  const handleLoaderComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      {/* Animated Background */}
      <div className="animated-bg"></div>

      {/* Particle System */}
      <div className="particles" id="particles"></div>

      {/* Loader */}
      {isLoading && <Loader onComplete={handleLoaderComplete} />}

      {/* Main Content */}
      {!isLoading && (
        <>
          <Header />
          <main className="main">
            <Hero />
            <Services />
            <Expertise />
            <Products />
            <Awards />
            <WhyChoose />
            <ContactForm />
          </main>
          <Footer />
        </>
      )}
    </>
  )
}
