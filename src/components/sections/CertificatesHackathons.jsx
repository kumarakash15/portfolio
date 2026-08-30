import React from 'react';
import { BadgeCheck, Trophy } from 'lucide-react';
import { certifications, hackathons } from '../../utils/constants.js';
import FadeIn from '../animation/Fadein.jsx';

export default function CertificatesHackathons() {
    return (
        <section id="Certificate & Hackthon" className='relative py-20 bg-black overflow-hidden'>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Certifications */}
                    <FadeIn delay={100}>
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <BadgeCheck className="w-8 h-8 text-primary" />
                                <h3 className="text-2xl font-bold text-white">Certifications</h3>
                            </div>
                            <ul className="space-y-4">
                                {certifications.map((cert, index) => (
                                    <li key={index} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                                        <span className="text-primary mt-1">▹</span>
                                        <span className="text-sm text-white/70">{cert}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </FadeIn>

                    {/* Hackathons */}
                    <FadeIn delay={200}>
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <Trophy className="w-8 h-8 text-primary" />
                                <h3 className="text-2xl font-bold text-white">Hackathons</h3>
                            </div>
                            <ul className="space-y-4">
                                {hackathons.map((hack, index) => (
                                    <li key={index} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                                        <span className="text-primary mt-1">▹</span>
                                        <span className="text-sm text-white/70">{hack}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    )
}