import React, { useState, useEffect } from 'react'
import './PhotoGallery.css'

// Image paths for public folder
const picture1 = '/images/picture1.jpg'
const picture2 = '/images/picture2.jpg'
const picture3 = '/images/picture3.jpg'
const picture4 = '/images/picture4.jpg'
const picture5 = '/images/picture5.jpg'
const picture6 = '/images/picture6.jpg'
const picture7 = '/images/picture7.jpg'
const picture8 = '/images/picture8.jpg'
const picture9 = '/images/picture9.jpg'
const picture10 = '/images/picture10.jpg'
const picture11 = '/images/picture11.jpg'
const picture12 = '/images/picture12.jpg'
const picture13 = '/images/picture13.jpg'
const picture14 = '/images/picture14.jpg'
const picture15 = '/images/picture15.jpg'
const picture16 = '/images/picture16.jpg'
const picture17 = '/images/picture17.jpg'
const picture18 = '/images/picture18.jpg'
const picture19 = '/images/picture19.jpg'
const picture20 = '/images/picture20.jpg'
const picture21 = '/images/picture21.jpg'
const picture22 = '/images/picture22.jpg'
const picture23 = '/images/picture23.jpg'
const picture24 = '/images/picture24.jpg'
const picture25 = '/images/picture25.jpg'
const picture26 = '/images/picture26.jpg'
const picture27 = '/images/picture27.jpg'
const picture28 = '/images/picture28.jpg'
const picture29 = '/images/picture29.jpg'
const picture30 = '/images/picture30.jpg'

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