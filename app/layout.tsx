import "../styles/globals.css";
/*  React Slick Css */
import "slick-carousel/slick/slick.css";
import Navbar from "@/components/Navbar";
import { TopFooter } from "@/components/TopFooter";
import Footer from "@/components/Footer";
import { Open_Sans } from "next/font/google";
import Head from "next/head";

const open_Sans = Open_Sans({ subsets: ["latin"], variable:"--font-open-sans" });

export const metadata = {
  title:"Shoppers.com | Save Money. Live Batter Aziz",
  description:"Shoppers.com | Save Money. Live Batter",
  viewpart:"width=device-width, initial-scale=1",
  icon: "/smallLogo.ico",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={open_Sans.variable} suppressHydrationWarning={true}>
        <Navbar/>
        {children}
        <TopFooter />
        <Footer />
      </body>
    </html>
  );
}
