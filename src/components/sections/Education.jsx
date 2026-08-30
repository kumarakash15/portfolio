// Education.jsx
import React from 'react';
import { GraduationCap } from 'lucide-react';
import { education } from '../../utils/constants.js';
import FadeIn from '../animation/Fadein.jsx';

export default function Education() {
    return (
        <section id="education" className='relative py-20 bg-black overflow-hidden'>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn delay={100}>
                    <div className="flex items-center gap-3 mb-12">
                        <GraduationCap className="w-8 h-8 text-primary" />
                        <h3 className="text-3xl font-bold text-white">Education</h3>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {education.map((study, index) => (
                        <FadeIn key={study.id} delay={150 + index * 50}>
                            <div className="relative pl-8">
                                <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-primary border-4 border-black z-10"></div>
                                <div className="absolute left-[5px] top-2 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/30 to-transparent"></div>
                                
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 h-full">
                                    <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                                        <h4 className="text-lg font-semibold text-white">{study.degree}</h4>
                                        <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">{study.duration}</span>
                                    </div>
                                    <p className="text-sm text-white/80 mb-2 font-medium">{study.institution}</p>
                                    <p className="text-sm text-white/50 mb-4">{study.location}</p>
                                    <div className="inline-block text-sm text-white bg-white/10 px-3 py-1 rounded-md font-mono">
                                        {study.result}
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    )
}