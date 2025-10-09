const products = [
  {
    name: 'AppifyWebX',
    badge: 'Global Platform',
    description: 'A global, leading-edge web development platform, harnessing AI to deliver high-performance, scalable, secure, production-ready and cost-effective web solutions for clients worldwide, within 24 hours.',
    features: ['AI-Powered', '24-Hour Delivery', 'Production-Ready']
  },
  {
    name: 'AppifyX',
    badge: 'Agency Tool',
    description: 'An innovative end-to-end agency management tool designed for creative, media, development, communications, and marketing agencies. Uses AI intelligence to optimize sales, staff resourcing, allocation, capacity management, and profitability.',
    features: ['Resource Management', 'AI Intelligence', 'Profit Optimization']
  }
]

export default function Products() {
  return (
    <section id="products" className="products">
      <div className="container">
        <h2 className="section-title">In-House AI Product Innovation</h2>
        <p className="section-subtitle">
          Appify Intelligence is at the forefront of AI product development, with two flagship solutions
        </p>
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-header">
                <h3>{product.name}</h3>
                <span className="product-badge">{product.badge}</span>
              </div>
              <p>{product.description}</p>
              <div className="product-features">
                {product.features.map((feature, idx) => (
                  <span key={idx}>{feature}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}