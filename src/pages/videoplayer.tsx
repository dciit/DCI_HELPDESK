import React, { useEffect, useRef } from 'react';

const VideoPlayer: React.FC<{ streamUrl: string }> = ({ streamUrl }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.src = streamUrl;
        }
        console.log(streamUrl)
    }, [streamUrl]);

    return <video ref={videoRef} controls autoPlay style={{ width: '100%' }} />;
};

export default VideoPlayer;
