import logo from './logo.svg';
import './App.css';
import React from 'react';
import videoMetadata from './metadata/videos.json'

function App() {
  const videos = videoMetadata

  return (
    <div className='app'>
      <div className='container'>
        {videos.map((video, index) => {
          return (
            <Video key={index} channel = {video.channel} url={video.url} song={video.song} description={video.description}
            likes={video.likes} messages={video.messages} shares={video.shares} /> 
          )
        })}
      </div>
    </div>
  );
}

export default App;
