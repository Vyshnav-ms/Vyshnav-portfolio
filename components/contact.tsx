"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ✅ Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen py-20 px-6 bg-black overflow-hidden text-white"
    >
      {/* Glowing Cyan Backgrounds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[28rem] h-[28rem] bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[24rem] h-[24rem] bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-300"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-5xl md:text-6xl font-bold drop-shadow-[0_0_30px_#22d3ee] animate-pulse ${
              isVisible
                ? "opacity-100 scale-105"
                : "opacity-0 scale-90 translate-y-10"
            } transition-all duration-700`}
          >
            <span className="text-cyan-400">CONTACT</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            Let’s collaborate and build something amazing together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Contact Info */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-8 hover:text-cyan-300 transition-colors duration-300">
              Let’s Connect
            </h3>

            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: "EMAIL",
                  info: "vyshnams1@gmail.com",
                  href: "mailto:vyshnams1@gmail.com",
                },
                {
                  icon: Github,
                  title: "GITHUB",
                  info: "github.com/Vyshnav-ms",
                  href: "https://github.com/Vyshnav-ms",
                },
                {
                  icon: Linkedin,
                  title: "LINKEDIN",
                  info: "linkedin.com/in/vyshnav-m-s",
                  href: "https://linkedin.com/in/vyshnav-m-s",
                },
                {
                  icon: Phone,
                  title: "PHONE",
                  info: "+91 8547776976",
                  href: "tel:+918547776976",
                },
              ].map(({ icon: Icon, title, info, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-4 items-start group p-4 rounded-lg hover:bg-cyan-600/10 transition-all duration-300 cursor-pointer transform hover:translate-x-2"
                >
                  <Icon className="w-6 h-6 text-cyan-400 mt-1 group-hover:scale-125 group-hover:text-cyan-300 transition-all duration-300 flex-shrink-0" />
                  <div className="transition-transform duration-300 group-hover:translate-x-1">
                    <p className="text-gray-400 text-sm font-mono group-hover:text-cyan-300 transition-colors duration-300">
                      {title}
                    </p>
                    <p className="text-white hover:text-cyan-300 transition-colors duration-300 font-medium">
                      {info}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right - Contact Form */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl border border-cyan-600/30 bg-black/40 backdrop-blur-md hover:bg-black/60 transition-all duration-300 hover:shadow-[0_0_40px_#22d3ee60]"
            >
              <div className="space-y-6 mb-8">
                {/* Name */}
                <div className="group/input">
                  <label className="block text-sm font-mono text-gray-400 mb-2 group-hover/input:text-cyan-300 transition-colors duration-300">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-2 bg-transparent border border-cyan-600/30 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 hover:border-cyan-500/60 transition-all duration-300 focus:shadow-[0_0_20px_#22d3ee40]"
                    required
                  />
                </div>

                {/* Email */}
                <div className="group/input">
                  <label className="block text-sm font-mono text-gray-400 mb-2 group-hover/input:text-cyan-300 transition-colors duration-300">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 bg-transparent border border-cyan-600/30 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 hover:border-cyan-500/60 transition-all duration-300 focus:shadow-[0_0_20px_#22d3ee40]"
                    required
                  />
                </div>

                {/* Message */}
                <div className="group/input">
                  <label className="block text-sm font-mono text-gray-400 mb-2 group-hover/input:text-cyan-300 transition-colors duration-300">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Your message..."
                    className="w-full px-4 py-2 bg-transparent border border-cyan-600/30 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 hover:border-cyan-500/60 transition-all duration-300 focus:shadow-[0_0_20px_#22d3ee40] resize-none"
                    required
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white font-bold rounded-lg border border-cyan-500/60 hover:from-cyan-500 hover:to-cyan-600 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_0_40px_#22d3ee80]"
              >
                {submitted ? "Message Sent ✓" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Soft Radar Glow Rings */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          {[200, 300, 400].map((r, i) => (
            <circle
              key={i}
              cx="500"
              cy="500"
              r={r}
              fill="none"
              stroke="#22d3ee"
              strokeWidth="1"
              opacity={(0.4 - i * 0.1).toFixed(1)}
              className="animate-pulse"
            />
          ))}
        </svg>
      </div>
    </section>
  );
}
