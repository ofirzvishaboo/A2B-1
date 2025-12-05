import '../styles/ContactInfo.css'

function ContactInfo({ contactItems = [] }) {
  if (!contactItems || contactItems.length === 0) {
    return null
  }

  return (
    <div className="contact-info">
      <h3>Contact Information</h3>
      {contactItems.map((item, index) => (
        <div key={index} className="contact-item">
          <span className="contact-icon">{item.icon}</span>
          <div>
            <h4>{item.label}</h4>
            <p dangerouslySetInnerHTML={{ __html: item.value }}></p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ContactInfo

