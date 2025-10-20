"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="font-sans text-gray-100">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full backdrop-blur-lg border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 md:px-6 py-4">
          <h1 className="text-lg md:text-xl font-bold text-white">MindFlow</h1>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            {["Home", "Features", "Preview", "Get Started"].map((item, i) => (
              <a
                key={i}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="hover:text-blue-400 transition"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-[#010a1f]/95 border-t border-white/10 flex flex-col items-center space-y-4 py-4">
            {["Home", "Features", "Preview", "Get Started"].map((item, i) => (
              <a
                key={i}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="text-gray-200 hover:text-blue-400 transition"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-24"
      >
        <h1
          data-aos="fade-up"
          className="text-4xl md:text-6xl font-bold text-blue-200 leading-tight"
        >
          Write. Reflect. Grow.
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-gray-400 mt-4 max-w-md md:max-w-xl"
        >
          MindFlow helps you capture your thoughts, track your growth, and
          reflect on your journey — all in a calm, distraction-free space.
        </p>
        <Button
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-6 bg-blue-600 hover:bg-blue-500 text-sm md:text-base px-6 py-2 md:px-8"
          onClick={() => (window.location.href = "/dashboard")}
        >
          Start Journaling
        </Button>
      </section>

      {/* Features */}
      <section id="features" className="py-24 max-w-6xl mx-auto px-4 md:px-6">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold text-center text-blue-300"
        >
          Built for Clarity & Calm
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mt-12">
          {[
            {
              title: "Clean Interface",
              desc: "A peaceful space to write and organize your thoughts.",
            },
            {
              title: "Powerful Editing",
              desc: "Edit, delete, and manage your entries effortlessly.",
            },
            {
              title: "Your Data, Your Space",
              desc: "Everything stays private, synced securely with Supabase.",
            },
          ].map((f, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="bg-[#0b173a] p-6 rounded-2xl border border-blue-900 hover:border-blue-500 transition"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-blue-300">
                {f.title}
              </h3>
              <p className="text-gray-400 text-sm md:text-base">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Preview Section */}
      <section
        id="preview"
        className="py-24 bg-[#021031] border-t border-b border-white/10"
      >
        <div className="max-w-5xl mx-auto text-center px-4 md:px-6">
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-bold text-blue-300 mb-8"
          >
            See It In Action
          </h2>
          <div
            data-aos="zoom-in"
            className="rounded-2xl border border-blue-900 overflow-hidden"
          >
            <img
              src="/dashboard-preview.png"
              alt="MindFlow Preview"
              className="w-full object-cover"
            />
          </div>
          <p
            data-aos="fade-up"
            className="text-gray-400 mt-6 text-sm md:text-base"
          >
            Capture your moments, anytime — anywhere.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        id="getstarted"
        className="py-32 text-center px-4 md:px-6 max-w-3xl mx-auto"
      >
        <h2
          data-aos="fade-up"
          className="text-2xl md:text-4xl font-bold text-blue-200"
        >
          Ready to Start Your Journey?
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="mt-4 text-gray-400 text-sm md:text-base"
        >
          Begin your journaling experience today. Every thought deserves a home.
        </p>
        <Button
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-6 bg-blue-600 hover:bg-blue-500 text-sm md:text-base px-6 md:px-8"
          onClick={() => (window.location.href = "/dashboard")}
        >
          Get Started — It’s Free
        </Button>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-xs md:text-sm text-gray-500">
        © {new Date().getFullYear()} MindFlow.
      </footer>
    </main>
  );
}
