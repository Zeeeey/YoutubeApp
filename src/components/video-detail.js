import React from 'react';

const VideoDetail = ({ video }) => {
    if (!video) {
        return <h3>Loading...</h3>
    }

    const videoId = video.id.videoId
    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
        <div className="col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe title="Title" src={url} />
            </div>

            <div className="mt-3">
                {video.snippet.title}
                <small>{video.snippet.description}</small>
            </div>
        </div>
    );
}

export default VideoDetail;