// SocketComponent.tsx
import React, { useEffect } from 'react';
import io from 'socket.io-client';

const SocketComponent: React.FC = () => {
    useEffect(() => {
        const socket = io('http://localhost:3001', { transports: ['websocket'] }); // Replace with your Socket.IO server URL

        // Event handlers
        socket.on('connect', () => {
            console.log('Connected to Socket.IO server');
        });

        socket.on('message', (message: string) => {
            console.log('Message received from server:', message);
        });

        socket.on('disconnect', () => {
            console.log('Disconnected from Socket.IO server');
        });

        // Clean up on unmount
        return () => {
            socket.disconnect();
        };
    }, []); // Run this effect only once on component mount
    const handleChange = async (msg: string) => {
        const socket = io('http://localhost:3001', { transports: ['websocket'] });
        socket.emit('message',msg);
    }
    return <div>
        <span>Socket.IO Connection</span>
        <input className='border rounded-md p-3' type="text" onChange={(e: any) => handleChange(e.target.value)} />
    </div>;
};

export default SocketComponent;
