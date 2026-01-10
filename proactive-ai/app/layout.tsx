import type { Metadata } from "next";
import { Inter, Krona_One } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const kronaOne = Krona_One({
  variable: "--font-krona",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Proactive AI System",
  description: "What should the system notice without being asked?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${kronaOne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
