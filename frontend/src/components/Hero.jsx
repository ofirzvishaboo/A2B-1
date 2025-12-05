import '../styles/Hero.css'
import FloatingCards from './FloatingCards'
// import { floatingCardsReverse } from '../config/appData'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <h1 className="hero-brand-title">A2B Services</h1>
        <div className="hero-content">
          <h2 className="hero-title">
            AI-Powered Solutions for
            <span className="gradient-text"> Small Businesses</span>
          </h2>
          <p className="hero-subtitle">
            Transform your business with intelligent automation. From WhatsApp chatbots
            with inventory management to customer service AI, we help small businesses
            compete with enterprise-level technology.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get Started</a>
            <a href="#services" className="btn btn-secondary">Learn More</a>
          </div>
        </div>
        <div className="hero-image">
          <FloatingCards />
          {/* <FloatingCards cards={floatingCardsReverse} reverse={true} /> */}
        </div>
      </div>
    </section>
  )
}

export default Hero

