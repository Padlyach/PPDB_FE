import './globals.css';
import Navbar from '@/components/navbar';
import { ReactNode } from 'react';

export const metadata = {
  title: 'PPDB SEKOLAH PESAT',
  description: 'Website resmi PPDB Sekolah Pesat',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
