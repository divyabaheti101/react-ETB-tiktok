import './Videos.css';
import React, { useRef, useState } from 'react';

function Video() {
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
        
        </div>
    );
}

export default Video;
