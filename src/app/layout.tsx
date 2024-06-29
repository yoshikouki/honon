import "./globals.css";

import { Inter } from "next/font/google";
import { Footer } from "./footer";
import { Header } from "./header";

export { metadata, viewport } from "./metadata";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
