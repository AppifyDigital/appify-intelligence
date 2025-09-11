import { useEffect } from 'react'

export const useParticles = () => {
  useEffect(() => {
    const createParticle = () => {
      const particles = document.getElementById('particles')
      if (!particles) return

      const particle = document.createElement('div')
      particle.className = 'particle'
      
      particle.style.left = Math.random() * 100 + '%'
      particle.style.animationDelay = Math.random() * 2 + 's'
      particle.style.animationDuration = (Math.random() * 3 + 3) + 's'
      
      particles.appendChild(particle)
      
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle)
        }
      }, 6000)
    }

    const interval = setInterval(createParticle, 500)
    
    return () => clearInterval(interval)
  }, [])
}