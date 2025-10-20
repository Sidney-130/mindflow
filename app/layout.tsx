import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "@/components/Providers";
import "aos/dist/aos.css";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MindFlow — Journal Freely, Reflect Deeply",
  description:
    "MindFlow is your serene digital space to write, reflect, and grow. Capture your thoughts effortlessly with a distraction-free journaling experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#010a1f] text-gray-100`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
