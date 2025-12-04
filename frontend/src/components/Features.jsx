import '../styles/Features.css'

function Features() {
  const features = [
    {
      icon: '💬',
      title: 'WhatsApp AI Chatbot',
      description: 'Intelligent chatbots that handle customer inquiries 24/7, process orders, and provide instant support through WhatsApp.',
      highlight: true
    },
    {
      icon: '📦',
      title: 'Inventory Management',
      description: 'Real-time inventory tracking integrated with your chatbot. Customers can check stock availability and place orders automatically.',
      highlight: true
    },
    {
      icon: '🤖',
      title: 'Smart Automation',
      description: 'Automate repetitive tasks, order processing, and customer interactions to save time and reduce costs.',
      highlight: false
    },
    {
      icon: '📊',
      title: 'Analytics Dashboard',
      description: 'Track sales, customer interactions, and inventory levels with comprehensive analytics and insights.',
      highlight: false
    },
    {
      icon: '🔔',
      title: 'Order Notifications',
      description: 'Automated order confirmations, shipping updates, and delivery notifications via WhatsApp.',
      highlight: false
    },
    {
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee. Your data is safe and your business never stops.',
      highlight: false
    }
  ]

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Powerful Features</h2>
          <p className="section-subtitle">
            Everything you need to automate and grow your small business
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card ${feature.highlight ? 'feature-highlight' : ''}`}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

