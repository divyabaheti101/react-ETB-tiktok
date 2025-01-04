import { Favorite, Message, MusicNote, Share } from '@mui/icons-material';
import './VideoSidebar.css'
import React from 'react';

function VideoSidebar({messages, shares, likes}){
    return (
        <div className='videoSidebar'>
            <div className='videoSidebar_button'>
                <Favorite fontSize='large' />
                <p>{likes}</p>
            </div>
            <div className='videoSidebar_button'>
                <Message fontSize='large' />
                <p>{messages}</p>
            </div>
            <div className='videoSidebar_button'>
                <Share fontSize='large'/>
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar;