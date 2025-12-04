import '../styles/About.css'

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About A2B</h2>
            <p className="about-description">
              We specialize in bringing enterprise-level AI solutions to small businesses.
              Our mission is to democratize access to advanced technology, helping small
              businesses compete and thrive in the digital age.
            </p>
            <p className="about-description">
              With years of experience in AI development and business automation, we understand
              the unique challenges small businesses face. Our solutions are designed to be
              affordable, easy to implement, and immediately impactful.
            </p>
            <div className="about-stats">
              <div className="stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">Businesses Served</div>
              </div>
              <div className="stat">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Uptime</div>
              </div>
              <div className="stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support</div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="about-graphic">
              <div className="graphic-element"></div>
              <div className="graphic-element"></div>
              <div className="graphic-element"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

