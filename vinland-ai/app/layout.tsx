import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Vinland AI — Small steps, serene progress.",
  description: "A modern training companion blending AI coaching, journaling, and serene progress.",
  metadataBase: new URL("https://vinland-ai.example"),
  openGraph: {
    title: "Vinland AI",
    description: "Small steps, serene progress.",
    type: "website",
    url: "/",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Vinland AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinland AI",
    description: "Small steps, serene progress.",
    images: ["/opengraph-image"],
  },
  icons: { icon: "/Favicon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground gold-gradient`}>
        <div className="min-h-dvh">
          {children}
        </div>
      </body>
    </html>
  );
}
