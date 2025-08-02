import React from 'react'
import HeroVideo from './components/HeroVideo'
import About from './components/About'
import Services from './components/Services'
import VideoGallery from './components/VideoGallery'
import PhotoGallery from './components/PhotoGallery'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <div className="App">
      <HeroVideo />
      <About />
      <Services />
      <VideoGallery />
      <PhotoGallery />
      <Contact />
    </div>
  )
}

export default App 