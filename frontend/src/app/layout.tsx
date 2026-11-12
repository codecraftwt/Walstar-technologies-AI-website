import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Walstar Technologies | AI, Automation & Software",
  description:
    "We combine artificial intelligence, intelligent automation, and modern software engineering to help brands work smarter, innovate faster, and scale with confidence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
