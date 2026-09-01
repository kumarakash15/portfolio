import React from 'react';
import { Download, Code2, Sparkles, Cpu } from 'lucide-react';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import { personalInfo, socialLinks } from '../../utils/constants.js';
import FadeIn from '../animation/Fadein.jsx';
import RadialGradientBackground from '../background/RadialGradientBackground.jsx';

const iconMap = {
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

export default function About() {
    return (
        <section id="about" className='relative py-20 bg-black overflow-hidden'>
            <RadialGradientBackground variant='about' />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Left column content */}
                    <div className="flex flex-col gap-12">
                        <div className="flex flex-col gap-8">
                            <FadeIn delay={60}>
                                <div className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-primary/30 bg-primary/10 rounded-full w-fit">
                                    <Code2 className='w-4 h-4 text-primary' />
                                    <span className="text-sm text-primary font-medium">Full-Stack Web Developer</span>
                                    <Sparkles className='w-4 h-4 text-primary' />
                                </div>
                            </FadeIn>

                            <FadeIn delay={100}>
                                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                                    Creating Digital Experiences that Matter
                                </h2>
                            </FadeIn>

                            <FadeIn delay={200}>
                                <div className="flex flex-col gap-4">
                                    {personalInfo.bio.map((paragraph, index) => (
                                        <p key={index} className='text-base text-white/70 leading-relaxed'>{paragraph}</p>
                                    ))}
                                </div>
                            </FadeIn>
                        </div>

                        <FadeIn delay={300}>
                            <button
                                onClick={() => window.open(personalInfo.resume, '_blank')}
                                className='group inline-flex items-center gap-3 bg-white hover:bg-white/90 text-black rounded-full px-8 py-3 text-base font-medium transition-all duration-300 w-fit'
                            >
                                <Download className='w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300' />
                                Download Resume
                            </button>
                        </FadeIn>
                    </div>

                    {/* Right column content (Bento Grid) */}
                    <FadeIn delay={200}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 h-full">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-primary/10 rounded-xl">
                                            <Code2 className='w-6 h-6 text-primary' />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-white mb-2">Expertise</h3>
                                            <p className="text-sm text-white/70 leading-relaxed">Specialized in building scalable Web & Android applications with modern technologies and best practices.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 h-full">
                                    <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                                        <Sparkles className='w-5 h-5 text-primary' />
                                    </div>
                                    <h3 className="text-base font-semibold text-white mb-2">Clean Code</h3>
                                    <p className="text-sm text-white/70 leading-relaxed">Writing maintainable, well-documented code.</p>
                                </div>
                            </div>

                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 h-full">
                                    <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                                        <Cpu className='w-5 h-5 text-primary' />
                                    </div>
                                    <h3 className='text-base font-semibold text-white mb-2'>Performance</h3>
                                    <p className="text-sm text-white/70 leading-relaxed">Optimizing speed and efficiency in every project.</p>
                                </div>
                            </div>

                            {/* Social Links Section */}
                            <div className="col-span-2 relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">

                                    <div className="flex flex-wrap justify-center md:justify-between items-center gap-4">
                                        {socialLinks.map((social) => {
                                            const Icon = iconMap[social.name];
                                            return (
                                                <a
                                                    key={social.name}
                                                    href={social.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex flex-col items-center gap-2 group/item"
                                                >
                                                    <div className="p-3 bg-white/5 border border-white/10 rounded-full group-hover/item:bg-primary/10 group-hover/item:border-primary/30 transition-all duration-300">
                                                        {Icon && <Icon className="w-5 h-5 text-white group-hover/item:text-primary transition-colors duration-300" />}
                                                    </div>
                                                    <span className="text-xs text-white/60 group-hover/item:text-white transition-colors duration-300">
                                                        {social.name}
                                                    </span>
                                                </a>
                                            );
                                        })}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    )
}