import React, { useEffect, useState } from 'react';
import VideoPlayer from './videoplayer';

const RTSP: React.FC = () => {
    const [url, setUrl] = useState<string>('');
    const [streamUrl, setStreamUrl] = useState<string>('');
    const [videoSrc, setVideoSrc] = useState('');
    const handleStream = () => {
        if (url) {
            setStreamUrl(`http://localhost:3001/stream?url=${encodeURIComponent(url)}`);
        }
    };
    useEffect(() => {
        // Publicly available sample MP4 video URL
        const videoUrl = 'https://www.w3schools.com/html/mov_bbb.mp4';
        setVideoSrc(videoUrl);
    }, []);

    return (
        <div>
            <h1>RTSP Stream Player</h1>
            <input
                type="text"
                placeholder="Enter RTSP URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />
            <button onClick={handleStream}>Start Stream</button>
            {/* {streamUrl && <VideoPlayer streamUrl={streamUrl} />} */}
            <video controls width="600" height={'400px'} autoPlay = {true}>
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default RTSP;
