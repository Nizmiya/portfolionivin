import React from 'react'
import './Services.css'

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Interior & Architecture Visual Creator",
      description: "Professional interior and architectural videography services for stunning visual content.",
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "Real Estate Visual Creator",
      description: "Premium real estate visual content to showcase properties in their best light.",
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z"/>
          <path d="M7,7H17V9H7V7M7,11H17V13H7V11M7,15H14V17H7V15Z"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "Lifestyle & Branding Visual Creator",
      description: "Creative lifestyle and branding videos that tell compelling stories.",
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M4,4H7L8,6H18L16,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M4,6V18H20V6H4M7,8A2,2 0 0,1 9,10A2,2 0 0,1 7,12A2,2 0 0,1 5,10A2,2 0 0,1 7,8M12,8H17V10H12V8M12,12H17V14H12V12M7,14A2,2 0 0,1 9,16A2,2 0 0,1 7,18A2,2 0 0,1 5,16A2,2 0 0,1 7,14Z"/>
        </svg>
      )
    },
    {
      id: 4,
      title: "Event Visual Creator",
      description: "Dynamic event coverage and documentation for memorable occasions.",
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z"/>
          <path d="M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10Z"/>
        </svg>
      )
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services__grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-card__icon">
                {service.icon}
              </div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services 