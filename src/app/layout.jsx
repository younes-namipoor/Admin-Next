import { Geist, Geist_Mono } from "next/font/google";
import Page from "./page";
import './global.css'
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body
        className="bg-[#151c2c] text-white"
      >
      {children}
       
      </body>
    </html>
  );
}
