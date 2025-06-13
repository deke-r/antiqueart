'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Bootstrap from '../libs/Bootstrap';
import TawkToWidget from '@/components/TawkToWidget';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AuthProvider, useAuth } from '../Context/AuthContext';

function FullPageLoader() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-white">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

function AppShell({ children }) {
  const { loading } = useAuth();
  const pathname = usePathname();

  const isAdminRoute = pathname.startsWith('/admin');

  if (loading) return <FullPageLoader />;

  return (
    <>

      <Bootstrap />
      {!isAdminRoute && <TawkToWidget />}
      {!isAdminRoute && <Header />}
      <main className="flex-grow-1">{children}</main>
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="d-flex flex-column min-vh-100">
        <AuthProvider>
          <AppShell>{children}</AppShell>
        </AuthProvider>
      </body>
    </html>
  );
}
