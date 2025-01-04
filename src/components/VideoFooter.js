import { MusicNote } from '@mui/icons-material';
import './VideoFooter.css'
import React from 'react';

function VideoFooter({channel, description, song}){
    return (
        <div className='videoFooter'>
            <div className='videoFooter_text'>
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className='videoFooter_ticker'>
                    <MusicNote className='videoFooter_icon'/>
                    <p>{song}</p>
                </div>
                
                <img className='videoFooter_record' src='https://static.thenounproject.com/png/934821-200.png'
                alt='' />
            </div>
            
        </div>
    )
}

export default VideoFooter;