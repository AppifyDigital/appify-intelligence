import { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Loader from '../components/Loader'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Expertise from '../components/Expertise'
import Products from '../components/Products'
import Awards from '../components/Awards'
import WhyChoose from '../components/WhyChoose'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import { useParticles } from '../hooks/useParticles'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  
  useParticles()

  const handleLoaderComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      <Head>
        <title>AI Development & Automation Specialists | Appify Intelligence Ireland</title>
        <meta name="description" content="Appify Intelligence delivers award-nominated AI, web, and mobile development. Experts in AI automation, workflow, and custom agency solutions." />
        <meta name="keywords" content="AI development, AI automation, AI workflow, app development Ireland, AI web solutions, mobile app AI, agency management tool, AppifyWebX, AppifyX" />
        
        <meta property="og:title" content="AI Development & Automation Specialists | Appify Intelligence" />
        <meta property="og:description" content="Discover Appify Intelligence's award-nominated AI expertise—custom solutions for web, mobile, automation, and agency management across Ireland." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.appifyintelligence.ie" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Development & Automation Specialists | Appify Intelligence" />
        <meta name="twitter:description" content="AI-powered software, web, and mobile solutions. Explore our award-nominated expertise and innovative in-house AI products." />
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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