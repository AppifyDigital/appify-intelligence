const awards = [
  { icon: '🏆', name: 'Best App' },
  { icon: '🏆', name: 'Best Small Agency' },
  { icon: '🏆', name: 'Best Use of AI' }
]

export default function Awards() {
  return (
    <section className="awards">
      <div className="container">
        <h2 className="section-title">Award-Winning AI Expertise</h2>
        <p className="section-subtitle">
          Our commitment to AI innovation has been recognized at the highest level
        </p>
        <div className="awards-content">
          <p className="awards-description">
            Appify Intelligence is proud to be shortlisted as finalists for multiple Digital Media Awards, including:
          </p>
          <div className="awards-list">
            {awards.map((award, index) => (
              <div key={index} className="award-item">
                <div className="award-icon">{award.icon}</div>
                <span>{award.name}</span>
              </div>
            ))}
          </div>
          <p className="awards-recognition">
            This recognition highlights our demonstrable expertise and leadership in delivering AI-powered solutions that drive real business impact.
          </p>
        </div>
      </div>
    </section>
  )
}