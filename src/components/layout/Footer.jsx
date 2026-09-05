import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import { personalInfo, socialLinks, navLinks } from '../../utils/constants.js'
import { scrollToSection } from '../../hooks/useScrollSpy.js'
import FadeIn from '../animation/Fadein';
import { MapPin, Mail } from 'lucide-react'; // Added Mail to imports

const Footer = () => {
  const socialIcons = {
    LinkedIn: FaIcons.FaLinkedinIn,
    Linkdin: FaIcons.FaLinkedinIn,
    linkedin: FaIcons.FaLinkedinIn,
    Github: FaIcons.FaGithub,
    GitHub: FaIcons.FaGithub,
    github: FaIcons.FaGithub,
    LeetCode: SiIcons.SiLeetcode,
    Leetcode: SiIcons.SiLeetcode,
    leetcode: SiIcons.SiLeetcode,
    Instagram: FaIcons.FaInstagram,
    instagram: FaIcons.FaInstagram,
    Twitter: FaIcons.FaTwitter,
    twitter: FaIcons.FaTwitter,
    Facebook: FaIcons.FaFacebookF,
    facebook: FaIcons.FaFacebookF
  };

  return (
    // Fixed: changed <Footer> to <footer> to prevent infinite recursion
    <footer className='relative bg-black overflow-hidden border-t border-white/10'>
      <div className="absolute inset-0 overflow-hidden"> {/* Fixed: insert-0 -> inset-0 */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 opacity-30 rounded-full blur-3xl" /> {/* Fixed: w-90 -> w-96, opacity-300 -> opacity-30 */}
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 opacity-30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Column 1: Brand & Contact */}
          <FadeIn delay={0}>
            <div>
              <h3 className="text-3xl font-bold bg-linear-to-r from-primary/80 via-primary to-primary/80 bg-clip-text text-transparent mb-4">
                {personalInfo.name.split(' ')[0]}
              </h3>
              <p className="text-white/60 text-sm mb-6 leading-relaxed">
                {personalInfo.tagline}
              </p>
              <div className="space-y-3">
                {/* Fixed: href syntax and mailto typo */}
                <a href={`mailto:${personalInfo.email}`} className='group flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-primary/30 transition-all duration-300'>
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className='w-4 h-4 text-primary' />
                  </div>
                  <span className='text-white/70 text-sm group-hover:text-white transition-colors'> {/* Fixed: transition-color */}
                    {personalInfo.email}
                  </span>
                </a>
                <div className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl"> {/* Fixed: bg--white/50 -> bg-white/5 */}
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className='w-4 h-4 text-primary' />
                  </div>
                  <span className="text-white/70 text-sm">
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Column 2: Quick Links */}
          <FadeIn delay={100}>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-white/60 hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Column 3: Social Links */}
          <FadeIn delay={200}>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = socialIcons[social.name];
                  return Icon ? (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                    >
                      <Icon className="w-5 h-5 text-white/70" />
                    </a>
                  ) : null;
                })}
              </div>
            </div>
          </FadeIn>

        </div>

        <FadeIn delay={300}>
          {/* Fixed: added border-t to make the border color visible */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <p className="text-white/50 text-sm">
                {/* Fixed: Added space and changed 'Right' to 'Rights' */}
                {new Date().getFullYear()} {personalInfo.name}. All Rights reserved
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}

export default Footer