import React, { useEffect, useRef } from 'react'
import './HeroVideo.css'

const HeroVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadstart', () => console.log('Hero video loading started - trying local Heroclip'));
      video.addEventListener('canplay', () => console.log('Hero video can play successfully'));
      video.addEventListener('error', (e) => console.log('Hero video error:', e));
      video.addEventListener('loadeddata', () => console.log('Hero video data loaded successfully'));

      // Force play after a short delay
      setTimeout(() => {
        video.play().catch(e => console.log('Hero video play error:', e));
      }, 100);
    }
  }, []);

  return (
    <section id="hero" className="hero-video">
      <video
        ref={videoRef}
        className="hero-video__background"
        autoPlay
        muted
        loop
        playsInline
        onError={(e) => {
          console.log('Video error:', e);
          // Keep video element visible but try fallback sources
          console.log('Attempting to load fallback video sources');
        }}
      >
        <source src="/videos/Heroclip.mp4" type="video/mp4" />
        <source src="/videos/Heroclip.mov" type="video/quicktime" />

        Your browser does not support the video tag.
      </video>

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