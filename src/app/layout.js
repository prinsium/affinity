import Footer from "@/components/Footer";
import "./globals.css";
import NavbarMobile from "@/components/NavbarMobile";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Affinity",
  description: "Creative suite for professionals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100..900;1,100..900&family=Geist:wght@100..900&family=Sora:wght@100..800&family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <div className="w-full sticky top-0 left-0 z-50">
        <div className="hidden md:block"><Navbar /></div>
        <div className="block md:hidden"><NavbarMobile /></div>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
