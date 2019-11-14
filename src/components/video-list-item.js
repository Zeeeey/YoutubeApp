import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li onClick={ () => onVideoSelect(video)} className="list-group-item">
            <div>
                <div>
                    <img src={imageUrl} alt="" />
                </div>
                <div>
                    {video.snippet.title}
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;