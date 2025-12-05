import FooterSection from './FooterSection'
import { footerData } from '../config/appData'
import '../styles/Footer.css'

function Footer() {
  const { company, sections, copyright } = footerData

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">{company.logo}</h3>
            <p>{company.description}</p>
          </div>
          {sections.map((section, index) => (
            <FooterSection
              key={index}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>
        <div className="footer-bottom">
          <p>{copyright.text}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

