import { useState, useRef, useEffect } from 'react'
import { BackendURL } from '../config/appData'
import '../styles/ChatBot.css'

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'Hi! How can I help you with A2B Services today?' }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = input
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch(`${BackendURL}/api/chat/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      })

      if (!response.ok) throw new Error('Failed to get response')

      const data = await response.json()
      setMessages(prev => [...prev, { role: 'bot', content: data.response }])
    } catch (error) {
      console.error('Chat error:', error)
      setMessages(prev => [...prev, { role: 'error', content: 'Sorry, I encountered an error. Please try again later.' }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>A2B Assistant</h3>
            <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.role}`}>
                {msg.content}
              </div>
            ))}
            {isLoading && (
              <div className="message bot">
                <span className="typing-indicator">...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <form className="chatbot-input" onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading || !input.trim()}>
              ➤
            </button>
          </form>
        </div>
      )}
      <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
        💬
      </button>
    </div>
  )
}

export default ChatBot

