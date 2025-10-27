// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leon Huck | Portfolio",
  description: "My personal portfolio website.",
  generator: "Next.js",
  icons: {
    icon: "/profile/profile.png",
    shortcut: "/profile/profile.png",
    apple: "/profile/profile.png",
  },
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
