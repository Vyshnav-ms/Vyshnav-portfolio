"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen py-20 px-4 relative bg-black overflow-hidden"
    >
      {/* Subtle cyan glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-300 drop-shadow-[0_0_12px_#00ffff] animate-pulse">
            About Me
          </span>
        </h2>
        <p className="text-gray-400 text-center mb-16 text-lg tracking-wide">
          Crafting Digital Solutions with Passion
        </p>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Column */}
          <div
            className={`transition-all duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)] ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
              }`}
          >
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed group hover:text-gray-100 transition-all duration-300 hover:translate-x-2">
                I'm{" "}
                <span className="text-cyan-400 font-bold">Vyshnav M S</span>, a
                passionate full-stack developer dedicated to building innovative
                digital solutions that merge elegant design with powerful
                functionality.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed group hover:text-gray-100 transition-all duration-300 hover:translate-x-2">
                With deep expertise in{" "}
                <span className="text-cyan-400">React, Django, Python</span>, and
                modern web technologies, I create responsive, scalable
                applications that solve real-world challenges. My focus lies in
                delivering user-centric designs combined with robust backend
                architecture.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed group hover:text-gray-100 transition-all duration-300 hover:translate-x-2">
                Currently exploring the frontiers of{" "}
                <span className="text-cyan-400">artificial intelligence</span>{" "}
                and{" "}
                <span className="text-cyan-400">cybersecurity</span>, I'm
                committed to staying at the cutting edge of technology while
                maintaining clean, maintainable code.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              {[
                { number: "50+", label: "Projects" },
                { number: "2+", label: "Years Exp" },
                { number: "100%", label: "Dedication" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="glass-effect p-4 rounded-lg border border-cyan-500/30 hover:border-cyan-400/70 text-center transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] group"
                >
                  <p className="text-cyan-400 text-2xl font-bold group-hover:text-cyan-300 transition-colors duration-300">
                    {stat.number}
                  </p>
                  <p className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Right Column */}
          <div
            className={`transition-all duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)] ${isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
              }`}
          >
            <div className="relative h-[450px] flex items-center justify-center">
              {/* Rotating Glow Ring */}
              <div className="absolute w-80 h-80 border border-cyan-400/40 rounded-full animate-[spin_10s_linear_infinite] blur-sm"></div>
              <div className="absolute w-64 h-64 border border-cyan-300/50 rounded-full animate-[spin_12s_linear_reverse_infinite] blur-sm"></div>

              {/* Soft Cyan Glow Layer */}
              <div className="absolute w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl animate-pulse"></div>

              {/* Center Logo (Floating + Glow) */}
              <div className="relative z-10">
                <div className="absolute inset-0 rounded-full blur-2xl bg-cyan-500/30 animate-pulse"></div>
                <Image
                  src="/vysh-logo-2.png"
                  alt="Vyshnav Logo"
                  width={230}
                  height={230}
                  className="rounded-full shadow-[0_0_40px_#00ffff] transition-transform duration-700 ease-in-out animate-[float_4s_ease-in-out_infinite]"
                />
              </div>

              {/* Energy Sparks (random floating particles) */}
              <div
                className="absolute w-3 h-3 bg-cyan-400 rounded-full animate-[sparkle_3s_ease-in-out_infinite]"
                style={{ top: "10%", left: "20%" }}
              ></div>
              <div
                className="absolute w-2 h-2 bg-cyan-300 rounded-full animate-[sparkle_4s_ease-in-out_infinite]"
                style={{ bottom: "15%", right: "25%" }}
              ></div>
              <div
                className="absolute w-2 h-2 bg-cyan-500 rounded-full animate-[sparkle_5s_ease-in-out_infinite]"
                style={{ bottom: "5%", left: "45%" }}
              ></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
