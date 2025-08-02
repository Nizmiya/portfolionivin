import React from 'react'
import './VideoGallery.css'
const video1 = '/videos/video1.mp4'
const video2 = '/videos/video2.mp4'
const video3 = '/videos/video3.mp4'
const video4 = '/videos/video4.mp4'

const VideoGallery = () => {
  const videos = [
    {
      id: 1,
      src: video1,
      title: "Through My Lens"
    },
    {
      id: 2,
      src: video2,
      title: "Visual Stories"
    },
    {
      id: 3,
      src: video3,
      title: "Moments of Calm"
    },
    {
      id: 4,
      src: video4,
      title: "Whispers of the Lens"
    }
  ]

  return (
    <section id="videos" className="video-gallery">
      <div className="container">
        <h2 className="video-gallery__title">Visual Stories</h2>
        
        <div className="video-gallery__content">
          {videos.map((video) => (
            <div key={video.id} className="video-item">
              <div className="video-player">
                <video 
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="video-player__video"
                  onError={(e) => {
                    console.log(`Video ${video.id} error:`, e);
                    console.log(`Failed to load: ${video.src}`);
                  }}
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                <div className="video-info">
                  <h3 className="video-info__title">{video.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VideoGallery 