import '../styles/Services.css'

function Services() {
  const services = [
    {
      title: 'WhatsApp Business Integration',
      description: 'Connect your business with customers on WhatsApp. Our AI chatbot handles inquiries, orders, and support seamlessly.',
      features: [
        '24/7 automated customer support',
        'Order processing and tracking',
        'Inventory queries',
        'Multi-language support'
      ],
      price: 'Starting at $99/mo'
    },
    {
      title: 'Inventory Management System',
      description: 'Real-time inventory tracking with automated stock updates. Integrated with your sales channels for accurate availability.',
      features: [
        'Real-time stock tracking',
        'Low stock alerts',
        'Multi-channel sync',
        'Automated reordering'
      ],
      price: 'Starting at $149/mo'
    },
    {
      title: 'Complete AI Solution',
      description: 'Full package including chatbot, inventory management, analytics, and custom integrations tailored to your business.',
      features: [
        'All features included',
        'Custom integrations',
        'Dedicated support',
        'Monthly optimization'
      ],
      price: 'Custom pricing'
    }
  ]

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Choose the perfect solution for your business needs
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-header">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="service-feature">
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="service-footer">
                <div className="service-price">{service.price}</div>
                <a href="#contact" className="btn btn-outline">Get Started</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

