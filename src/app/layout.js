
import { Geist, Geist_Mono } from "next/font/google"; 
import "./globals.css";

const geistSans = Geist({ 
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({ 
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mera Next.js Blog",
  description: "Next.js aur App Router se banaya gaya ek shandar blog.",
  verification: {
    google: "YOUR_UNIQUE_VERIFICATION_STRING", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}