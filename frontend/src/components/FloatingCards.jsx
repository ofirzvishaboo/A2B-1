import '../styles/FloatingCards.css'

function FloatingCards({ cards = [], reverse = false }) {
  // Default cards if none provided
  const defaultCards = [
    { icon: '🤖', text: 'AI Chatbot' },
    { icon: '📦', text: 'Inventory' },
    { icon: '💬', text: 'WhatsApp' }
  ]

  const displayCards = cards.length > 0 ? cards : defaultCards

  return (
    <div className={`hero-graphic ${reverse ? 'reverse-animation' : ''}`}>
      {displayCards.map((card, index) => (
        <div key={index} className={`floating-card card-${index + 1}`}>
          <span>{card.icon}</span>
          <p>{card.text}</p>
        </div>
      ))}
    </div>
  )
}

export default FloatingCards

