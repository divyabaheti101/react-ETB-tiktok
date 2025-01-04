import { Favorite, FavoriteBorder, Message, MusicNote, Share, TrendingUp } from '@mui/icons-material';
import './VideoSidebar.css'
import React, { useState } from 'react';

function VideoSidebar({messages, shares, likes}){
    const [liked, setLiked] = useState(false)
    return (
        <div className='videoSidebar'>
            <div className='videoSidebar_button'>
                {liked ? 
                    (<Favorite fontSize='large' onClick={(e) => setLiked(false)} />)
                : (<FavoriteBorder fontSize='large' onClick={(e) => setLiked(TrendingUp)} />)    
            }
                
                <p>{liked ? `${likes+1}` : `${likes}`}</p>
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