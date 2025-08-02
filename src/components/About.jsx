import React from 'react'
import './About.css'
import profileImg from '../assets/profile.jpg'

const About = () => {


  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__header">
          <span className="about__who">Hi! I'm</span>
          <h2 className="about__name">Nivin Logan.</h2>
          <h3 className="about__title">Professional Photo & Videographer</h3>
        </div>

        <div className="about__image">
          <img 
            src={profileImg} 
            alt="Nivin Logan Profile" 
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop&crop=face";
            }}
          />
        </div>

        <div className="about__description">
          <p>
            I specialize in photography and videography for interiors, 
            architecture, real estate, and lifestyle branding. My work 
            captures the essence of spaces, moments, and stories-whether it's 
            a cinematic walkthrough of a villa, a polished company profile video, 
            or clean, compelling shots for social media. I also offer event coverage, 
            construction progress documentation, and product visuals, tailored 
            to suit each client's unique vision and purpose.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About 