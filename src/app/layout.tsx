import "./globals.css";

import { Inter } from "next/font/google";
import { Footer } from "./footer";
import { Header } from "./header";
import { ThemeProvider } from "./theme-provider";

export { metadata, viewport } from "./metadata";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // For next-theme
      suppressHydrationWarning
    >
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
