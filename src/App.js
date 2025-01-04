import './App.css';
import React from 'react';
import videoMetadata from './metadata/videos.json'
import Video from './components/videos';

function App() {
  const videos = videoMetadata

  return (
    <div className='app'>
      <div className='container'>
        {videos.map((video, index) => {
          return (
            <Video channel = {video.channel} url={video.url} song={video.song} description={video.description}
            likes={video.likes} messages={video.messages} shares={video.shares} /> 
          )
        })}
      </div>
    </div>
  );
}

export default App;
