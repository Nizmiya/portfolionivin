import React from 'react'
import './VideoGallery.css'

const VideoGallery = () => {
  const videos = [
    {
      id: 1,
      src: "https://res.cloudinary.com/drjolim2m/video/upload/v1/video1_jkugp8.mp4",
      title: "Through My Lens"
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/drjolim2m/video/upload/v1/video2_diwfvv.mp4",
      title: "Visual Stories"
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/drjolim2m/video/upload/v1/video3_esjchp.mp4",
      title: "Moments of Calm"
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/drjolim2m/video/upload/v1/video4_dm2kbc.mp4",
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