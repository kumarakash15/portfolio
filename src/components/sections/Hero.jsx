import { ChevronDown, Star } from "lucide-react";
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiJavascript,
  SiGithubactions,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

import { personalInfo, stats } from "../../utils/constants.js";
import { scrollToSection } from "../../hooks/useScrollSpy.js";
import FadeIn from "../animation/Fadein.jsx";
import RadialGradientBackground from "../background/RadialGradientBackground.jsx";
import akashImage from "../../assets/Akash image.png";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Background */}
      <RadialGradientBackground variant="hero" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="text-left">

            {/* Badge */}
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2.5 px-[18px] py-[11px] mb-8 bg-gradient-to-r from-primary/10 via-primary/15 to-primary/20 border border-primary/20 rounded-full">
                <Star className="w-4 h-4 text-white fill-white" />

                <span className="text-xs md:text-sm text-white tracking-[1.2px]">
                  {personalInfo.title} | Based in {personalInfo.location}
                </span>
              </div>
            </FadeIn>

            {/* Heading */}
            <FadeIn delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight">
                Full Stack Developer
              </h1>
            </FadeIn>

            {/* Description */}
            <FadeIn delay={200}>
              <p className="text-lg text-white/70 max-w-[550px] mb-8">
                Building responsive, secure, and scalable web & Android applications using
                React.js, React Native, Node.js, Express.js, MongoDB, and MySQL. Experienced in
                developing RESTful APIs and MVC-based applications, with a growing
                focus on AWS cloud services and CI/CD practices to deliver reliable
                and production-ready solutions.
              </p>
            </FadeIn>

            {/* Contact Button */}
            <FadeIn delay={300}>
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-0 mb-12 group"
              >
                <div className="relative z-10 bg-white text-[#212121] rounded-[17px] px-[26px] py-[13px] text-base font-medium border border-white transition-all duration-300 group-hover:bg-transparent group-hover:text-white">
                  Get in Touch
                </div>
              </button>
            </FadeIn>

            {/* Stats */}
            <FadeIn delay={400}>
              <div className="flex flex-wrap lg:flex-nowrap justify-between items-start gap-x-4 gap-y-6 max-w-full">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-left border-r border-white/50 pr-4 md:pr-6 last:border-r-0"
                  >
                    <div className="text-xl md:text-2xl font-normal text-primary mb-[8px] font-mono">
                      {stat.value}
                    </div>

                    <p className="text-xs md:text-sm text-white leading-snug">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right Column */}
          <FadeIn delay={200}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] max-w-[500px] ml-auto group">

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute inset-[-2px] bg-gradient-to-r from-primary/20 via-primary/10 to-primary animate-spin-slow rounded-2xl"></div>
                </div>

                {/* Image Container */}
                <div className="relative rounded-2xl overflow-hidden m-[1px] h-[calc(100%-2px)]">
                  <img
                    src={akashImage}
                    alt="Akash Kumar Sahoo"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Technology Logos */}
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <FadeIn delay={500}>
                    <div className="flex flex-wrap items-center justify-center gap-4 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">

                      {/* React.js */}
                      <div
                        className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                        title="React.js"
                      >
                        <SiReact className="w-full h-full text-primary" />
                      </div>

                      {/* JavaScript */}
                      <div
                        className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                        title="JavaScript"
                      >
                        <SiJavascript className="w-full h-full text-primary" />
                      </div>

                      {/* Node.js */}
                      <div
                        className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                        title="Node.js"
                      >
                        <SiNodedotjs className="w-full h-full text-primary" />
                      </div>
                      {/* Express.js */}
                      <div
                        className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                        title="Express.js"
                      >
                        <span className="text-[10px] font-bold text-primary">
                          EX
                        </span>
                      </div>
                      {/* MongoDB */}
                      <div
                        className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                        title="MongoDB"
                      >
                        <SiMongodb className="w-full h-full text-primary" />
                      </div>

                      {/* MySQL */}
                      <div
                        className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                        title="MySQL"
                      >
                        <SiMysql className="w-full h-full text-primary" />
                      </div>

                      {/* Tailwind CSS */}
                      <div
                        className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                        title="Tailwind CSS"
                      >
                        <SiTailwindcss className="w-full h-full text-primary" />
                      </div>

                      {/* Java */}
                      <div
                        className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                        title="Java"
                      >
                        <FaJava className="w-full h-full text-primary" />
                      </div>

                      {/* Selenium WebDriver */}
                      <div
                        className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                        title="Selenium WebDriver"
                      >
                        <span className="text-[10px] font-bold text-primary">
                          SE
                        </span>
                      </div>
                      {/* AWS */}
                      <div
                        className="w-8 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                        title="AWS"
                      >
                        <span className="text-[9px] font-bold text-primary">
                          AWS
                        </span>
                      </div>

                      {/* CI/CD - GitHub Actions */}
                      <div
                        className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                        title="CI/CD - GitHub Actions"
                      >
                        <SiGithubactions className="w-full h-full text-primary" />
                      </div>

                    </div>
                  </FadeIn>
                </div>

              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  );
}

export default Hero;