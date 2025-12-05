import '../styles/Services.css'
import { services } from '../config/appData'

function Services() {
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

