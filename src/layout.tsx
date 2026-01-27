import Navbar from "./components/Navbar";
import UniverseBackground from "./components/UniverseBackground";
import "./globals.css";

export const metadata = {
  title: "My Portfolio",
  description: "Welcome to my universe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <UniverseBackground />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
