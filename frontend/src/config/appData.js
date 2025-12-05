// Shared application data configuration

export const BackendURL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

export const features = [
  {
    icon: '💬',
    title: 'WhatsApp AI Chatbot',
    description: 'Intelligent chatbots that handle customer inquiries 24/7, process orders, and provide instant support through WhatsApp.',
    highlight: true
  },
  {
    icon: '📦',
    title: 'Inventory Management',
    description: 'Real-time inventory tracking integrated with your chatbot. Customers can check stock availability and place orders automatically.',
    highlight: true
  },
  {
    icon: '🤖',
    title: 'Smart Automation',
    description: 'Automate repetitive tasks, order processing, and customer interactions to save time and reduce costs.',
    highlight: false
  },
  {
    icon: '📊',
    title: 'Analytics Dashboard',
    description: 'Track sales, customer interactions, and inventory levels with comprehensive analytics and insights.',
    highlight: false
  },
  {
    icon: '🔔',
    title: 'Order Notifications',
    description: 'Automated order confirmations, shipping updates, and delivery notifications via WhatsApp.',
    highlight: false
  },
  {
    icon: '🔒',
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with 99.9% uptime guarantee. Your data is safe and your business never stops.',
    highlight: false
  }
]

export const services = [
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

// Floating cards based on first 3 features
export const floatingCards = [
  { icon: '💬', text: 'WhatsApp AI Chatbot' },
  { icon: '📦', text: 'Inventory Management' },
  { icon: '🤖', text: 'Smart Automation' }
]

// Footer data
export const footerData = {
  company: {
    logo: 'A2B',
    description: 'AI-powered solutions for small businesses. Transform your operations with intelligent automation.'
  },
  sections: [
    {
      title: 'Services',
      links: [
        ...services.map((service) => ({ text: service.title, href: '#services' })),
      ]
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '#about' },
        { text: 'Contact', href: '#contact' },
        { text: 'Features', href: '#features' }
      ]
    },
    {
      title: 'Connect',
      links: [
        { text: 'Email', href: 'mailto:info@a2b.ai' },
        { text: 'LinkedIn', href: '#' },
        { text: 'Twitter', href: '#' }
      ]
    }
  ],
  copyright: {
    text: '© 2024 A2B. All rights reserved.'
  }
}

