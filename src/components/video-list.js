import React from 'react';
import VideoListItem from './video-list-item';

const VideoList = ({ videos, onVideoSelect }) => {
    const videoItems = videos.map(video => 
        <VideoListItem 
            key={ video.etag } 
            video={ video } 
            onVideoSelect={ onVideoSelect }
        /> 
    )

    return ( 
        <ul className="col-md-4 list-group">
            {/* {videos.length} */}
            {videoItems}
        </ul>
     );
}
 
export default VideoList;