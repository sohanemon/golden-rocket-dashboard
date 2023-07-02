import './globals.css';
import { Inter } from 'next/font/google';
import Sidebar from './sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Golden Rocket Dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className + ' flex items-start '}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
