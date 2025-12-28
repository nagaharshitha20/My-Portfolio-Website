import Navbar from '../components/Navbar';
import Home from './home/page';
import './globals.css';

export const metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Home />
        {/* {children} */}
      </body>
    </html>
  );
}