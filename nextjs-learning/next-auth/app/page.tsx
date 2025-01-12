"use client";
import { Home } from './(components)/components-imports';

import { SessionProvider } from 'next-auth/react';

export default function Main() {
    return <SessionProvider>
        <Home />
    </SessionProvider>
}