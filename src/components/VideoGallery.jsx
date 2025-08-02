import React from 'react'
import './VideoGallery.css'

const VideoGallery = () => {
  const videos = [
    {
      id: 1,
      src: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      title: "Project 1"
    },
    {
      id: 2,
      src: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
      title: "Project 2"
    },
    {
      id: 3,
      src: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4",
      title: "Project 3"
    },
    {
      id: 4,
      src: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_10mb.mp4",
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