import './globals.css';
import Navbar from '@/components/navbar';
import { ReactNode } from 'react';

export const metadata = {
  title: 'SMK Informatika Pesat',
  description: 'Website resmi sekolah SMK Informatika Pesat',
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
