import { useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParticles } from '../hooks/useParticles'

const caseStudies = [
  {
    id: 1,
    title: 'AI-Powered Mental Health Platform',
    client: 'RecoverMe',
    industry: 'Healthcare',
    duration: '8 months',
    team: '6 specialists',
    challenge: 'Creating a secure, AI-driven platform to provide 24/7 mental health support with personalized interventions and crisis detection.',
    solution: 'Developed an intelligent chatbot using GPT-4 with custom fine-tuning on mental health data, integrated with real-time sentiment analysis and automated crisis escalation protocols.',
    results: {
      users: '15,000+ active users',
      engagement: '87% daily engagement rate',
      response: '3x faster response times',
      satisfaction: '94% user satisfaction'
    },
    technologies: ['GPT-4', 'Python', 'TensorFlow', 'React Native', 'Node.js', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    color: 'from-blue-500 to-purple-600',
    metrics: [
      { label: 'Crisis Detection Accuracy', value: '96%', icon: '🎯' },
      { label: 'Response Time', value: '<30s', icon: '⚡' },
      { label: 'User Retention', value: '78%', icon: '📈' },
      { label: 'Sessions per User', value: '4.2/day', icon: '🔄' }
    ]
  },
  {
    id: 2,
    title: 'Intelligent Recruitment Automation',
    client: 'Buildout',
    industry: 'Recruitment',
    duration: '6 months',
    team: '4 specialists',
    challenge: 'Streamlining the recruitment process with AI-powered candidate screening, matching, and automated interview scheduling.',
    solution: 'Built a comprehensive AI system featuring resume parsing with NLP, candidate-job matching algorithms, and automated video interview analysis with facial recognition and speech pattern evaluation.',
    results: {
      efficiency: '70% faster hiring process',
      accuracy: '85% better candidate matching',
      cost: '60% reduction in screening costs',
      quality: '40% improvement in hire quality'
    },
    technologies: ['OpenAI API', 'spaCy', 'Computer Vision', 'Vue.js', 'Express.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    color: 'from-green-500 to-teal-600',
    metrics: [
      { label: 'Screening Efficiency', value: '70%↑', icon: '🚀' },
      { label: 'Match Accuracy', value: '85%', icon: '🎯' },
      { label: 'Cost Reduction', value: '60%↓', icon: '💰' },
      { label: 'Time to Hire', value: '12 days', icon: '⏱️' }
    ]
  },
  {
    id: 3,
    title: 'Smart Learning Management System',
    client: 'Genio',
    industry: 'Education',
    duration: '10 months',
    team: '8 specialists',
    challenge: 'Creating an adaptive learning platform that personalizes educational content and tracks learning progress using AI-driven insights.',
    solution: 'Developed an intelligent LMS with adaptive algorithms, real-time progress tracking, personalized content recommendations, and automated assessment generation.',
    results: {
      improvement: '45% better learning outcomes',
      engagement: '92% student engagement',
      completion: '68% course completion rate',
      efficiency: '50% reduction in admin time'
    },
    technologies: ['TensorFlow', 'Scikit-learn', 'React', 'Django', 'Redis', 'AWS'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    color: 'from-orange-500 to-red-600',
    metrics: [
      { label: 'Learning Improvement', value: '45%↑', icon: '📚' },
      { label: 'Engagement Rate', value: '92%', icon: '🎓' },
      { label: 'Completion Rate', value: '68%', icon: '✅' },
      { label: 'Admin Efficiency', value: '50%↑', icon: '⚙️' }
    ]
  },
  {
    id: 4,
    title: 'Revenue Intelligence Platform',
    client: 'Enterprise SaaS',
    industry: 'Sales & Marketing',
    duration: '12 months',
    team: '10 specialists',
    challenge: 'Building a predictive analytics platform to optimize sales performance and revenue forecasting using machine learning.',
    solution: 'Created an advanced ML platform with predictive modeling, automated lead scoring, revenue forecasting, and real-time dashboard analytics.',
    results: {
      revenue: '35% increase in revenue',
      forecasting: '91% accuracy in predictions',
      conversion: '28% better conversion rates',
      productivity: '55% sales team productivity gain'
    },
    technologies: ['Python', 'Apache Spark', 'Tableau', 'Angular', 'Microservices', 'Docker'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    color: 'from-purple-500 to-pink-600',
    metrics: [
      { label: 'Revenue Increase', value: '35%↑', icon: '💎' },
      { label: 'Forecast Accuracy', value: '91%', icon: '🔮' },
      { label: 'Conversion Rate', value: '28%↑', icon: '🎯' },
      { label: 'Sales Productivity', value: '55%↑', icon: '📈' }
    ]
  }
]

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState(null)
  
  useParticles()

  const openModal = (caseStudy) => {
    setSelectedCase(caseStudy)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedCase(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <>
      <Head>
        <title>Case Studies - AI Success Stories | Appify Intelligence</title>
        <meta name="description" content="Explore our AI project case studies. Real-world implementations of intelligent solutions across healthcare, recruitment, education, and enterprise sectors." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Animated Background */}
      <div className="animated-bg"></div>
      <div className="particles" id="particles"></div>

      <Header />

      <main className="case-studies-page">
        {/* Hero Section */}
        <section className="case-studies-hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">AI Success Stories</h1>
              <p className="hero-subtitle">
                Real-world implementations that transformed businesses through intelligent automation
              </p>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">AI Projects</span>
                </div>
                <div className="stat">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Success Rate</span>
                </div>
                <div className="stat">
                  <span className="stat-number">€2.5M+</span>
                  <span className="stat-label">Value Delivered</span>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Case Studies Grid */}
        <section className="case-studies-grid">
          <div className="container">
            <div className="grid">
              {caseStudies.map((study) => (
                <div key={study.id} className="case-card" onClick={() => openModal(study)}>
                  <div className="card-image-container">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="card-image"
                    />
                    <div className={`card-gradient bg-gradient-to-br ${study.color}`}></div>
                  </div>
                  <div className="card-content">
                    <div className="card-header">
                      <span className="industry-tag">{study.industry}</span>
                      <h3 className="case-title">{study.title}</h3>
                      <p className="client-name">{study.client}</p>
                    </div>
                    
                    <div className="metrics-preview">
                      {study.metrics.slice(0, 2).map((metric, index) => (
                        <div key={index} className="metric">
                          <span className="metric-icon">{metric.icon}</span>
                          <div>
                            <span className="metric-value">{metric.value}</span>
                            <span className="metric-label">{metric.label}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="tech-stack">
                      {study.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                      {study.technologies.length > 3 && (
                        <span className="tech-more">+{study.technologies.length - 3} more</span>
                      )}
                    </div>

                    <div className="card-footer">
                      <div className="project-info">
                        <span>{study.duration} • {study.team}</span>
                      </div>
                      <button className="view-details">
                        View Details →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal */}
        {selectedCase && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>×</button>
              
              <div className="modal-header">
                <div className="modal-image-container">
                  <img 
                    src={selectedCase.image} 
                    alt={selectedCase.title}
                    className="modal-image"
                  />
                  <div className={`modal-gradient bg-gradient-to-br ${selectedCase.color}`}></div>
                </div>
                <div className="modal-title-section">
                  <span className="modal-industry">{selectedCase.industry}</span>
                  <h2 className="modal-title">{selectedCase.title}</h2>
                  <p className="modal-client">{selectedCase.client}</p>
                  <div className="project-meta">
                    <span>📅 {selectedCase.duration}</span>
                    <span>👥 {selectedCase.team}</span>
                  </div>
                </div>
              </div>

              <div className="modal-body">
                <div className="challenge-solution">
                  <div className="section">
                    <h3>🎯 Challenge</h3>
                    <p>{selectedCase.challenge}</p>
                  </div>
                  <div className="section">
                    <h3>💡 Solution</h3>
                    <p>{selectedCase.solution}</p>
                  </div>
                </div>

                <div className="results-metrics">
                  <h3>📊 Results & Impact</h3>
                  <div className="metrics-grid">
                    {selectedCase.metrics.map((metric, index) => (
                      <div key={index} className="result-metric">
                        <span className="result-icon">{metric.icon}</span>
                        <div className="result-data">
                          <span className="result-value">{metric.value}</span>
                          <span className="result-label">{metric.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="technologies-section">
                  <h3>🛠️ Technologies Used</h3>
                  <div className="tech-grid">
                    {selectedCase.technologies.map((tech, index) => (
                      <span key={index} className="tech-pill">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  )
}