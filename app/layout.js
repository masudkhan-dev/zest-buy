import { Inter } from "next/font/google";
import "./globals.css";
import Menubar from "@/components/Menubar/Menubar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zest Buy",
  description: "Zest buy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menubar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
