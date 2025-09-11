const expertiseItems = [
  {
    title: 'Training Services',
    description: 'AI-driven apps for organizations like Genio, streamlining learning and coaching processes.'
  },
  {
    title: 'Recruitment',
    description: 'Intelligent automation for platforms such as Buildout, optimizing candidate sourcing, matching, and onboarding.'
  },
  {
    title: 'Mental Healthcare',
    description: 'Secure, user-centric AI solutions for clients like RecoverMe, supporting vulnerable individuals with global leading support services.'
  }
]

export default function Expertise() {
  return (
    <section id="expertise" className="expertise">
      <div className="container">
        <h2 className="section-title">AI Expertise Across Industries</h2>
        <p className="section-subtitle">
          We implement advanced AI tooling and automation in client projects across a range of sectors
        </p>
        <div className="expertise-grid">
          {expertiseItems.map((item, index) => (
            <div key={index} className="expertise-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}