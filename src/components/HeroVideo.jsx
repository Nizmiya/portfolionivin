import React from 'react'
import './HeroVideo.css'

const HeroVideo = () => {
  return (
    <section id="hero" className="hero-video">
      {/* YouTube Video Background */}
      <div className="hero-video__background">
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
          title="Hero Background Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100vw',
            height: '100vh',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />
      </div>

      <div className="hero-video__overlay">
        <div className="hero-video__content">
          <h2 className="hero-video__name">Nivin Logan</h2>
          <h1 className="hero-video__title">Let's Create Together</h1>
          <p className="hero-video__tagline">Photography & Videography</p>
          <button
            className="hero-video__cta"
            onClick={() => {
              const aboutSection = document.getElementById('about');
              if (aboutSection) {
                const elementPosition = aboutSection.offsetTop;
                window.scrollTo({
                  top: elementPosition,
                  behavior: 'smooth'
                });
              }
            }}
          >
            Explore
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroVideo 