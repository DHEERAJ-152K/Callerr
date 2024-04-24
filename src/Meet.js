import React, { useState, useEffect } from 'react';

function Meet() {
    const [stream, setStream] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const openMediaDevices = async (constraints) => {
            try {
                const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
                console.log('Got MediaStream:', mediaStream);
                setStream(mediaStream);
            } catch (error) {
                console.error('Error accessing media devices.', error);
                setError(error);
            }
        }
        const constraints = {
            'video': {
                'width': { 'exact': 1024 },
                'height': { 'exact': 768 }
            },
            'audio': true
        };
        
        openMediaDevices(constraints);

    }, []);

    async function playVideoFromCamera() {
        try {
            const constraints = { 'video': true, 'audio': false };
            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            const videoElement = document.querySelector('video#localVideo');
            videoElement.srcObject = stream;
        } catch (error) {
            console.error('Error opening video camera.', error);
        }
    }

    return (
        <div>
            <div className="localStream">
                <video id="localVideo" autoPlay playsInline controls={false} />
            </div>
            <button onClick={playVideoFromCamera}>Start</button>
        </div>
    );
}

export default Meet;
