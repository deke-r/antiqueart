'use client';

import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Bootstrap from '../libs/Bootstrap';
import TawkToWidget from '@/components/TawkToWidget';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';

export default function RootLayout({ children }) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="d-flex flex-column min-vh-100">
        <TawkToWidget/>
        <Bootstrap />
<Header/>
        <main className="flex-grow-1">
        
          {children}
        </main>
   
      </body>
    </html>
  );
}