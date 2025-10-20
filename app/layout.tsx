"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "@/lib/store";
import "aos/dist/aos.css";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MindFlow — Journal Freely, Reflect Deeply",
  description:
    "MindFlow is your serene digital space to write, reflect, and grow. Capture your thoughts effortlessly with a distraction-free journaling experience.",
  keywords: [
    "journal",
    "mindfulness",
    "reflection",
    "mental health",
    "writing",
  ],
  authors: [{ name: "Jane Sidney" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
