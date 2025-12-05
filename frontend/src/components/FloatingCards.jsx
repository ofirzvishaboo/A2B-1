import '../styles/FloatingCards.css'
import { floatingCards } from '../config/appData'

function FloatingCards({ cards = [], reverse = false }) {
  const displayCards = cards.length > 0 ? cards : floatingCards

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

