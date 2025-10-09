const services = [
  {
    icon: '⚡',
    title: 'AI Chatbots & Agents',
    description: 'Intelligent conversational AI and automated agents for customer service and business processes',
    tech: 'GPT • Claude • Custom Models'
  },
  {
    icon: '🧠',
    title: 'RAG Systems',
    description: 'Retrieval Augmented Generation for enhanced AI responses using your business data',
    tech: 'Vector DB • Embeddings • Semantic Search'
  },
  {
    icon: '✨',
    title: 'Custom AI Dashboards',
    description: 'Tailored analytics and insights dashboards powered by artificial intelligence',
    tech: 'React • D3.js • Real-time Analytics'
  },
  {
    icon: '🎯',
    title: 'Voice AI Solutions',
    description: 'Speech to text, text to speech, and end-to-end voice interaction systems',
    tech: 'Whisper • ElevenLabs • WebRTC'
  },
  {
    icon: '🚀',
    title: 'Content Generation',
    description: 'AI-powered video, audio, images, and copywriting for marketing and operations',
    tech: 'DALL-E • Midjourney • Stable Diffusion'
  },
  {
    icon: '🔮',
    title: 'AI Automation',
    description: 'Workflow optimization and business process automation using AI technology',
    tech: 'Zapier • n8n • Custom Workflows'
  },
  {
    icon: '💡',
    title: 'AI Consulting',
    description: 'Strategic AI adoption consulting and implementation guidance',
    tech: 'Strategy • Training • Implementation'
  },
  {
    icon: '🔐',
    title: 'AI Safety & Security',
    description: 'Responsible AI implementation with focus on safety and ethical considerations',
    tech: 'Compliance • Ethics • Risk Management'
  },
  {
    icon: '📡',
    title: 'Revenue Intelligence',
    description: 'AI-driven insights and analytics to optimize business revenue and growth',
    tech: 'Predictive Analytics • ML Models'
  }
]

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">AI Services We Deliver</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card" data-tilt>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-tech">{service.tech}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}