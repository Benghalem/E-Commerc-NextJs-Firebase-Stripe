import "../styles/globals.css";
/*  React Slick Css */
import "slick-carousel/slick/slick.css";
import { Open_Sans } from "next/font/google";


const open_Sans = Open_Sans({ subsets: ["latin"], variable:"--font-open-sans" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={open_Sans.variable} suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
