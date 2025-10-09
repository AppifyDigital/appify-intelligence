const reasons = [
  {
    icon: '⭐',
    title: 'Proven Track Record',
    description: 'Extensive experience across web, mobile, and automation projects'
  },
  {
    icon: '🎨',
    title: 'Deep AI Expertise',
    description: 'Specialized knowledge in AI integration and custom solution development'
  },
  {
    icon: '🌟',
    title: 'Full-Service AI',
    description: 'Complete range of end-to-end AI services and solutions'
  },
  {
    icon: '🌐',
    title: 'Global Trust',
    description: 'Trusted by leading organizations in Ireland and internationally'
  },
  {
    icon: '💎',
    title: 'Award Recognition',
    description: 'Award-nominated for excellence in AI and agency services'
  }
]

import Link from 'next/link'

export default function WhyChoose() {
  return (
    <section className="why-choose">
      <div className="container">
        <h2 className="section-title">Why Choose Appify Intelligence?</h2>
        <div className="why-choose-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="why-choose-item">
              <div className="why-choose-icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
        <div className="case-studies-cta">
          <h3>See Our AI Solutions in Action</h3>
          <p>Explore real-world implementations and the results we&apos;ve delivered for clients across various industries.</p>
          <Link href="/case-studies" className="btn btn-tertiary">View Success Stories</Link>
        </div>
      </div>
    </section>
  )
}