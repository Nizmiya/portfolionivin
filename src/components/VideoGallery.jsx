import React from 'react'
import './VideoGallery.css'

const VideoGallery = () => {
  const videos = [
    {
      id: 1,
      youtubeId: "dQw4w9WgXcQ",
      title: "Project 1"
    },
    {
      id: 2,
      youtubeId: "jNQXAC9IVRw",
      title: "Project 2"
    },
    {
      id: 3,
      youtubeId: "kJQP7kiw5Fk",
      title: "Project 3"
    },
    {
      id: 4,
      youtubeId: "9bZkp7q19f0",
      title: "Project 4"
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
                <iframe
                  className="video-player__video"
                  src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=0&mute=1&loop=1&playlist=${video.youtubeId}&controls=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                
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