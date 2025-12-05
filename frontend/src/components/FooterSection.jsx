import '../styles/FooterSection.css'

function FooterSection({ title, links = [] }) {
  if (!title || !links || links.length === 0) {
    return null
  }

  return (
    <div className="footer-section">
      <h4>{title}</h4>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterSection

