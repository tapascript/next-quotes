import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "QuoteFeed",
  description: "A Quote Feed created with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen">
          <Header />
          {children}
          <Footer />
        </div> 
      </body>
    </html>
  );
}
