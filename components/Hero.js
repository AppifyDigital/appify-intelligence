import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">AI Development & Automation Specialists</h1>
          <p className="hero-subtitle">
            Advanced AI Solutions for Web, Mobile & Business Automation
          </p>
          <p className="hero-description">
            At Appify Intelligence, we are Ireland's specialists in full stack AI development—delivering world-class software, web, and mobile solutions, as well as advanced AI workflow and process automation for ambitious organizations.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">Start Your AI Project</a>
            <a href="#services" className="btn btn-secondary">Explore Services</a>
            <Link href="/case-studies" className="btn btn-tertiary">View Case Studies</Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="ai-animation">
            <div className="neural-network">
              <div className="node" style={{'--z-offset': '50px'}}></div>
              <div className="node" style={{'--z-offset': '-30px'}}></div>
              <div className="node" style={{'--z-offset': '20px'}}></div>
              <div className="node" style={{'--z-offset': '-50px'}}></div>
              <div className="node" style={{'--z-offset': '0px'}}></div>
            </div>
            <div className="floating-elements">
              <div className="floating-element">AI</div>
              <div className="floating-element">ML</div>
              <div className="floating-element">NLP</div>
              <div className="floating-element">GPT</div>
              <div className="floating-element">RAG</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}