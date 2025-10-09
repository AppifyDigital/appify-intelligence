'use client'

import { useEffect, useState } from 'react'

export default function Loader({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true)
  const [typeAppify, setTypeAppify] = useState(false)
  const [typeIntelligence, setTypeIntelligence] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => {
      document.querySelector('.ai-text')?.classList.add('fade-out')
      document.querySelector('.expanded-text')?.classList.add('show')
    }, 1000)

    const timer2 = setTimeout(() => {
      setTypeAppify(true)
    }, 1800)

    const timer3 = setTimeout(() => {
      setTypeIntelligence(true)
    }, 3000)

    const timer4 = setTimeout(() => {
      setIsVisible(false)
      onComplete?.()
    }, 5000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [onComplete])

  if (!isVisible) return null

  return (
    <div id="loader" className="loader">
      <div className="loader-content">
        <div className="loader-text">
          <div className="ai-text">AI</div>
          <div className="expanded-text">
            <div className="line-1">
              <span className="letter-a">A</span>
              <span className={`type-appify ${typeAppify ? 'animate' : ''}`}></span>
            </div>
            <div className="line-2">
              <span className="letter-i">I</span>
              <span className={`type-intelligence ${typeIntelligence ? 'animate' : ''}`}></span>
            </div>
          </div>
        </div>
        <div className="loader-bar">
          <div className="loader-progress"></div>
        </div>
      </div>
    </div>
  )
}