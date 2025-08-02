import React, { useState, useEffect } from 'react'
import './PhotoGallery.css'

// Import all 30 images
import picture1 from '../assets/picture1.jpg'
import picture2 from '../assets/picture2.jpg'
import picture3 from '../assets/picture3.jpg'
import picture4 from '../assets/picture4.jpg'
import picture5 from '../assets/picture5.jpg'
import picture6 from '../assets/picture6.jpg'
import picture7 from '../assets/picture7.jpg'
import picture8 from '../assets/picture8.jpg'
import picture9 from '../assets/picture9.jpg'
import picture10 from '../assets/picture10.jpg'
import picture11 from '../assets/picture11.jpg'
import picture12 from '../assets/picture12.jpg'
import picture13 from '../assets/picture13.jpg'
import picture14 from '../assets/picture14.jpg'
import picture15 from '../assets/picture15.jpg'
import picture16 from '../assets/picture16.jpg'
import picture17 from '../assets/picture17.jpg'
import picture18 from '../assets/picture18.jpg'
import picture19 from '../assets/picture19.jpg'
import picture20 from '../assets/picture20.jpg'
import picture21 from '../assets/picture21.jpg'
import picture22 from '../assets/picture22.jpg'
import picture23 from '../assets/picture23.jpg'
import picture24 from '../assets/picture24.jpg'
import picture25 from '../assets/picture25.jpg'
import picture26 from '../assets/picture26.jpg'
import picture27 from '../assets/picture27.jpg'
import picture28 from '../assets/picture28.jpg'
import picture29 from '../assets/picture29.jpg'
import picture30 from '../assets/picture30.jpg'

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const photos = [
    { id: 1, src: picture1 },
    { id: 2, src: picture2 },
    { id: 3, src: picture3 },
    { id: 4, src: picture4 },
    { id: 5, src: picture5 },
    { id: 6, src: picture6 },
    { id: 7, src: picture7 },
    { id: 8, src: picture8 },
    { id: 9, src: picture9 },
    { id: 10, src: picture10 },
    { id: 11, src: picture11 },
    { id: 12, src: picture12 },
    { id: 13, src: picture13 },
    { id: 14, src: picture14 },
    { id: 15, src: picture15 },
    { id: 16, src: picture16 },
    { id: 17, src: picture17 },
    { id: 18, src: picture18 },
    { id: 19, src: picture19 },
    { id: 20, src: picture20 },
    { id: 21, src: picture21 },
    { id: 22, src: picture22 },
    { id: 23, src: picture23 },
    { id: 24, src: picture24 },
    { id: 25, src: picture25 },
    { id: 26, src: picture26 },
    { id: 27, src: picture27 },
    { id: 28, src: picture28 },
    { id: 29, src: picture29 },
    { id: 30, src: picture30 }
  ]



  const openModal = (photo) => {
    setSelectedPhoto(photo)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden' // Prevent background scrolling
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedPhoto(null)
    document.body.style.overflow = 'auto' // Restore scrolling
  }

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isModalOpen])

  return (
    <section id="photos" className="photo-gallery">
      <div className="container">
        <h2 className="photo-gallery__title">Frames & Focus</h2>
        
        <div className="photo-gallery__grid">
          {photos.map((photo) => (
            <div 
              key={photo.id} 
              className="photo-card"
              onClick={() => openModal(photo)}
            >
              <div className="photo-card__image-container">
                <img 
                  src={photo.src} 
                  alt={`Photo ${photo.id}`}
                  className="photo-card__image"
                  loading="eager"
                  decoding="sync"
                  fetchPriority="high"
                  preload="true"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedPhoto && (
        <div className="photo-modal" onClick={closeModal}>
          <div className="photo-modal__content" onClick={(e) => e.stopPropagation()}>
            <button className="photo-modal__close" onClick={closeModal}>
              ×
            </button>
            <img 
              src={selectedPhoto.src} 
              alt={`Photo ${selectedPhoto.id}`}
              className="photo-modal__image"
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default PhotoGallery 