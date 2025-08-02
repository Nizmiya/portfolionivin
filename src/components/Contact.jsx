import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__content">
          <div className="contact__text">
            <h3>Tell me about your next <span className="yellow-text">project</span></h3>
            
            <p className="contact__description">
              I would be delighted to work with you on your project.
            </p>
            
            <p className="contact__description">
              You can contact me via email or WhatsApp using the buttons below. 
              I am excited to hear more about your project and collaborate with you.
            </p>
            
            <div className="contact__buttons">
              <a href="mailto:loganathanniventhan@gmail.com?subject=Photography Project Inquiry&body=Hi Nivin, I would like to discuss a photography project with you." className="contact__btn contact__btn--white">
                <svg className="contact__icon" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
                </svg>
                E-Mail
              </a>
              <a href="https://wa.me/971553979143?text=Hi%20Nivin,%20I%20would%20like%20to%20discuss%20a%20photography%20project%20with%20you." target="_blank" rel="noopener noreferrer" className="contact__btn contact__btn--yellow">
                <svg className="contact__icon" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M17.472,14.382c-0.297-0.149-1.758-0.867-2.03-0.967c-0.273-0.099-0.471-0.148-0.67,0.15c-0.197,0.297-0.767,0.966-0.94,1.164c-0.173,0.199-0.347,0.223-0.644,0.075c-0.297-0.15-1.255-0.463-2.39-1.475c-0.883-0.788-1.48-1.761-1.653-2.059c-0.173-0.297-0.018-0.458,0.13-0.606c0.134-0.133,0.298-0.347,0.446-0.52c0.149-0.174,0.198-0.298,0.298-0.497c0.099-0.198,0.05-0.371-0.025-0.52C10.612,9.421,9.53,7.14,9.305,6.544c-0.218-0.578-0.441-0.5-0.607-0.514C8.558,6.018,8.363,6.002,8.107,6.002c-0.256,0-0.512,0.074-0.669,0.26C7.282,6.547,6.934,7.229,6.934,8.926c0,1.696,1.336,3.343,1.518,3.574c0.184,0.232,2.445,4.028,6.119,5.3c0.855,0.297,1.436,0.406,1.928,0.517c0.713,0.227,1.362,0.195,1.871,0.118c0.571-0.085,1.758-0.719,2.006-1.413c0.248-0.694,0.248-1.289,0.173-1.413C18.473,14.927,18.275,14.927,17.472,14.382z"/>
                  <path fill="currentColor" d="M12.056,2C6.548,2,2.056,6.492,2.056,12c0,2.637,1.05,5.119,2.963,6.975L2,22l3.175-1.006C6.988,22.05,9.462,23,12.056,23c5.508,0,9.944-4.492,9.944-10C22,6.492,17.564,2,12.056,2z M12.056,21c-2.173,0-4.262-0.848-5.811-2.384l-0.326-0.265L3.524,19.07l0.745-2.437L3.93,16.3c-1.612-1.583-2.529-3.681-2.529-5.883c0-4.404,3.582-7.983,7.986-7.983s7.983,3.579,7.983,7.983C20.039,17.418,16.46,21,12.056,21z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        
        <div className="contact__footer">
          <p>&copy; 2025 Nivin Logan Photography. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}

export default Contact 