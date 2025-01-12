'use client';
import { useEffect, useState } from 'react';
import { decodedToken } from './profile';
import jwt from 'jsonwebtoken';

export default function Profile() {
    const [userId, setUserId] = useState<string | null>(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log('token', token);

        // const decodedInfo = decodedToken(token);
         const secret = String(process.env.NEXT_PUBLIC_JWT_SECRET);
            const decodedInfo = jwt.verify(token, secret);
            
        if (decodedInfo && typeof decodedInfo === 'object') {
            setUserId(decodedInfo.userId as string);
        }
    }, []);

    return (
        <div>
            <h1>Profile Page</h1>
            <p>UserId: {userId ? userId : 'N/A'}</p>
        </div>
    );
}