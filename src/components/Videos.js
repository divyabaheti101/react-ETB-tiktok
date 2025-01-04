import './Videos.css';
import React, { useRef, useState } from 'react';
import './VideoFooter'
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({channel, description, likes, shares, messages, url, song}) {
    const [playing, setPlaying] = useState(true)
    const videoRef = useRef(null)
    //useRef doesn't re renders the component if it's poitning value changes, not the case with useState
    //there the whole component is re rendered

    const onVideoPress = () => {
        if(playing) {
            videoRef.current.pause()
            videoRef.current.muted = true
            setPlaying(false)
        } else{
            videoRef.current.play()
            videoRef.current.muted = false
            setPlaying(true)
        }
    }

    return (
        <div className='video'>
            <video className='video_player' loop autoPlay preload='auto' muted
            onClick={onVideoPress} src={url} ref={videoRef}></video>

            <VideoFooter song={song} channel={channel} description={description} />
            <VideoSidebar messages={messages} shares={shares} likes={likes}/>
        
        </div>
    );
}

export default Video;
